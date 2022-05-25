import React from 'react'

export default function Users(props) {
    const { user } = props
    const { first_name, last_name, email } = user

    return (
        <div className='card-container'>
            <h3>{first_name} {last_name}</h3>
            <p>{email}</p>
        </div>
    )
}