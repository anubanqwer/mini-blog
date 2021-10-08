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
                        
            <div className={Styles.editButtonInCard}>
                {isOwnerCard() && <BasicModal type='edit' editBlogAPI={editBlogAPI} userData={userData} jsonObject={jsonObject} 
                className={Styles.editButtonInCard} />}
            </div>

            {isOwnerCard() && <button onClick={deleteBlog} className={Styles.deleteButtonInCard}>delete</button>}

            <div className={Styles.statusCircle}>
                <BsCircle color={jsonObject.status} />
            </div>
            
            <div style={{
                lineHeight: '30px',
            }}>
                <b>{jsonObject.name}</b>
                <p>{jsonObject.category}</p>
                <p>{jsonObject.content}</p>
                <p>{jsonObject.author}</p>
            </div>
        </div>
    )
}
