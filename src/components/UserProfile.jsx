import React from 'react'
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {

    const navigate = useNavigate()

    const user = auth.currentUser
    const name = user.displayName ? user.displayName : 'No display name provided';
    const email = user.email
    const phoneNumber = user.phoneNumber ? user.phoneNumber : 'No number  provided';

    console.log(user)

    const handleLogout = () => {
        try {
           auth.signOut()
            setUserLoggedIn(false)
            navigate('/')
            
        } catch (error) {
            console.log('Some error is there')
        }
    }

    return (
        <div>
            <h2 className='text-4xl text-center mt-8 font-bold'>Profile Details</h2>
            <div className='max-w-3xl mx-auto mt-8 border mb-10 p-8'>
                <form>
                    <div className="flex flex-col sm:flex-row mb-2">
                        <label
                            className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-right "
                            type="text"
                            id="name"
                            value={name} readOnly

                        />
                    </div>
                    <div className="flex flex-col sm:flex-row mb-2">
                        <label
                            className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-right "
                            type="email"
                            id="email"
                            value={email} readOnly
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row mb-2">
                        <label
                            className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4"
                            htmlFor="phoneNumber"
                        >
                            Phone Number
                        </label>
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-right "
                            type="text"
                            id="phoneNumber"
                            value={phoneNumber} readOnly
                        />
                    </div>
                </form>
                <button type="button" className="bg-green-800 text-white px-4 py-2 rounded w-full mt-4" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default UserProfile