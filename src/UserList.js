import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css'

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setListOfUsers(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            
            }
        };

        fetchData();
    }, []); // This ensures that the useEffect runs only once

    return (
        <div>
            <h1>List of users</h1>
            <ul>
                {listOfUsers.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );

};


export default UserList;
