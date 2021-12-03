import React from 'react';
import p from './Posts.module.css';

export const Posts = (props) => {
    return (
        <div className={p.post}>
            <div className={p.item}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOlaWqOUHlXgQBKHi5jFoXsPTmxDI6SjFVzA&usqp=CAU"
                    alt=""/>
                {props.message}
                <div><span>like </span>{props.likescounte}</div>
            </div>
        </div>
    );
}