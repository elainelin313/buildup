import theme from './Theme.js';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const StyledTypography = styled(Typography)(() => ({
    color: '#ffffff',
    fontFamily: theme.typography.fontFamily,
}));

export default StyledTypography;