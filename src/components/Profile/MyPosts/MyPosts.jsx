import Post from "./Post/Post";
import React from "react";

const MyPosts = () => {
    return (
        <div>
            <div className={'important-text'}>My posts</div>
            <br/>
            <div>
                < Post text={'Today i took a part on Kylie Jenners makeup video '}/>
                < Post text={'Hello! its my first post!'}/>
            </div>
        </div>
    );
}

export default MyPosts;