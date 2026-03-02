# Spotify Integration Setup Guide

This guide will help you set up the Spotify API integration to display your top tracks in the music player.

## Prerequisites

- A Spotify account (free or premium)
- Node.js installed on your system

## Step 1: Create a Spotify Developer Application

1. Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Log in with your Spotify account
3. Click **"Create an App"**
4. Fill in the application details:
   - **App Name**: My Personal Website (or any name you prefer)
   - **App Description**: A music player displaying my top Spotify tracks
   - Accept the Terms of Service
5. Click **"Create"**

## Step 2: Get Your Credentials

After creating your app:

1. You'll see your app's dashboard
2. Click **"Settings"** button
3. Note down:
   - **Client ID** (visible directly)
   - **Client Secret** (click "View client secret" to reveal)

## Step 3: Configure Redirect URIs

In your app settings:

1. Click **"Edit Settings"**
2. Find the **"Redirect URIs"** section
3. Add the following URIs:
   - For local development: `http://localhost:3000/callback`
   - For production: `https://yourdomain.com/callback` (replace with your actual domain)
4. Click **"Add"** after each URI
5. Scroll down and click **"Save"**

## Step 4: Set Up Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and fill in your credentials:
   ```env
   REACT_APP_SPOTIFY_CLIENT_ID=your_client_id_from_step_2
   REACT_APP_SPOTIFY_CLIENT_SECRET=your_client_secret_from_step_2
   REACT_APP_SPOTIFY_REDIRECT_URI=http://localhost:3000/callback
   ```

3. **Important**: Never commit your `.env` file to version control. It's already in `.gitignore`.

## Step 5: Install Dependencies (if needed)

The required dependencies should already be installed. If not, run:

```bash
npm install
```

## Step 6: Start the Development Server

```bash
npm start
```

The app will open at `http://localhost:3000`

## Step 7: Connect Your Spotify Account

1. Navigate to where the music player is displayed on your website
2. Click the **"Connect to Spotify"** button
3. You'll be redirected to Spotify's authorization page
4. Log in and grant permissions
5. You'll be redirected back to your website
6. Your top tracks should now load automatically!

## Features

The music player will display:
- Your top 12 tracks from the past month
- Album artwork
- Artist names
- 30-second preview clips (where available)

## Customization Options

You can modify the tracks displayed by editing the `getTopTracks` call in `Player.js`:

### Time Range Options
```javascript
// In Player.js, line ~140
const tracks = await getTopTracks('short_term', 12);
```

Change `'short_term'` to:
- `'short_term'` - Last 4 weeks
- `'medium_term'` - Last 6 months (default)
- `'long_term'` - All time

### Number of Tracks
Change the second parameter (12) to any number between 1-50.

### Alternative Data Sources

Instead of top tracks, you can fetch:

**Your Liked Songs:**
```javascript
import { getSavedTracks } from '../../services/spotifyService';
const tracks = await getSavedTracks(12);
```

**Specific Playlist:**
```javascript
import { getPlaylistTracks } from '../../services/spotifyService';
const tracks = await getPlaylistTracks('playlist_id_here', 12);
```

## Troubleshooting

### "No preview tracks available"
- Spotify only provides 30-second previews for some tracks
- Try changing the time range to get different tracks
- Some tracks don't have preview URLs available

### "Failed to load tracks from Spotify"
- Check that your `.env` file has the correct credentials
- Verify your Redirect URI matches exactly in both `.env` and Spotify Dashboard
- Make sure you've granted permissions when authorizing

### Authorization Errors
- Clear your browser's localStorage: `localStorage.clear()` in console
- Try reconnecting to Spotify
- Verify your Client ID and Secret are correct

### Token Expired
- The app automatically refreshes tokens
- If issues persist, click "Reconnect to Spotify"

## Security Notes

1. **Never expose your Client Secret in client-side code in production**
   - For a production app, you should use a backend server to handle token exchanges
   - The current implementation is suitable for personal projects

2. **Keep your `.env` file private**
   - It's listed in `.gitignore` to prevent accidental commits
   - Never share these credentials publicly

3. **Production Deployment**
   - For production, consider implementing a backend API to handle OAuth
   - Use environment variables on your hosting platform (Vercel, Netlify, etc.)
   - Never commit sensitive credentials to your repository

## API Rate Limits

Spotify's API has rate limits:
- The app caches your access token
- Tokens are automatically refreshed
- If you hit rate limits, wait a few minutes before retrying

## Learn More

- [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api)
- [Spotify Authorization Guide](https://developer.spotify.com/documentation/general/guides/authorization-guide/)
- [Spotify API Console](https://developer.spotify.com/console/) - Test API endpoints

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify all setup steps were followed correctly
3. Review the Spotify Developer Dashboard for any app status issues
