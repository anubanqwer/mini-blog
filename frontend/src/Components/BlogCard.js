import React from 'react';
import Styles from './BlogCard.module.css';
import { BsCircle } from "react-icons/bs";

export default function BlogCard({jsonObject}) {

    return (
        <div className={Styles.cardBox}>
            <div>
                {jsonObject.name}
                <button>delete</button>
                <button>edit</button>
                <BsCircle color={jsonObject.status} className={Styles.statusCircle}/>
            </div>
            <p>{jsonObject.category}</p>
            <p>{jsonObject.content}</p>
            <p>{jsonObject.author}</p>
        </div>
    )
}
