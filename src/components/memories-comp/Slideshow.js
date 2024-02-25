import React, { useState } from 'react';
import {
    Box,
    Image,
    IconButton,
    useMediaQuery,
    useColorMode
} from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import image1 from '../../assets/c1.png';
import image2 from '../../assets/c2.png';
import image3 from '../../assets/c3.png';
// import image4 from '../../assets/c4.png';
import image5 from '../../assets/c5.png';
import image6 from '../../assets/c6.png';
// import image7 from '../../assets/c7.png';
// import image8 from '../../assets/c8.png';
import image9 from '../../assets/c9.png';
import image10 from '../../assets/c10.png';
import image11 from '../../assets/c11.png';
import image12 from '../../assets/c12.png';
import image13 from '../../assets/c13.webp';
import image14 from '../../assets/c14.webp';

const Slideshow = () => {
    const images = [
        {
            original: image2
        },
        {
            original: image3
        },
        {
            original: image5
        },
        {
            original: image6
        },
        {
            original: image1
        },

        {
            original: image9
        },
        {
            original: image11
        },
        // {
        //     original: image13
        // },
        {
            original: image10
        },
        {
            original: image12
        }
        // {
        //     original: image14
        // }

        // {
        //     original: image8
        // }
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showButtons, setShowButtons] = useState(false);
    const [isLargeDevice] = useMediaQuery('(min-width: 1024px)');

    const { colorMode } = useColorMode();

    const handleMouseEnter = () => {
        setShowButtons(true);
    };

    const handleMouseLeave = () => {
        setShowButtons(false);
    };

    return (
        <Box
            position="relative"
            width="100%"
            height="356px"
            borderBottomLeftRadius="8px"
            borderBottomRightRadius="8px"
            mt={-2}
            onMouseEnter={isLargeDevice ? handleMouseEnter : null}
            onMouseLeave={isLargeDevice ? handleMouseLeave : null}
        >
            <Carousel
                selectedItem={currentImageIndex}
                onChange={(index) => setCurrentImageIndex(index)}
                emulateTouch
                showStatus={false}
                showArrows={isLargeDevice}
                renderArrowPrev={(onClickHandler, hasPrev) =>
                    hasPrev && (
                        <IconButton
                            icon={<FiChevronLeft />}
                            aria-label="Previous"
                            position="absolute"
                            top="50%"
                            left="10px"
                            transform="translateY(-50%)"
                            onClick={onClickHandler}
                            color="white"
                            bg={
                                colorMode === 'light'
                                    ? 'whiteAlpha.400'
                                    : 'whiteAlpha.400'
                            }
                            _hover={{
                                bg:
                                    colorMode === 'light'
                                        ? 'whiteAlpha.600'
                                        : 'whiteAlpha.600'
                            }}
                            borderRadius="50px"
                            zIndex="1"
                        />
                    )
                }
                renderArrowNext={(onClickHandler, hasNext) =>
                    hasNext && (
                        <IconButton
                            icon={<FiChevronRight />}
                            aria-label="Next"
                            position="absolute"
                            top="50%"
                            right="10px"
                            transform="translateY(-50%)"
                            onClick={onClickHandler}
                            color="white"
                            bg={
                                colorMode === 'light'
                                    ? 'whiteAlpha.400'
                                    : 'whiteAlpha.400'
                            }
                            _hover={{
                                bg:
                                    colorMode === 'light'
                                        ? 'whiteAlpha.600'
                                        : 'whiteAlpha.600'
                            }}
                            borderRadius="50px"
                            zIndex="1"
                        />
                    )
                }
            >
                {images.map((image, index) => (
                    <Image
                        key={index}
                        src={image.original}
                        alt={`Image ${index + 1}`}
                        width="100%"
                        height="356px"
                        objectFit="cover"
                        borderBottomRightRadius="8px"
                        borderBottomLeftRadius="8px"
                    />
                ))}
            </Carousel>
        </Box>
    );
};
export default Slideshow;
