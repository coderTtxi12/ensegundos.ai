import { createTheme } from '@mui/material/styles';

//Set up your theme here

const theme = createTheme({
    palette: {

        primary: {
            main: '#1976d2',
        },

        secondary: {
            main: '#9c27b0',
        },

        text: {
            primary: '#212121',
            secondary: '#757575',
        },
    },
    typography: {

        fontFamily: 'Roboto, sans-serif',

        h1: {
            fontWeight: 700,
            fontSize: '3rem',
            lineHeight: 1.2,

        },
        h2: {
            fontWeight: 700,
            fontSize: '3.5rem',
            lineHeight: 1.2,

        },
        h6: {
            fontWeight: 400,
            fontSize: '1.25rem',
            lineHeight: 1.4,
            color: '#757575',

        },


    },

});

export default theme;
