import styled from '@emotion/styled';
import { useState, useRef } from 'react';
import { Button, Input, Box } from '@mui/material';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import CommonModal from './components/common/modal/CommonModal';
import NewButton from './components/common/NewButton';

export const StyledButton = styled(Button)({
  background: '#DA351f',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '5px',
  fontSize: '16px',
  '&:hover': {
    background: '#FF5A5F',
  },
});

function App() {
  console.log('App.tsx 재렌더링이에요!');

  const [count, setCount] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [inputState, setInputState] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

  const textRef = useRef<HTMLInputElement>(null);

  const onClickRefButton = () => {
    if (textRef.current !== null) {
      console.log(textRef.current); //콘솔창 : <input>
      textRef.current.value = '';
      //textRef.current.focus(); 포커스가 되면 value값이 비어진다.(useRef의바람직한사용.)
    }
  };

  return (
    <div className="App">
      <Header count={count} setCount={setCount} />
      Body입니다
      {/* 카운터 만들기  */}
      <div>Counter : {count}</div>
      <StyledButton onClick={() => setCount(count + 1)}> + 버튼 </StyledButton>
      <StyledButton onClick={() => setCount((state) => state - 1)}>
        - 버튼
      </StyledButton>
      <StyledButton onClick={() => setIsModalOpen(true)}>
        모달 켜기
      </StyledButton>
      {/* styledComponent에 props 전달하기  */}
      <NewButton
        onClick={() => console.log('버튼')}
        text={'뉴버튼이지'}
        size={'small'}
      />
      {/* useState 객체로 input 상태 관리하기 */}
      <Box>
        input1 : <Input name={'input1'} onChange={handleInputChange} />
        input2 : <Input name={'input2'} onChange={handleInputChange} />
        input3 : <Input name={'input3'} onChange={handleInputChange} />
        input4 : <Input name={'input4'} onChange={handleInputChange} />
      </Box>
      <Box>
        input1 : {inputState.input1}
        <br />
        input2 : {inputState.input2}
        <br />
        input3 : {inputState.input3}
        <br />
        input4 : {inputState.input4}
        <br />
      </Box>
      {/* useRef  */}
      <input ref={textRef} />
      <Button onClick={onClickRefButton}>
        이 버튼을 누르면 input이 초기화됩니다.
      </Button>
      <Footer />
      {/* <CommonModal /> */}
      {isModalOpen && (
        <CommonModal
          setIsModalOpen={setIsModalOpen}
          aText={'a'}
          bText={'b'}
          cNumber={3}
        />
      )}
    </div>
  );
}

export default App;
