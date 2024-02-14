import { Button } from '@mui/material';
import styled from '@emotion/styled';

interface ButtonProps {
  onClick: () => void;
  text: string;
  number?: number;
  background?: string;
  size?: string;
}

const StyledTestButton = styled(Button)((props: {
  size?: string;
  bg?: string;
  height?: string;
}) => {
  return {
    background: props.bg ? props.bg : 'blue',
    width: props.size === 'small' ? '200px' : '500px',
    height: props.height ? props.height : '50px',
  };
});

const NewButton = (props: ButtonProps) => {
  return (
    <StyledTestButton
      height={'250px'}
      onClick={props.onClick}
      sx={{
        background: props.background ? props.background : 'red',
        width: props.size === 'small' ? '200px' : '500px',
      }}
    >
      {props.text}
      {props.number ? props.number : 0}
    </StyledTestButton>
  );
};

export default NewButton;
