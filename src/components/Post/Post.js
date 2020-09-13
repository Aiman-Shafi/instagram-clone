import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Post = (props) => {
    const {username, img, avatar, caption} = props.demoPost;
    console.log(props.likeHandler)
    return (
        <div className='post'>
           {/* Username  */}
           <div className="post_header">
               <Avatar alt="Remy Sharp" src={avatar} />
               <h4>{username}</h4>
           </div>
           
           <img src={img} alt=""/>
           
           <div className="post_caption">
                <span><strong>{username}</strong> {caption.substring(0,200) + '...'}</span>
           </div>
           <div className="post_like">
                <FavoriteIcon onClick={()=> props.likeHandler(props.demoPost.id)} color={props.like}> </FavoriteIcon><span>{props.count} Likes</span> 
           </div>
           
        </div>
    );
};

export default Post;