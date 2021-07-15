import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { createBoard} from "./redux/modules/board";
import { firestore } from "./firebase";



const board = firestore.collection("book");

const Add = (props) => {
  const dispatch = useDispatch();

  const title_ref = React.useRef(null);
  const author_ref = React.useRef(null);
 

  const addBook = () => {
    const book = {
      id: `${Date.now()}`,
      title: title_ref.current.value, 
      author: author_ref.current.value,
      like_cnt: 0,
      color:'gray',
    };

    if(book.title === "" || book.author === "") {
      alert('빈칸을 채워주세요!')
      return;
    }

    board.add(book)
    dispatch(createBoard(book));
    props.history.replace('/');
  };



  return (
    <React.Fragment>
      <Title>게시글 추가하기</Title>
      <InputWrapper>
        <p>제목</p>
        <input ref={title_ref} />
      </InputWrapper>

      <InputWrapper>
        <p>글쓴이</p>
        <input ref={author_ref} />
      </InputWrapper>

      <div style={{display:'flex', width:'200px', margin:'auto'}}>
      <Button onClick={addBook}>추가하기</Button>
      <Button onClick={() => window.location.replace('/')}>취소하기</Button>
      </div>
    </React.Fragment>
  );
};

const Title = styled.h1`
  width: 30vw;
  padding: 8px 16px;
  margin: 0 17vw;
`;

const InputWrapper = styled.div`
  width: 30vw;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  margin: 8px 15vw;
  box-sizing: border-box;
  background-color: #ffffff;
  & > p {
    text-decoration: underline;
    font-size: 8px;
    color: #888888;
    margin: 4px 0px;
  }

  & > input {
    border: 1px solid #000000;
    width: 300px;
    padding: 2px 4px;
    margin: auto;
    margin: 4px 0px;
    box-sizing: border-box;
  }
`;

const Button = styled.button`
  background-color: #6100ff;
  color: #ffffff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 8px 10px;
  margin: 16px auto 10px;
  border-radius: 10px;
  border: 0;
`;

export default Add;
