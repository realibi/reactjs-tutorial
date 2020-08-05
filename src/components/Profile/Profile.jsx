import React from 'react';
import css from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPost from "./NewPost/NewPost";

const Profile = () =>{
    return (
        <div>
            <ProfileInfo/>
            <br/>
            <hr/>
            <NewPost />
            <br/>
            <hr/>
            <MyPosts/>
        </div>
    );
}

export default Profile;