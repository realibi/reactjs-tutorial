import Post from "./Post/Post";
import React from "react";

const MyPosts = () => {

    let postData = [
        {id: 1, text: 'Today i took a part on Kylie Jenners makeup video'},
        {id: 2, text: 'Never give up'},
        {id: 3, text: 'Alibi <3'},
        {id: 4, text: 'Hello! its my first post!'},
    ];

    let postElements = postData.map(post => <Post id={post.id} text={post.text}/>);

    return (
        <div>
            <div className={'important-text'}>My posts</div>
            <br/>
            <div>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;