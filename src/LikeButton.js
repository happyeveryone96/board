import React, { useState, setState } from "react";
// Hook을 React에서 가져옵니다.
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useSelector} from 'react-redux';
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "./redux/modules/board";


function LikeButton (props) {
  // const dispatch = useDispatch();

  let [likes, setLike] = useState(0);
  let [updated, setUpdated] = useState(false);
  let [color, setColor] = useState('gray');



  const upLikes = () => {
    
      setLike(likes + 1);
      if (likes > -1) {
        setColor(color = 'red');
    }
  }
  const downLikes = () => {
    if (likes > 0) {
    setLike(likes - 1);
      if(likes === 1) {
        setLike(likes - 1);
        setColor(color = "gray");
      }
    }
}


  const updateLikes = () => {

    if(!updated) {
      setLike(likes + 1);
      setUpdated(updated = true);
      setColor(color = 'red');
      
    } else {
      setLike(likes - 1);
      setUpdated(updated = false);
      setColor(color = 'gray');

    }
    // dispatch(postActions.toggleLikeFB(props.id));
    
  }

  
  
        return (
            <React.Fragment>
                <div><FavoriteIcon style={{verticalAlign: 'middle', color:color}} onClick={upLikes}></FavoriteIcon>{likes}개</div>
                <button onClick={downLikes}>DOWN</button>
            </React.Fragment>
        )
}


export default LikeButton;

