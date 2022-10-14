import React from "react";
import MARK from '../check-mark.png';

function Post({author, content, image, date}) {
    return (
    <div>
        <div className="header">
            <img className="logo" src={author.photo}/>
            <h3>{author.name}</h3>
            <img className="icon" src={MARK}/>
            <p>{author.nickname}</p>
            <p>{date}</p>
        </div>
        <div className="text">
            {content}
        </div>
        <div className="wrapper_image">
            <img src={image}/>
        </div>
    </div>
    );
};

export default Post;
