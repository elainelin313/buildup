import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import theme from './Theme.js';


const NavButton = styled(Button)(() => ({
    color: '#ffffff',
    backgroundColor: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        borderColor: theme.palette.secondary.dark,
    },
    borderRadius: theme.overrides.MuiButton.root.borderRadius,
}));

export default NavButton;