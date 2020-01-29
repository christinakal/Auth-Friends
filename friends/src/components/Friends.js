import React, { useEffect, useState } from "react";
import axiosWithAuth from "./Auth/axiosWithAuth";
import FriendsCard from "./FriendsCard";
import './Friends.css';
import { Link } from "react-router-dom";

const Friends = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('/friends').then(response => {
            setData(response.data);
        })
    }, [])

    return (
        <div className="friends-component">
            <h1 className="friends">Friends</h1>
            {data.map(element => {
                console.log(element)
                return <FriendsCard name={element.name} age={element.age} key={element.id} email={element.email} />
            })}
            <Link to="/add-friend">
                <button className="add-friends-btn">Add more friends</button>
            </Link>
        </div>
    )
}

export default Friends;