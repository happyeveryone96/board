import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { withRouter } from "react-router";
import Board from "./Board";
import Add from "./Add";
import styled from "styled-components";
import { render } from "react-dom";
import {connect} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';
import {createBoard, loadBoardFB, deleteBoardFB} from './redux/modules/board';



function App(props){
    return (
      <div className="App">

        <Container>
          <Title>자바스크립트 추천 도서</Title>
          <Switch>
            <Route path="/" exact component={Board} />
            <Route path="/add" component={Add} />
          </Switch>
        </Container>
      </div>
    );
}


const Container = styled.div`
  max-width: 700px;
  min-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & * {
    padding: 5px;
  }
  & input {
    width: 70%;
    &:focus{
      border: 1px solid #673ab7;
    }
  }
  & button {
    width: 25%;
    color: #fff;
    border: 1px solid #873cef;
    background-color: #873cef;
  }
`;



export default App;
