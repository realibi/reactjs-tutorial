import React from "react";
import Avatar from "./Avatar/Avatar";
import PostText from "./PostText/PostText";
import css from './Post.module.css'
import Name from "./Name/Name";

const Post = (props) => {
    return (
        <div className={css.post}>
            <Avatar/>
            <Name/>
            <PostText text={props.text}/>
        </div>
    );
}

export default Post;