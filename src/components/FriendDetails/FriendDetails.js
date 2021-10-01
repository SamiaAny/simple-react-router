import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetails = () => {
    let history = useHistory();
    const { friendId } = useParams();
    // const id = useParams();
    // console.log(id);
    const [friend,setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    },[]);
    const handleclick = () => {
        history.push('/friends');
    }
    return (
        <div>
            <h1>Friend detail of : {friendId}</h1>
            <h2>Name: {friend.name}</h2>
            <h4>Phone: {friend.phone}</h4>
            <h5>Company: {friend.company?.name}</h5>
            <button onClick={handleclick}>click back</button>
        </div>
    );
};

export default FriendDetails;