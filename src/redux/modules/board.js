import {firestore} from "../../firebase";

const board_db = firestore.collection('book');
// Actions
const LOAD = "board/LOAD";
const CREATE = "board/CREATE";
const DELETE = "board/DELETE";
const EDIT = "board/EDIT";
const UP_LIKE = "board/UP_LIKE";
const DOWN_LIKE = "board/DOWN_LIKE";

const initialState = {
  list: [
    {id: '1', title: "ㅎ1ㅎ1", author: "히히를 변형한 단어", example: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1", like_cnt:0, color:'gray'}, 
    {id: '2', title: "ㅎㅎ", author: "히히를 변형한 단어", example: "저 친구가 초콜릿을 줬어. ㅎㅎ", like_cnt:0, color:'gray'},
    {id: '3', title: "ㅎ12123ㅎ1", author: "히히를 변형한 단어", example: "저 친구가 초콜릿을 줬어. ㅎ12123ㅎ1", like_cnt:0, color:'gray'}
  ]
};

export const editBoard = (board) => {
  return { type: EDIT, board};
}

export const loadBoard = (board) => {
  return { type: LOAD, board};
};

export const createBoard = (board) => {
  return { type: CREATE, board };
};

export const deleteBoard = (board) => {
  return { type: DELETE, board };
};

export const upLike = (board) => {
  return { type: UP_LIKE, board}
}

export const downLike = (board) => {
  return { type: DOWN_LIKE, board}
}


export const loadBoardFB = () => {
  return function(dispatch){
    board_db.get().then((docs)=>{
      let board_data = [];

      docs.forEach((doc)=>{
        if(doc.exists) {
          board_data = [...board_data, {id: doc.id, ...doc.data()}];
        }
      });
      console.log(board_data);
      dispatch(loadBoard(board_data));
    });
  };
};




// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "board/LOAD": {
      if(action.board.length > 0) {
        return { list: action.board };
      }
      console.log(action);
      return state
    }
    case "board/CREATE": {
      console.log(state, action);
      const new_board_list = [...state.list, action.board];
      return { list: new_board_list };
    }
    case "board/ADD": {
      const new_board_list = [...state.list, action.board];
      return { list: new_board_list };
    }
    case "board/DELETE": {
      const board_list = state.list.filter((l, idx) => {
        if(idx !== action.board){
            return l;
        }
      });
      return {list: board_list}; 
    }


    case "board/EDIT": {
      var userInput = prompt("제목 수정하기"+"");
      var userInput2 = prompt("글쓴이 수정하기"+"");
      
      const board_list = state.list.map((l,idx) => {
      if (idx === action.board) {
        return {...l, title: userInput, author: userInput2};
      } else {
        return l;
      }
    });
    return {list: board_list};
  }
   case "board/UP_LIKE": {
      const board_list = state.list.map((l,idx) => {
        if (idx === action.board) {
          return {...l, like_cnt: l.like_cnt + 1, color: 'red'};
        } else {
          return l;
        }
      });
      return {list: board_list};
    }

    case "board/DOWN_LIKE": {
      const board_list = state.list.map((l,idx) => {
        if (idx === action.board && l.like_cnt > 1) {
          return {...l, like_cnt: l.like_cnt - 1};
        } else if(l.like_cnt === 1){
          return {...l, like_cnt: l.like_cnt - 1, color: 'gray'};
        } else {
          return l;
        }
      });
      return {list: board_list};
    }

    default:
      return state;
  }
}
