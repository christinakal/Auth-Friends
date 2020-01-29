import React, { useState } from "react";
import axiosWithAuth from "./Auth/axiosWithAuth";
import './AddFriends.css';

const AddFriend = (props) => {

    const [addFriendState, setAddFriendState] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChanges = e => {
        setAddFriendState({
            ...addFriendState,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('/friends', addFriendState)
            .then(response => {
                props.history.push('/friends')
            })
            .catch(err => console.log(err));
    }

    return (
        <form className="add-friends-form" onSubmit={handleSubmit}>
            <h1>Add more friends</h1>
            <input type='text' name='name' placeholder="name" value={addFriendState.name} onChange={handleChanges} />
            <input type='text' placeholder="age" value={addFriendState.age} onChange={handleChanges} name='age' />
            <input type='email' placeholder="email" value={addFriendState.email} onChange={handleChanges} name='email' />
            <button className="add-friends-btn">Add</button>
        </form>
    )
}

export default AddFriend;