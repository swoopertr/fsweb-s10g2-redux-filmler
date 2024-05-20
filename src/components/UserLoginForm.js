import React, { useState } from "react";

const UserLoginForm = () => {

    return (
        <>
        <form>
            <label className="block pb-1 text-lg">Username</label>
                <input
                
                name="username"
                type="text"
                />
            <label className="block pb-1 text-lg">Password</label>
            <input
            
            name="password"
            type="password"
            />
        </form>
        
        </>
    )
}

export default UserLoginForm