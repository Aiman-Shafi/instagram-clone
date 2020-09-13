import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Post from './components/Post/Post';
import { useState } from 'react';
import fakedata from './components/fakedata.json'
import FavoriteIcon from '@material-ui/icons/Favorite';


function App() {
  //const [post, setpost] = useState([])
  

  // Like Handler
  const [like, setLikes] = useState('');
  const [count, setCount] = useState(0);
  const likeHandler = () => {
    let color = '';
    let likes = 0;
      if (like === ''){
        color = 'secondary';
        setLikes(color);
        likes = count+1;
        setCount(likes);
      }
       else 
        setLikes(color);
        setCount(likes); 
    console.log('clicked')        
  }
  
  return (

    <div className="App">
        <Header></Header>
        <FavoriteIcon onClick={likeHandler} color={like}></FavoriteIcon> 
        <span>{count} Likes</span>
       <div>
          {
            fakedata.map(demoPost => <Post demoPost={demoPost} likeHandler={likeHandler} like={like} count={count} key={demoPost.id}></Post>)
          }
       </div>
    </div>
  );
}

export default App;
