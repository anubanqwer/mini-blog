import axios from 'axios';
import React from 'react';
import BlogCard from './BlogCard';
import Styles from './MiniBlog.module.css';
import { useState, useEffect } from 'react';

export default function MiniBlog({userData, setUserData}) {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3030/api/blog')
        .then(res =>{
            console.log(res.data);
            setData(res.data);
        })
        .catch(err =>{
            console.log(err);
        });
    }, [])

    const logout = () => {
        //set user data to empty json
        setUserData({});
    }

    return (
        <div>
            Hello {userData.username}
            <br />
            <button onClick={(e) => logout()}>Logout</button>
            <div className={Styles.cardArea}>
                {data.map((o, i) => {
                    return (<BlogCard key={i} jsonObject={o}/>);
                })}
            </div>
        </div>
    )
}
