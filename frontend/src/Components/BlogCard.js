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
                <BsCircle color='red' className={Styles.statusCircle}/>
            </div>
            <p>category</p>
            <p>content</p>
            <p>author</p>
        </div>
    )
}
