import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import theme from './Theme.js';

const NavButton = styled(Button)(() => ({
    color: '#ffffff',
    borderColor: '#ffffff',
    '&:hover': {
        borderColor: '#eeeeee',
    },
    borderRadius: theme.overrides.MuiButton.root.borderRadius,
}));

export default NavButton;