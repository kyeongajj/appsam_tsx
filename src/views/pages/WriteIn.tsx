import { Box, Input, Button } from '@mui/material';
import { useState } from 'react';
import {} from './WriteBoardComp';

interface WriteProps {
  onAdd: (newWrite: {
    title: string;
    writer: string;
    desc: string;
    date: number;
  }) => void;
  onCancel: () => void;
}
//React.Fc란? Function Component 타입의 줄임말. 함수형 컴포넌트 사용시 타입선언에 쓸수있도록 React에서 제공하는 타입이다.
const WriteIn: React.FC<WriteProps> = ({ onAdd, onCancel }) => {
  const [inputBoardText, setInputBoardText] = useState({
    BoardTextTitle: '',
    BoardTextName: '',
    BoardTextDesc: '',
  });
  const { BoardTextTitle, BoardTextName, BoardTextDesc } = inputBoardText;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setInputBoardText({
      ...inputBoardText,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // 게시글 객체 생성 로직
    const newWrite = {
      title: BoardTextTitle,
      writer: BoardTextName,
      desc: BoardTextDesc,
      date: Date.now(), // 현재 날짜 및 시간의 타임스탬프 사용
    };

    onAdd(newWrite);
    //title: string;
    //writer: string;
    //desc: string;
    //date: number;
  };

  return (
    <Box sx={{ position: 'relative' }}>
      {/* 입력 필드 UI */}
      <Input
        type="text"
        name="BoardTextTitle"
        value={BoardTextTitle}
        onChange={onChange}
        placeholder="제목"
      />
      <Input
        type="text"
        name="BoardTextName"
        value={BoardTextName}
        onChange={onChange}
        placeholder="작성자"
      />
      <textarea
        name="BoardTextDesc"
        value={BoardTextDesc}
        onChange={onChange}
        placeholder="내용"
      />
      {/* 버튼 UI */}
      <Button variant="outlined" onClick={handleSubmit}>
        등록
      </Button>
      <Button variant="outlined" onClick={onCancel}>
        닫기
      </Button>
    </Box>
  );
};

export default WriteIn;
