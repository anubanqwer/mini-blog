import axios from 'axios';
import React from 'react';
import BlogCard from './BlogCard';
import Styles from './MiniBlog.module.css';
import { useState, useEffect } from 'react';
import BasicModal from './BasicModal';

export default function MiniBlog({userData, setUserData}) {

    const [data, setData] = useState([]);
    const [toggleForUpdate, setToggleForUpdate] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3030/api/blog')
        .then(res =>{
            console.log(res.data);
            setData(res.data);
        })
        .catch(err =>{
            console.log(err);
        });
    }, [toggleForUpdate])

    const logout = () => {
        //set user data to empty json
        setUserData({});
    }

    const updateData = () => {
        setToggleForUpdate(prevState => !prevState);
    }

    const addNewBlogAPI = (blogData) => {
        console.log(blogData)
        axios.post('http://localhost:3030/api/blog', blogData)
        .then(res =>{
            console.log(res.data);
            updateData();
        })
        .catch(err =>{
            console.log(err);
        });
    }

    const editBlogAPI = (blogData) => {
        console.log(blogData)
        axios.patch('http://localhost:3030/api/blog', blogData)
        .then(res =>{
            console.log(res.data);
            updateData();
        })
        .catch(err =>{
            console.log(err);
        });
    }

    const deleteBlogAPI = (blogData) => {
        console.log('Delete a blog!', blogData)
        axios.delete('http://localhost:3030/api/blog', {data: blogData})
        .then(res =>{
            console.log(res.data);
            updateData();
        })
        .catch(err =>{
            console.log(err);
        });
    }

    return (
        <div>
            Hello {userData.username}
            <br />
            <button className={Styles.logoutButton} onClick={(e) => logout()}>Logout</button>
            <br />
            <BasicModal type='add' addNewBlogAPI={addNewBlogAPI} userData={userData} />
            <div className={Styles.cardArea}>
                {data.map((o, i) => {
                    return (<BlogCard key={i} jsonObject={o} type='edit' editBlogAPI={editBlogAPI} deleteBlogAPI={deleteBlogAPI}
                             userData={userData}/>);
                })}
            </div>
        </div>
    )
}
