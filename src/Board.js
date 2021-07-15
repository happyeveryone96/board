import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {useDispatch, useSelector} from 'react-redux';
import {loadBoard, loadBoardFB, deleteBoard, editBoard, upLike, downLike } from "./redux/modules/board";
import FavoriteIcon from '@material-ui/icons/Favorite';


const Board = (props) => {
  const dispatch = useDispatch();
  const board_list = useSelector(state => state.board.list);
  useEffect(()=>{
    dispatch(loadBoardFB());
  },[]) 

  return (
    <div>
        <Link to='./add' style={{textDecoration:'none', margin: '100px'}}><WriteButton>글쓰기</WriteButton></Link>
        <table>
          <div>
          <thead>
            <th style={{width:'5vw', textAlign:'left'}}>번호</th>
            <th style={{width:'30vw', textAlign:'left'}}>제목</th>
            <th style={{width:'30vw', textAlign:'left'}}>글쓴이</th>
          </thead>
            {board_list.map((list, index) => {
              return (
                <div
                  className="list_item"
                  id={list.id} key={index}><hr style={{width:'100%'}}></hr>
                      <tbody>
                        <td style={{width:'5vw'}}>{index+1}</td>
                        <td style={{width:'30vw'}}>{list.title}</td>
                        <td style={{width:'30vw'}}>{list.author}</td>
                        <Button onClick={() => dispatch(deleteBoard(index))}>삭제하기</Button>
                        <Button onClick={() => dispatch(editBoard(index))}>수정하기</Button>
                        <div><FavoriteIcon style={{color:list.color, marginLeft:'10px'}} ></FavoriteIcon>{list.like_cnt}개</div>
                        <UpDownButton onClick={() => dispatch(upLike(index))}>UP</UpDownButton>
                        <UpDownButton onClick={() => dispatch(downLike(index))}>DOWN</UpDownButton>
                      </tbody>
                </div>
              );
            })}
          </div>
        </table>
    </div>

  );
};

const WriteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border: 0;
  color: white;
  border-radius: 10px;
  background-color: slateblue;
`;


const Button = styled.button`
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 30px;
  border: 0;
  color: white;
  border-radius: 10px;
  margin: 4px;
  background-color: slateblue;
`;

const UpDownButton = styled.button`
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 30px;
  border: 0;
  border-radius: 10px;
  margin: 4px;
  color: white;
  background-color: pink;
`;


export default Board;