import styled from '@emotion/styled';
import { StyledButton } from '../../App';

const CustomHeader = styled('header')({
  padding: '0px 10px',
  backgroundColor: 'lightblue',
  height: '50px',
  display: 'flex',
  justifyContent: 'center',
  '&:hover': {
    background: 'red',
  },
  '& > h1': {
    margin: '0px',
    fontSize: '40px',
    color: 'blue',
  },
});

const Header = (props: {
  count: number;
  setCount: (state: number) => void;
}) => {
  return (
    <CustomHeader>
      <h1>Header</h1>
      Count : {props.count}
      <StyledButton onClick={() => props.setCount(props.count + 1)}>
        {' '}
        여기도 + 버튼 있지롱
      </StyledButton>
    </CustomHeader>
  );
};

export default Header;
