import React from 'react';

const UserCard = ({
    user: {
        name,
        phone,
        email,
        address: { street, number},
    },
    goBack
}) => {
    return (
        <div className="card px-2 py-2" style={{ width: '15rem', margin: ' auto' }}>
            <img src="/assets/user.png" className="card-img-top" alt="icon" />
            <h5 className="card-title>{name}</h5>
			<h6 class="card-subtitle=>{phone}</h6>
            <h6 class="card-subtitle">{email}</h6>
            <p class="card-text">{`${street} ${number}`}</p>
            <button className='btn btn-primary' onClick={goBack}>Go Back</button>
        </div>
    );
};
