'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#666666',
    },
    background: {
      default: '#ffffff',
      paper: '#fcfcfc',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue", "Arial", sans-serif',
    h1: {
      fontWeight: 200,
      letterSpacing: '-0.03em',
      fontSize: '5rem',
      '@media (max-width:600px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      fontWeight: 200,
      letterSpacing: '-0.02em',
      fontSize: '3rem',
      // textTransform: 'uppercase',
      marginBottom: '1rem',
    },
    h3: {
      fontWeight: 300,
      fontSize: '2rem',
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 300,
      fontSize: '1.5rem',
      letterSpacing: '0.05em',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.8,
      color: '#333333',
      fontWeight: 300,
    },
    button: {
      textTransform: 'none',
      fontWeight: 400,
      letterSpacing: '0.05em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '12px 24px',
        },
      },
    },
  },
});

export default theme;
