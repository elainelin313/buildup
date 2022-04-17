import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#5465FF',
      dark: '#3f51b5',
      light: '#9BB1FF',
    },
    secondary: {
      main: '#4e7ae8',
      light: '#bfd7ff',
    },
    background: {
      default: '#BFCDFF',
      paper: '#efefff',
    },
    error: {
      main: '#1db954',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 25,
      },
    },
    MuiCard: {
      root: {
        borderRadius: 35,
        padding: 6,
        paddingLeft: 10,
        paddingRight: 10,
      },
    },
  },
  direction: 'rtl',
});

export default theme;