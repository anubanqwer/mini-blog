import React from 'react'

export default function MiniBlog({userData, setUserData}) {

    const logout = () => {
        //set user data to empty json
        setUserData({});
    }

    return (
        <div>
            Hello {userData.username}
            <br />
            <button onClick={(e) => logout()}>Logout</button>
        </div>
    )
}
