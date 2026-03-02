const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI || 'http://localhost:3000/callback';
const SCOPES = 'user-top-read user-read-private user-read-email';

const AUTHORIZE_URL = 'https://accounts.spotify.com/authorize';
const TOKEN_URL = 'https://accounts.spotify.com/api/token';
const API_BASE_URL = 'https://api.spotify.com/v1';

/**
 * Generates a random string for the state parameter
 */
const generateRandomString = (length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], '');
};

/**
 * Redirects user to Spotify authorization page
 */
export const redirectToSpotifyAuth = () => {
    const state = generateRandomString(16);
    localStorage.setItem('spotify_auth_state', state);
    
    const params = new URLSearchParams({
        response_type: 'code',
        client_id: CLIENT_ID,
        scope: SCOPES,
        redirect_uri: REDIRECT_URI,
        state: state
    });

    window.location.href = `${AUTHORIZE_URL}?${params.toString()}`;
};

/**
 * Exchanges authorization code for access token
 */
export const getAccessToken = async (code) => {
    const credentials = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    
    const response = await fetch(TOKEN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${credentials}`
        },
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: REDIRECT_URI
        })
    });

    if (!response.ok) {
        throw new Error('Failed to get access token');
    }

    const data = await response.json();
    
    // Store tokens and expiration time
    localStorage.setItem('spotify_access_token', data.access_token);
    localStorage.setItem('spotify_refresh_token', data.refresh_token);
    localStorage.setItem('spotify_token_expiry', Date.now() + data.expires_in * 1000);
    
    return data.access_token;
};

/**
 * Refreshes the access token using the refresh token
 */
export const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem('spotify_refresh_token');
    
    if (!refreshToken) {
        throw new Error('No refresh token available');
    }

    const credentials = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    
    const response = await fetch(TOKEN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${credentials}`
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refreshToken
        })
    });

    if (!response.ok) {
        throw new Error('Failed to refresh access token');
    }

    const data = await response.json();
    
    localStorage.setItem('spotify_access_token', data.access_token);
    localStorage.setItem('spotify_token_expiry', Date.now() + data.expires_in * 1000);
    
    return data.access_token;
};

/**
 * Gets a valid access token, refreshing if necessary
 */
export const getValidAccessToken = async () => {
    const accessToken = localStorage.getItem('spotify_access_token');
    const tokenExpiry = localStorage.getItem('spotify_token_expiry');
    
    if (!accessToken) {
        return null;
    }
    
    // Check if token is expired or will expire in the next minute
    if (tokenExpiry && Date.now() >= tokenExpiry - 60000) {
        try {
            return await refreshAccessToken();
        } catch (error) {
            console.error('Error refreshing token:', error);
            return null;
        }
    }
    
    return accessToken;
};

/**
 * Makes an authenticated request to the Spotify API
 */
const spotifyFetch = async (endpoint, options = {}) => {
    const accessToken = await getValidAccessToken();
    
    if (!accessToken) {
        throw new Error('No valid access token');
    }
    
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
    
    if (!response.ok) {
        throw new Error(`Spotify API error: ${response.statusText}`);
    }
    
    return response.json();
};

/**
 * Fetches user's top tracks from Spotify
 * @param {string} timeRange - short_term, medium_term, or long_term
 * @param {number} limit - Number of tracks to fetch (max 50)
 */
export const getTopTracks = async (timeRange = 'medium_term', limit = 12) => {
    try {
        const data = await spotifyFetch(
            `/me/top/tracks?time_range=${timeRange}&limit=${limit}`
        );
        
        return data.items.map(track => ({
            name: track.name,
            artist: track.artists.map(artist => artist.name).join(', '),
            src: track.preview_url,
            thumbnail: track.album.images[0]?.url || '',
            id: track.id,
            albumName: track.album.name,
            duration: track.duration_ms,
            explicit: track.explicit,
            popularity: track.popularity
        }));
    } catch (error) {
        console.error('Error fetching top tracks:', error);
        throw error;
    }
};

/**
 * Fetches user's saved tracks (liked songs)
 */
export const getSavedTracks = async (limit = 12) => {
    try {
        const data = await spotifyFetch(`/me/tracks?limit=${limit}`);
        
        return data.items.map(item => ({
            name: item.track.name,
            artist: item.track.artists.map(artist => artist.name).join(', '),
            src: item.track.preview_url,
            thumbnail: item.track.album.images[0]?.url || '',
            id: item.track.id,
            albumName: item.track.album.name,
            duration: item.track.duration_ms,
            explicit: item.track.explicit,
            popularity: item.track.popularity
        }));
    } catch (error) {
        console.error('Error fetching saved tracks:', error);
        throw error;
    }
};

/**
 * Fetches tracks from a specific playlist
 */
export const getPlaylistTracks = async (playlistId, limit = 12) => {
    try {
        const data = await spotifyFetch(
            `/playlists/${playlistId}/tracks?limit=${limit}`
        );
        
        return data.items.map(item => ({
            name: item.track.name,
            artist: item.track.artists.map(artist => artist.name).join(', '),
            src: item.track.preview_url,
            thumbnail: item.track.album.images[0]?.url || '',
            id: item.track.id,
            albumName: item.track.album.name,
            duration: item.track.duration_ms,
            explicit: item.track.explicit,
            popularity: item.track.popularity
        }));
    } catch (error) {
        console.error('Error fetching playlist tracks:', error);
        throw error;
    }
};

/**
 * Checks if user is authenticated
 */
export const isAuthenticated = () => {
    return !!localStorage.getItem('spotify_access_token');
};

/**
 * Logs out user
 */
export const logout = () => {
    localStorage.removeItem('spotify_access_token');
    localStorage.removeItem('spotify_refresh_token');
    localStorage.removeItem('spotify_token_expiry');
    localStorage.removeItem('spotify_auth_state');
};

/**
 * Gets user profile information
 */
export const getUserProfile = async () => {
    try {
        return await spotifyFetch('/me');
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error;
    }
};
