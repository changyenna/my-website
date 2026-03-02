import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const bg = `linear-gradient(180deg, white 2px, transparent 1px), linear-gradient(90deg, white 2px, transparent 1px), #F4D2E9`;
const bgGradient = `linear-gradient(to bottom, #6C6191, #EAA2C0)`;

const styles = {
    global: (props) => ({
        body: {
            bg: props.colorMode === 'light' ? bg : bgGradient,
            backgroundSize: props.colorMode === 'light' ? '60px 60px' : 'auto',
            backgroundAttachment: props.colorMode === 'dark' ? 'fixed' : 'scroll',
            backgroundRepeat: props.colorMode === 'dark' ? 'no-repeat' : 'repeat',
            minHeight: '100vh',
            color: mode('light.900', 'dark.100')(props)
        }
    })
};

// example theme
const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false
    },
    styles,
    breakpoints: {
        sm: '320px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
        '2xl': '1536px'
        //   xs: '320px',
        //   sm: '481px',
        //   md: '769px',
        //   lg: '1025px'
    },

    colors: {
        dark: {
            100: '#fffffe',
            200: '#ACE3FF',
            300: '#2B2937',
            800: '#4F5365',
            900: '#23212E'
            // ...
        },
        light: {
            100: '#fffffe',
            200: '#F5F5F5',
            300: '#F4D2E9',
            400: '#F298D3',
            500: '#c3f0ca',
            600: '#594a4e',
            900: '#33272a',
            1000: '#0e172c'
        }
    },
    fonts: {
        body: 'system-ui, sans-serif',
        heading: 'Georgia, serif',
        mono: 'Menlo, monospace'
    },
    fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem'
    },
    fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900
    },
    lineHeights: {
        normal: 'normal',
        none: 1,
        shorter: 1.25,
        short: 1.375,
        base: 1.5,
        tall: 1.625,
        taller: '2',
        3: '.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem'
    },
    letterSpacings: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em'
    },
    Button: {
        baseStyle: {},
        variants: {
            primary: {
                _hover: {
                    bg: 'red'
                }
            },
            secondary: {
                _hover: {
                    bg: 'green.500'
                }
            }
        }
    }
});

export default theme;
