// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FF1493',   // Hot Pink
        },
        secondary: {
            main: '#8F00FF',   // Purple 
        },
        success: {
            main: '#00C853',
        },
        info: {
            main: '#2196F3',
        },
        warning: {
            main: '#FFAB00',
        },
        error: {
            main: '#FF5252',
        },
        background: {
            default: '#000000', // Solid black
            paper: '#1E1E1E',   // Dark gray for surfaces/panels
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#CCCCCC',
            disabled: '#999999',
        },
    },

    typography: {
        fontFamily: [
            'Montserrat',
            'Poppins',
            'Arial',
            'sans-serif'
        ].join(','),
        h1: {
            fontSize: '3rem',   // ~48px
            fontWeight: 700,
            lineHeight: 1.2,
        },
        h2: {
            fontSize: '2.25rem', // ~36px
            fontWeight: 600,
            lineHeight: 1.3,    // Pink for a branded highlight
        },
        h3: {
            fontSize: '2rem',   // ~32px
            fontWeight: 600,
            lineHeight: 1.3,
        },
        body1: {
            fontSize: '1rem',   // ~16px
            fontWeight: 400,
            lineHeight: 1.5,
            color: '#CCCCCC',
        },
        body2: {
            fontSize: '0.875rem', // ~14px
            fontWeight: 400,
            lineHeight: 1.5,
            color: '#999999',
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    textTransform: 'none',
                },
                containedPrimary: {
                    // Slightly darker pink on hover
                    '&:hover': {
                        backgroundColor: '#E01384',
                    },
                },
                containedSecondary: {
                    // Keeping the purple accent hover
                    '&:hover': {
                        backgroundColor: '#7a00e0',
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#333333',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        // Lighter pink border on hover
                        borderColor: '#FF63AE',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        // Primary pink border on focus
                        borderColor: '#FF1493',
                    },
                },
                input: {
                    color: '#FFFFFF',
                    '&::placeholder': {
                        color: '#999999',
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1E1E1E',
                },
            },
        },
    },
});

export default theme;
