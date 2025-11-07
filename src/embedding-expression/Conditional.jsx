import React from 'react'

const Conditional = () => {

    let isLoggedIn = false;


    return (
        <div>
            <p>{isLoggedIn ? 'welcome back' : 'please sign-in'}</p>
        </div>
    )
}

export default Conditional
