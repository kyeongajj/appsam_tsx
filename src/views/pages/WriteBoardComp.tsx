//WriteBoard
import React from 'react';
import '../../css/WriteBoard.css';
import { Box, Button, Input } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import EditNoteIcon from '@mui/icons-material/EditNote';
import styled from '@emotion/styled';
import { useState } from 'react';
import WriteIn from './WriteIn';

const data = [
  {
    id: 1,
    title: 'React',
    writer: '총명이',
    desc: '우리는 리액트를 한다!',
    date: 20240307,
  },
  {
    id: 2,
    title: 'JavaScript',
    writer: '이쁜이',
    desc: '우리는 자바스크립트를 한다!',
    date: 20240308,
  },
  {
    id: 3,
    title: 'Vue',
    writer: '똑똑이',
    desc: '우리는 뷰~를 한다!',
    date: 20240309,
  },
  {
    id: 4,
    title: 'React',
    writer: '총명이',
    desc: '우리는 리액트를 한다!',
    date: 20240307,
  },
  {
    id: 5,
    title: 'JavaScript',
    writer: '이쁜이',
    desc: '우리는 자바스크립트를 한다!',
    date: 20240308,
  },
  {
    id: 6,
    title: 'Vue',
    writer: '똑똑이',
    desc: '우리는 뷰~를 한다!',
    date: 20240309,
  },
];

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
}

