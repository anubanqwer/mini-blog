import React from 'react';
import Styles from './BlogCard.module.css';
import { BsCircle } from "react-icons/bs";
import BasicModal from './BasicModal';

export default function BlogCard({jsonObject, type, editBlogAPI, deleteBlogAPI, userData}) {

    const deleteBlog = () => {
        deleteBlogAPI({
            _id: jsonObject._id
        })
    }

    const isOwnerCard = () => {
        return userData._id === jsonObject.userId ? true : false;
    }

    return (
        <div className={Styles.cardBox}>
            <div>
                {jsonObject.name}
                {isOwnerCard() && <BasicModal type='edit' editBlogAPI={editBlogAPI} userData={userData} jsonObject={jsonObject} />}
                {isOwnerCard() && <button onClick={deleteBlog}>delete</button>}
                <BsCircle color={jsonObject.status} className={Styles.statusCircle}/>
            </div>
            <p>{jsonObject.category}</p>
            <p>{jsonObject.content}</p>
            <p>{jsonObject.author}</p>
        </div>
    )
}
