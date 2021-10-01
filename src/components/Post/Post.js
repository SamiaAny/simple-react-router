import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    
    const { id, title } = props.post;
    // console.log(props.posts);
    return (
        <div>
            <h2>title : {title}</h2>
            <Link to={`posts/${id}`}>click details</Link>
        </div>
    );
};

export default Post;