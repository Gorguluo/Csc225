import React from 'react';

const Users = ({ data, getUserCard }) => {
    return (
        <ul className="list-group">
            {data.map((user) => (
                <li onClick={() => getUserCard(user.id)} key={user.id} className="list-group-item">
                    <p className='my-0 py-0' style={{cursor: 'pointer'}}>{user.name}</p>
                    <small className='text-secondary text-lowercase'>@{user.username}</small>
                </li>
            ))}
        </ul>
    );
};

export default Users;