import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const AddUserForm = () => {
    const [username, setUserName] = useState("");
    const [errorMessage, setErrorMessage] = useState("")
    const { push } = useHistory();
    const handleChange = (e) => {
        setErrorMessage("")
        let tmpUserName = e.target.value
        setUserName(tmpUserName)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let getUserNames = JSON.parse(localStorage.getItem("userList"));
        if (getUserNames === null) {
            localStorage.setItem("userList", JSON.stringify({users: []}))
        }
        getUserNames = JSON.parse(localStorage.getItem("userList"));
        if (!getUserNames.users.includes(username)) {
            localStorage.setItem("userList", JSON.stringify({users: [...getUserNames.users, username]}))
            setErrorMessage("")
            push("/movies")
        } else {
            setErrorMessage("Username already taken")
        }
    }
    return (
        <>
            <div className="bg-white rounded-md shadow flex-1">
                <form onSubmit={handleSubmit}>
                    <div className="p-5 pb-3 border-b border-zinc-200">
                        <h4 className="text-xl font-bold">Add User</h4>
                    </div>

                    <div className="px-5 py-3">
                        <div className="py-2">
                            <label className="block pb-1 text-lg">Username</label>
                            <input
                                value={username}
                                onChange={handleChange}
                                name="username"
                                type="text"
                            />
                            <p className="text-red-700" >{errorMessage}</p>
                        </div>
                        
                    </div>
                    <div className="px-5 py-4 border-t border-zinc-200 flex justify-end gap-2">
                        <Link to={`/movies`} className="myButton bg-zinc-500">
                            Vazgeç
                        </Link>
                        <button
                            type="submit"
                            className="myButton bg-green-700 hover:bg-green-600"
                        >
                            Ekle
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default AddUserForm