//WriteBoard
import React from 'react';
import '../../css/WriteBoard.css';
import { Box, Button, Hidden, Input } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import EditNoteIcon from '@mui/icons-material/EditNote';
import styled from '@emotion/styled';
import { useState } from 'react';

const data = [
  {
    id: 1,
    title: 'React',
    writer: '총명이',
    desc: '우리는 리액트를 한다!',
    date: Date.now(),
  },
  {
    id: 2,
    title: 'JavaScript',
    writer: '이쁜이',
    desc: '우리는 자바스크립트를 한다!',
    date: Date.now(),
  },
  {
    id: 3,
    title: 'Vue',
    writer: '똑똑이',
    desc: '우리는 뷰~를 한다!',
    date: Date.now(),
  },
  {
    id: 4,
    title: 'React',
    writer: '총명이',
    desc: '우리는 리액트를 한다!',
    date: Date.now(),
  },
  {
    id: 5,
    title: 'JavaScript',
    writer: '이쁜이',
    desc: '우리는 자바스크립트를 한다!',
    date: Date.now(),
  },
  {
    id: 6,
    title: 'Vue',
    writer: '똑똑이',
    desc: '우리는 뷰~를 한다!',
    date: Date.now(),
  },
];

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Height } from '@mui/icons-material';

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
    justifyContent: 'flex-start',
  };
});

const WriteBoardHeader = styled(Box)({
  // background: '#F6CED8',
  width: '100%',
  height: '50px',
  borderTop: '1px solid #ccc',
  borderBottom: '1px solid #ccc',
  display: 'flex',
  justifyContent: 'center',
  // color: '#B40431',
});

const WriteBoarList = styled(Box)({
  background: '#fff',
  width: '100%',
  height: 'auto',
  color: '#424242',
  justifyContent: 'flex-start',
});

const WriteBoardFooter = styled(Box)({
  // background: '#E6E6E6',
  width: '100%',
  height: '60px',
  borderTop: '1px solid #ccc',
  lineHeight: '60px',
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
      <ul className="listWrap">
        <li>
          <span>{state.id}</span>
        </li>
        <li>
          <span>{state.title}</span>
        </li>
        <li>
          <span>{state.writer}</span>
        </li>
        <li>
          <span>{state.desc}</span>
        </li>
        <li>
          <span>{state.date}</span>
        </li>
        <li>
          <Box sx={{ width: '100px', mr: '2%' }}>
            <Button
              onClick={state.DeleteWrite}
              variant="outlined"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </Box>
        </li>
        <li>
          <Box sx={{ width: '100px' }}>
            <Button
              onClick={state.DeleteWrite}
              variant="contained"
              startIcon={<EditNoteIcon />}
            >
              Edit
            </Button>
          </Box>
        </li>
      </ul>
    </WriteBoarList>
  );
}; //WriteBoardItem//

//<WriteBoard />//
const WriteBoard = () => {
  const [state, setState] = useState(data);
  const [isWriteOpen, setIsWriteOpen] = useState<boolean>(false);

  const [idx, setIdx] = useState(4);
  const [inputBoardText, setInputBoardText] = useState({
    BoardTextTitle: '',
    BoardTextName: '',
    BoardTextDesc: '',
  });
  const { BoardTextTitle, BoardTextName, BoardTextDesc } = inputBoardText;

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setInputBoardText({
      ...inputBoardText,
      [name]: value,
    });
  };

  const CreateWrite = () => {
    const newData = {
      id: idx, //input입력값
      title: BoardTextTitle, //input입력값
      writer: BoardTextName, //input입력값
      desc: BoardTextDesc, //input입력값
      date: Date.now(),
    };

    setState([...state, newData]);
    setInputBoardText({
      BoardTextTitle: '',
      BoardTextName: '',
      BoardTextDesc: '',
    });
    setIdx((a) => a + 1);
  };

  const DeleteWrite = (id: number) => {
    const newData = state.filter((a) => a.id !== id);
    setState(newData);
  };

  return (
    <div className="WriteBoard">
      <BoxDiv
        bg={'inherit'}
        wd={'100%'}
        sx={{ position: 'relative', padding: '20px', height: '100px' }}
      >
        <Box
          sx={{ position: 'absolute', top: '10px', left: '30px', zindex: 2 }}
        >
          <CustomizedInputBase />
        </Box>
        <Box
          sx={{ position: 'absolute', top: '10px', right: '20px', zindex: 2 }}
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<BorderColorIcon />}
            onClick={() => {
              setIsWriteOpen(true);
            }}
          >
            글쓰기
          </Button>
        </Box>
      </BoxDiv>

      <BoxDiv
        wd={'100%'}
        bg={'#eee'}
        sx={{
          position: 'relative',
          height: 'auto',
          pt: '20px',
          top: 0,
          zIndex: 10,
        }}
      >
        {/* Input_입력창 */}
        <BoxDiv wd={'100%'} bg={'inherit'} sx={{ position: 'relative' }}>
          {isWriteOpen && (
            <>
              <Box sx={{ position: 'relative' }}>
                <Box sx={{ display: 'flex', mb: '30px' }}>
                  <Box>
                    <Input
                      type="text"
                      name="BoardTextTitle"
                      value={BoardTextTitle}
                      onChange={onChange}
                      placeholder="제목"
                    />
                  </Box>
                  <Box sx={{ pl: '5%' }}>
                    <Input
                      type="text"
                      name="BoardTextName"
                      value={BoardTextName}
                      onChange={onChange}
                      placeholder="작성자"
                    />
                  </Box>
                </Box>
                <Box>
                  <textarea
                    cols={50}
                    rows={10}
                    name="BoardTextDesc"
                    value={BoardTextDesc}
                    onChange={onChange}
                    placeholder="글작성 해주세요!"
                  />
                </Box>
                <br />
                <Box
                  sx={{
                    width: '200px',
                    mb: '8%',
                    pl: '5%',
                    position: 'absolute',
                    right: '-40%',
                    bottom: '0%',
                  }}
                >
                  <Button
                    variant="outlined"
                    onClick={CreateWrite}
                    sx={{ mr: '3%' }}
                  >
                    등록
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setIsWriteOpen(false);
                    }}
                  >
                    닫기
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </BoxDiv>

        <WriteBoardHeader>
          <ul className="listWrap">
            <li>
              <span>번호</span>
            </li>
            <li>
              <span>제목</span>
            </li>
            <li>
              <span>작성자</span>
            </li>
            <li>
              <span>내용</span>
            </li>
            <li>
              <span>작성일</span>
            </li>
            <li>
              <span>삭제</span>
            </li>
            <li>
              <span>수정</span>
            </li>
          </ul>
        </WriteBoardHeader>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '6px 0',
            backgroundColor: '#fff',
            maxHeight: '450px',
            overflowX: 'hid  dden',
            overflowY: 'auto',
          }}
        >
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
      </BoxDiv>

      <WriteBoardFooter>
        <span>COPYRIGHT 2024.03.07 ALL RIGHTS ARE RESERVED.</span>
      </WriteBoardFooter>
    </div>
  );
}; //<WriteBoard />//

export default WriteBoard;
