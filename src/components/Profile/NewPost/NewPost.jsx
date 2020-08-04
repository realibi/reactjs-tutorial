import React from 'react';
import css from './NewPost.module.css'

const NewPost = () =>{
    return (
        <div className={css.newPost}>
            <div className={'important-text'}> Add a new post </div> <br/>
            <textarea name="new_post_text" rows="3"></textarea><br/> <br/>
            <button>Add post</button>
        </div>
    );
}

export default NewPost;