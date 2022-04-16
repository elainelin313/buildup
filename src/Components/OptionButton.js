import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import theme from './Theme.js';

const UnfilledButton = styled(Button)(() => ({
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    '&:hover': {
        borderColor: theme.palette.secondary.dark,
    },
    borderRadius: theme.overrides.MuiButton.root.borderRadius,
}));

const FilledButton = styled(Button)(() => ({
    color: '#ffffff',
    backgroundColor: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        borderColor: theme.palette.secondary.dark,
    },
    borderRadius: theme.overrides.MuiButton.root.borderRadius,
}));

function OptionButton(props) {
    const [filled, setFilled] = useState(false);
    if (filled) {
        return (
            <FilledButton
                variant="contained"
                onClick={() => {
                    console.log("click");
                    setFilled(false);
                }}
            >
                {props.text}
            </FilledButton>
        );
    } else {
        return (
            <UnfilledButton
                variant="outlined"
                onClick={() => {
                    console.log("click");
                    setFilled(true);
                }}
            >
                {props.text}
            </UnfilledButton>
        );
    }

}

export default OptionButton;