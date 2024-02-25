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
    Spacer
} from '@chakra-ui/react';

const Player = ({ theme }) => {
    const songpack = [
        {
            name: 'Always (feat. Summer Walker) - Bonus',
            artist: 'Daniel Caesar',
            src: 'https://p.scdn.co/mp3-preview/577bd31a9ccf2d8f4b49cccc984aa87ecd7f616a?cid=ad35e59f7186495d89b79b327ad0f987',
            thumbnail:
                'https://i.scdn.co/image/ab67616d0000b273e242f18dafe885fcf425fe1f'
        },
        {
            name: 'Steal The Show - From "Elemental"',
            artist: 'Lauv',
            src: 'https://p.scdn.co/mp3-preview/10e33778e2bec7f8d58eea48d23776cf4f299b63',
            thumbnail:
                'https://i.scdn.co/image/ab67616d0000b27322bbb2bd9c0d6bec5057d535'
        },
        {
            name: 'Magic',
            artist: 'Kiana Lede',
            src: 'https://p.scdn.co/mp3-preview/c5695d1982656e0c860c3cc83f3aca1829bc3a7a?cid=ad35e59f7186495d89b79b327ad0f987',
            thumbnail:
                'https://i.scdn.co/image/ab67616d0000b273fe9b672433be22472bd30e7a'
        },
        {
            name: 'THE SHADE',
            artist: 'Rex Orange County',
            src: 'https://p.scdn.co/mp3-preview/b62081b11cc9821d10922900bc290eaf459d7e84',
            thumbnail:
                'https://i.scdn.co/image/ab67616d0000b2735b656d32ea6b0b9c54c2d2e0'
        },
        {
            name: 'say im ur luv',
            artist: 'UMI',
            src: 'https://p.scdn.co/mp3-preview/2fc8f7d27a4556f73f32d63e981d0e4a5f2e2e2b?cid=ad35e59f7186495d89b79b327ad0f987',
            thumbnail:
                'https://i.scdn.co/image/ab67616d0000b2733b289c8a149cc52b49d5dc78'
        },
        {
            name: 'Vince Van Gogh',
            artist: 'Daniel Caesar',
            src: 'https://p.scdn.co/mp3-preview/afbe3797c0bf86b5c790d95d88d9309e24776948?cid=ad35e59f7186495d89b79b327ad0f987',
            thumbnail:
                'https://i.scdn.co/image/ab67616d0000b273e242f18dafe885fcf425fe1f'
        },
        {
            name: 'Cookie',
            artist: 'NewJeans',
            src: 'https://p.scdn.co/mp3-preview/d059b8ea163242692099c452cbed3de596c2e624',
            thumbnail:
                'https://i.scdn.co/image/ab67616d0000b2739d28fd01859073a3ae6ea209'
        },
        {
            name: 'Heartbreak Anniversary',
            artist: 'Giveon',
            src: 'https://p.scdn.co/mp3-preview/12200deba2a2f8126ff4430d35fec1be2969e87f',
            thumbnail:
                'https://i.scdn.co/image/ab67616d0000b2733317fc12f8b9a9a0b8459766'
        },
        {
            name: 'get him back!',
            artist: 'Olivia Rodrigo',
            src: 'https://p.scdn.co/mp3-preview/8b5805a0fb24641ff34f1649ab448a16c219f073',
            thumbnail:
                'https://i.scdn.co/image/ab67616d0000b273e85259a1cae29a8d91f2093d'
        },
        {
            name: 'ASAP',
            artist: 'NewJeans',
            src: 'https://p.scdn.co/mp3-preview/6e580649e577986e9f28e7b7c5e7326577bd9605',
            thumbnail:
                'https://i.scdn.co/image/ab67616d00001e020744690248ef3ba7b776ea7b'
        },
        {
            name: "You Don't Ignore (Midnight)",
            artist: 'Petit Biscuit',
            src: 'https://p.scdn.co/mp3-preview/4fbc1cbfd5f3465515dd0d2cd38242350591ced8',
            thumbnail:
                'https://i.scdn.co/image/ab67616d0000b273824f97701e1347415da80bd8'
        }
    ];

    const { colorMode } = useColorMode();
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
