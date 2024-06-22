import  { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const User = () => {
    // State variables for user information
    const [firstName, setFirstName] = useState('Tony');
    const [lastName, setLastName] = useState('Jarvis');

    // Function to handle form submission
    const handleSubmit = (e:any) => {
        e.preventDefault();
        // Process form data (save or update)
        console.log("Form submitted with:", firstName, lastName);
        // You can add your logic here to save or update the name
    };

    return (
        <div className="">
            <Navbar />

            <div className="bg-[#12022B] min-h-screen flex flex-col items-center pt-12">
                <form className="text-center mb-8" onSubmit={handleSubmit}>
                    <h1 className="font-bold text-white text-4xl mb-4">
                        Welcome back<br />
                        {firstName} {lastName}!
                    </h1>
                    <div className="flex justify-center mb-4">
                        <input
                            type="text"
                            className="bg-white px-4 py-2 mr-2 rounded focus:outline-none focus:shadow-outline"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            type="text"
                            className="bg-white px-4 py-2 mr-2 rounded focus:outline-none focus:shadow-outline"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-[#02BC77] hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline mr-2"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline"
                        >
                            Cancel
                        </button>
                    </div>
                </form>

                <ul className="container mx-auto px-4">
                    <li className="w-5/6 flex- mx-auto mb-12">
                        <div className="bg-white p-6 rounded shadow-md w-98">
                            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                                <div>
                                    <h2 className="">Argent Bank Checking (x8349)</h2>
                                    <p className="text-gray-700 text-3xl font-bold space-y-6">$2,082.79</p>
                                    <p className="text-gray-500">Available Balance</p>
                                </div>
                                <button className="bg-[#02BC77] sm:w-auto w-full hover:bg-blue-700 text-white sm:mt-0 mt-2 px-4 py-2 rounded focus:outline-none focus:shadow-outline">
                                    View transactions
                                </button>
                            </div>
                        </div>
                    </li>

                    <li className="w-5/6 flex- mx-auto mb-12">
                        <div className="bg-white p-6 rounded shadow-md w-98">
                            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                                <div>
                                    <h2 className="">Argent Bank Checking (x67124)</h2>
                                    <p className="text-gray-700 text-3xl font-bold space-y-6">$10,928.42</p>
                                    <p className="text-gray-500">Available Balance</p>
                                </div>
                                <button className="bg-[#02BC77] sm:w-auto w-full hover:bg-blue-700 text-white sm:mt-0 mt-2 px-4 py-2 rounded focus:outline-none focus:shadow-outline">
                                    View transactions
                                </button>
                            </div>
                        </div>
                    </li>

                    <li className="w-5/6 flex- mx-auto mb-12">
                        <div className="bg-white p-6 rounded shadow-md w-98">
                            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                                <div>
                                    <h2 className="">Argent Bank Checking (x5201)</h2>
                                    <p className="text-gray-700 text-3xl font-bold space-y-6">$184.30</p>
                                    <p className="text-gray-500">Available Balance</p>
                                </div>
                                <button className="bg-[#02BC77] sm:w-auto w-full hover:bg-blue-700 text-white sm:mt-0 mt-2 px-4 py-2 rounded focus:outline-none focus:shadow-outline">
                                    View transactions
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <Footer />
        </div>
    );
};

export default User;