const BoxDiv = styled(Box)((props: { bg: string; wd: string }) => {
  return {
    width: props.wd,
    background: props.bg,
    margin: '0 auto',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
});

const WriteBoardHeader = styled(Box)({
  // background: '#F6CED8',
  width: '1200px',
  height: '60px',
  borderTop: '1px solid #ccc',
  borderBottom: '1px solid #ccc',
  display: 'flex',
  justifyContent: 'center',
  // color: '#B40431',
});

const WriteBoarList = styled(Box)({
  background: '#fff',
  width: '1200px',
  height: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#424242',
});

const WriteBoardFooter = styled(Box)({
  // background: '#E6E6E6',
  width: '1200px',
  height: '100px',
  borderTop: '1px solid #848484',
  padding: '40px 0 0 0',
  fontSize: '11px',
  color: '#848484',
  textAlign: 'center',
  position: 'absolute',
  bottom: 0,
});

interface WriteBoardType {
  id: number;
  title: string;
  writer: string;
  desc: string;
  date: number;
  DeleteWrite: () => void;
}

//WriteBoardItem//
const WriteBoardItem = (state: WriteBoardType) => {
  return (
    <WriteBoarList>
      <Box sx={{ width: '50px', mr: '5%', lineHeight: '30px' }}>
        <p>{state.id}</p>
      </Box>
      <Box sx={{ width: '100px', mr: '5%' }}>
        <p>{state.title}</p>
      </Box>
      <Box sx={{ width: '100px', mr: '5%' }}>
        <p>{state.writer}</p>
      </Box>
      <Box sx={{ width: '250px', mr: '5%' }}>
        <p>{state.desc}</p>
      </Box>
      <Box sx={{ width: '50px', mr: '5%' }}>
        <p>{state.date}</p>
      </Box>
      <Box sx={{ width: '100px', mr: '2%' }}>
        <Button
          onClick={state.DeleteWrite}
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </Box>
      <Box sx={{ width: '100px' }}>
        <Button
          onClick={state.DeleteWrite}
          variant="contained"
          startIcon={<EditNoteIcon />}
        >
          Edit
        </Button>
      </Box>
    </WriteBoarList>
  );
}; //WriteBoardItem//

//<WriteBoardComp />//
const WriteBoardComp = () => {
  const [state, setState] = useState(data);
  const [isWriteOpen, setIsWriteOpen] = useState(false);

  const addWrite = (newWrite: any) => {
    setState((prevState) => [...prevState, newWrite]);
    setIsWriteOpen(false); // 게시글 추가 후 입력창 닫기
  };

  const DeleteWrite = (id: number) => {
    const newData = state.filter((a) => a.id !== id);
    setState(newData);
  };

  // const [idx, setIdx] = useState(4);

  // const onChange = (e: any) => {
  //   const { value, name } = e.target;
  //   setInputBoardText({
  //     ...inputBoardText,
  //     [name]: value,
  //   });
  // };
  //Write.tsx안에 onChange(e:React.ChangeEvent)함수로 대체됨.

  // const CreateWrite = () => {
  //   const newData = {
  //     id: idx, //input입력값
  //     title: BoardTextTitle, //input입력값
  //     writer: BoardTextName, //input입력값
  //     desc: BoardTextDesc, //input입력값
  //     date: 20240307,
  //   };

  //   setState([...state, newData]);
  //   setInputBoardText({
  //     BoardTextTitle: '',
  //     BoardTextName: '',
  //     BoardTextDesc: '',
  //   });
  //   setIdx((a) => a + 1);
  // };
  //Write.tsx안에 handleSubmit()함수로 대체됨.

  return (
    <div className="WriteBoard">
      <Box sx={{ padding: '20px', position: 'relative' }}>
        <CustomizedInputBase />
        <Button
          variant="contained"
          size="large"
          startIcon={<BorderColorIcon />}
          sx={{ position: 'absolute', right: 0, bottom: '20px' }}
          onClick={() => {
            setIsWriteOpen(true);
          }}
        >
          글쓰기
        </Button>
      </Box>
      <BoxDiv
        wd={'100%'}
        bg={'#eee'}
        sx={{ position: 'relative', height: '100vh' }}
      >
        <BoxDiv wd={'1200px'} bg={'inherit'} sx={{ position: 'relative' }}>
          {/* 입력창 
          :::::: onAdd={addWrite} 
          const addWrite = (newWrite: any) => {
            setState((prevState) => [...prevState, newWrite]);
            setIsWriteOpen(false); // 게시글 추가 후 입력창 닫기
          };
          */}

          {isWriteOpen && (
            <WriteIn onAdd={addWrite} onCancel={() => setIsWriteOpen(false)} />

            /** Write 컴포넌트를 import하여 사용합니다. Write 컴포넌트에 필요한 props인, onAdd와 onCancel 함수를 정의하고, 이를 Write 컴포넌트에 전달합니다. */
          )}
        </BoxDiv>
        <WriteBoardHeader>
          <Box sx={{ width: '50px', mr: '5%' }}>
            <strong style={{ lineHeight: '60px' }}>번호</strong>
          </Box>
          <Box sx={{ width: '100px', mr: '5%' }}>
            <strong style={{ lineHeight: '60px' }}>제목</strong>
          </Box>
          <Box sx={{ width: '100px', mr: '5%' }}>
            <strong style={{ lineHeight: '60px' }}>작성자</strong>
          </Box>
          <Box sx={{ width: '250px', mr: '5%' }}>
            <strong style={{ lineHeight: '60px' }}>내용</strong>
          </Box>
          <Box sx={{ width: '50px', mr: '5%' }}>
            <strong style={{ lineHeight: '60px' }}>작성일</strong>
          </Box>
          <Box sx={{ width: '100px', mr: '2%' }}>
            <strong style={{ lineHeight: '60px' }}></strong>
          </Box>
          <Box sx={{ width: '100px' }}>
            <strong style={{ lineHeight: '60px' }}></strong>
          </Box>
        </WriteBoardHeader>

        {/* 입력내용_한줄_리스트 */}
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {state.map((a, i) => {
            return (
              <React.Fragment key={i}>
                <WriteBoardItem
                  id={a.id}
                  title={a.title}
                  writer={a.writer}
                  desc={a.desc}
                  date={a.date}
                  DeleteWrite={() => DeleteWrite(a.id)}
                />
              </React.Fragment>
            );
          })}
        </Box>
        {/* 입력내용_한줄_리스트 */}

        <WriteBoardFooter>
          <span>COPYRIGHT 2024.03.07 ALL RIGHTS ARE RESERVED.</span>
        </WriteBoardFooter>
      </BoxDiv>
    </div>
  );
};

export default WriteBoardComp;
