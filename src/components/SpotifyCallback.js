import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getAccessToken } from '../services/spotifyService';
import { Box, Spinner, Text, VStack } from '@chakra-ui/react';

const SpotifyCallback = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const handleCallback = async () => {
            const code = searchParams.get('code');
            const state = searchParams.get('state');
            const error = searchParams.get('error');
            const storedState = localStorage.getItem('spotify_auth_state');

            if (error) {
                console.error('Spotify authorization error:', error);
                navigate('/?spotify_error=access_denied');
                return;
            }

            if (!code || !state || state !== storedState) {
                console.error('Invalid callback parameters');
                navigate('/?spotify_error=invalid_state');
                return;
            }

            try {
                await getAccessToken(code);
                localStorage.removeItem('spotify_auth_state');
                // Redirect back to home page or wherever the music player is
                navigate('/?spotify_auth=success');
            } catch (error) {
                console.error('Error getting access token:', error);
                navigate('/?spotify_error=token_failed');
            }
        };

        handleCallback();
    }, [searchParams, navigate]);

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
        >
            <VStack spacing={4}>
                <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="green.500"
                    size="xl"
                />
                <Text fontSize="lg">Connecting to Spotify...</Text>
            </VStack>
        </Box>
    );
};

export default SpotifyCallback;
