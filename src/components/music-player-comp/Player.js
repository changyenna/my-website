import React, { useEffect, useState } from 'react';
import {
    AiFillPauseCircle,
    AiFillStepForward,
    AiFillStepBackward,
    AiFillPlayCircle
} from 'react-icons/ai';
import {
    HStack,
    VStack,
    Box,
    Icon,
    useColorModeValue,
    useColorMode,
    Progress,
    Spacer,
    Button,
    Text,
    Spinner
} from '@chakra-ui/react';
import {
    getTopTracks,
    isAuthenticated,
    redirectToSpotifyAuth
} from '../../services/spotifyService';

const Player = ({ theme }) => {
    const { colorMode } = useColorMode();
    
    // Spotify integration states
    const [songpack, setSongpack] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [song, setSong] = useState(new Audio());
    const [currentSong, setCurrentSong] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);

    const [artistName, setArtistName] = useState('');
    const [musicName, setMusicName] = useState('');
    const [thumbnail, setThumbnail] = useState('');

    // const seekButtonColors = useColorModeValue('#B3B3B3', '#B3B3B3');
    const playButtonColors = useColorModeValue('black', 'white');
    const textColors = useColorModeValue('#000', '#FFF');

    const [playHovered, setPlayHovered] = useState(false);
    const [prevHovered, setPrevHovered] = useState(false);
    const [nextHovered, setNextHovered] = useState(false);

    // Check authentication and fetch tracks
    useEffect(() => {
        const fetchSpotifyTracks = async () => {
            setIsLoading(true);
            setAuthenticated(isAuthenticated());
            
            if (!isAuthenticated()) {
                setIsLoading(false);
                return;
            }

            try {
                const tracks = await getTopTracks('short_term', 12);
                // Filter out tracks without preview URLs
                const tracksWithPreviews = tracks.filter(track => track.src);
                
                if (tracksWithPreviews.length === 0) {
                    setError('No preview tracks available. Try different time period.');
                } else {
                    setSongpack(tracksWithPreviews);
                }
            } catch (err) {
                console.error('Error fetching Spotify tracks:', err);
                setError('Failed to load tracks from Spotify. Please try reconnecting.');
                setAuthenticated(false);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSpotifyTracks();
    }, []);

    useEffect(() => {
        load();
    }, []);

    useEffect(() => {
        song.addEventListener('timeupdate', handleTimeUpdate);
        song.addEventListener('ended', handleSongEnded);
        return () => {
            song.removeEventListener('timeupdate', handleTimeUpdate);
            song.removeEventListener('ended', handleSongEnded);
        };
    }, [song]);

    useEffect(() => {
        load();
    }, [currentSong]);

    const load = () => {
        if (songpack.length === 0) return;
        
        setPlaying(false);
        setCurrentTime(0);

        const { name, artist, src, thumbnail } = songpack[currentSong];
        song.src = src;
        song.load();
        song.onloadeddata = () => {
            setDuration(song.duration);
            if (playing) {
                playSong();
            }
        };
        setArtistName(artist);
        setMusicName(name);
        setThumbnail(thumbnail);
    };

    const handleTimeUpdate = () => {
        const currentTime = song.currentTime;
        const duration = song.duration;
        const progressPercentage = (currentTime / duration) * 100;
        setProgress(progressPercentage);
        setCurrentTime(currentTime);
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes.toString().padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}`;
    };

    const handleSongEnded = () => {
        next();
    };

    const playSong = () => {
        song.play();
        setPlaying(true);
    };

    const playOrPause = () => {
        if (playing) {
            song.pause();
            setPlaying(false);
        } else {
            song.play();
            setPlaying(true);
        }
    };

    const prev = () => {
        setCurrentSong((prevSong) =>
            prevSong === 0 ? songpack.length - 1 : prevSong - 1
        );
    };

    const next = () => {
        setCurrentSong((prevSong) =>
            prevSong === songpack.length - 1 ? 0 : prevSong + 1
        );
    };

    const handlePlayHover = () => {
        setPlayHovered(!playHovered);
    };

    const handlePrevHover = () => {
        setPrevHovered(!prevHovered);
    };

    const handleNextHover = () => {
        setNextHovered(!nextHovered);
    };

    const handleConnectSpotify = () => {
        redirectToSpotifyAuth();
    };

    // Loading state
    if (isLoading) {
        return (
            <Box
                className="player"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                width={{ lg: '500px', md: '450px', sm: '350px' }}
                height="500px"
                margin={{
                    lg: '15px auto 15px',
                    md: '15px auto 15px',
                    sm: '15px auto 15px'
                }}
            >
                <VStack spacing={4}>
                    <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="pink.500"
                        size="xl"
                    />
                    <Text color={textColors}>Loading your music...</Text>
                </VStack>
            </Box>
        );
    }

    // Not authenticated state
    if (!authenticated) {
        return (
            <Box
                className="player"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                width={{ lg: '500px', md: '450px', sm: '350px' }}
                height="500px"
                margin={{
                    lg: '15px auto 15px',
                    md: '15px auto 15px',
                    sm: '15px auto 15px'
                }}
            >
                <VStack spacing={6} textAlign="center" px={6}>
                    <Icon
                        as={AiFillPlayCircle}
                        w="80px"
                        h="80px"
                        color={textColors}
                        opacity={0.3}
                    />
                    <Text color={textColors} fontSize="xl" fontWeight="bold">
                        Connect Your Spotify
                    </Text>
                    <Text color={textColors} fontSize="sm">
                        Sign in with your Spotify account to see your top tracks
                    </Text>
                    <Button
                        colorScheme="green"
                        size="lg"
                        onClick={handleConnectSpotify}
                        borderRadius="full"
                        px={8}
                    >
                        Connect to Spotify
                    </Button>
                    {error && (
                        <Text color="red.500" fontSize="sm">
                            {error}
                        </Text>
                    )}
                </VStack>
            </Box>
        );
    }

    // Error state with retry
    if (error && songpack.length === 0) {
        return (
            <Box
                className="player"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                width={{ lg: '500px', md: '450px', sm: '350px' }}
                height="500px"
                margin={{
                    lg: '15px auto 15px',
                    md: '15px auto 15px',
                    sm: '15px auto 15px'
                }}
            >
                <VStack spacing={6} textAlign="center" px={6}>
                    <Text color={textColors} fontSize="xl" fontWeight="bold">
                        Oops!
                    </Text>
                    <Text color={textColors} fontSize="sm">
                        {error}
                    </Text>
                    <Button
                        colorScheme="pink"
                        size="md"
                        onClick={handleConnectSpotify}
                        borderRadius="full"
                    >
                        Reconnect to Spotify
                    </Button>
                </VStack>
            </Box>
        );
    }

    return (
        <Box
            className="player"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width={{ lg: '500px', md: '450px', sm: '350px' }}
            // maxW="600px"
            // h="500px"
            margin={{
                lg: '15px auto 15px',
                md: '15px auto 15px',
                sm: '15px auto 15px'
            }}
            userSelect="none"
            // backgroundColor="red"
        >
            <VStack>
                <Box
                    id="thumbnail"
                    w="300px"
                    h="300px"
                    position="relative"
                    margin="0px -50px 0px"
                    backgroundImage={`url(${thumbnail})`}
                    backgroundRepeat="no-repeat"
                    backgroundPosition="bottom center"
                    backgroundSize="cover"
                    fallbackSrc="fallback-image-url.jpg"
                ></Box>
                <Box>
                    <Box
                        // bg="red"
                        mt={3}
                        width="300px"
                        fontSize="md"
                        fontWeight="bold"
                        ml={0}
                        color={textColors}
                    >
                        {musicName}
                    </Box>
                    <Box
                        // bg="red"
                        fontSize="sm"
                        fontWeight="normal"
                        ml={0}
                        color={textColors}
                        textAlign="left"
                    >
                        {artistName}
                    </Box>
                </Box>
                <Box width="300px" mt="10px">
                    <Progress
                        height="3px"
                        colorScheme="pink"
                        value={progress}
                    />
                </Box>
                <Box mt={-5} width="300px">
                    <HStack>
                        <Box
                            mt="4"
                            textAlign="left"
                            fontSize="xs"
                            fontWeight="normal"
                            color={textColors}
                        >
                            {formatTime(currentTime)}
                        </Box>
                        <Spacer />
                        <Box
                            mt="4"
                            textAlign="right"
                            fontSize="xs"
                            fontWeight="normal"
                            color={textColors}

                            // bg="red"
                        >
                            {/* {formatTime(currentTime)} */}
                            {formatTime(duration)}
                        </Box>
                    </HStack>
                </Box>

                <Box
                    // bg="green"
                    margin="0px auto 0px"
                    className="player-control"
                    style={{ width: '100px', height: '60px' }}
                >
                    <HStack spacing={8} margin="0px -50px 0px">
                        <Icon
                            as={AiFillStepBackward}
                            w="40px"
                            h="40px"
                            onClick={prev}
                            onMouseEnter={handlePrevHover}
                            onMouseLeave={handlePrevHover}
                            cursor="pointer"
                            color={
                                colorMode === 'light'
                                    ? prevHovered
                                        ? 'blackAlpha.400'
                                        : 'blackAlpha.500'
                                    : prevHovered
                                      ? 'whiteAlpha.900'
                                      : 'whiteAlpha.600'
                            }
                        />

                        <Icon
                            as={playing ? AiFillPauseCircle : AiFillPlayCircle}
                            onClick={playOrPause}
                            w="50px"
                            h="50px"
                            color={playButtonColors}
                            onMouseEnter={handlePlayHover}
                            onMouseLeave={handlePlayHover}
                            style={{
                                transform: playHovered
                                    ? 'scale(1)'
                                    : 'scale(1.1)',
                                cursor: 'pointer'
                            }}
                        />

                        <Icon
                            w="40px"
                            h="40px"
                            as={AiFillStepForward}
                            onClick={next}
                            onMouseEnter={handleNextHover}
                            onMouseLeave={handleNextHover}
                            cursor="pointer"
                            color={
                                colorMode === 'light'
                                    ? nextHovered
                                        ? 'blackAlpha.400'
                                        : 'blackAlpha.500'
                                    : nextHovered
                                      ? 'whiteAlpha.900'
                                      : 'whiteAlpha.600'
                            }
                        />
                    </HStack>
                </Box>
            </VStack>
        </Box>
    );
};

export default React.memo(Player);
