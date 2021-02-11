import React from 'react';
import css from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPost from "./NewPost/NewPost";

const Profile = (props) =>{
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
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