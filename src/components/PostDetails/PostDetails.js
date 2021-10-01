import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const PostDetails = () => {
    let history = useHistory();
    const {postId} = useParams();
    const [post,setPost] = useState({});
    useEffect(() => {
        const url = `http://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data));
    },[])

    const handleClick = () => {
        history.push('/home');
    }
    return (
        <div>
           <h1>post details of {postId}</h1> 
           <h4>{post.title}</h4>
           <p>{post.body}</p>
           <button onClick={handleClick}>back to home</button>
        </div>
    );
};

export default PostDetails;