import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './friend.css';

const Friend = (props) => {
    console.log(props);
    let history = useHistory();
    const {id, name, email, website, address} = props.friend;
    const url = `/friend/${id}`;//add dynamic route where friend fixed id can be vary alhon etak <Route> er virot path er moddhe define kore dite hobe /friend/:friendId diye

    const handleClick = () => {
        history.push(`/friend/${id}`);
    }
    return (
        <div className="friend">
            <h3>{name} {id}</h3>
            <p>{email}</p>
            <p><small>{website}</small></p>
            <p>I live in {address.city}</p>
            <Link to={url}>visit me</Link>
            {/* amra chaile link to er bodole button bosiye kaj ta korte pari */}
            <button onClick={handleClick}>Visit me</button>

        </div>
    );
};

export default Friend;