import { useState, FormEvent } from 'react'; // Import FormEvent for type annotation
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaUserCircle } from 'react-icons/fa';
import axios from 'axios';

const SignIn = () => {
    const [username, setUsername] = useState<string>(''); 
    const [password, setPassword] = useState<string>(''); 

    const handleSignIn = async (event: FormEvent<HTMLFormElement>) => { // Use FormEvent<HTMLFormElement> for event type
        event.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:3001/api/v1/user/signin', {
                username,
                password
            });

            console.log('Response from backend:', response.data);
            // Handle success - e.g., redirect to dashboard, set auth tokens, etc.
        } catch (error) {
            console.error('Error signing in:', error.message);
            if (error.response) {
                console.error('Server responded with:', error.response.data);
            }
            // Handle error - e.g., show error message to user
        }
    };

    return (
        <div className="">
            <Navbar />
     
            <div className="bg-[#12022B] min-h-screen flex items-start justify-center pt-12">
                <div className="bg-white py-8 rounded shadow-md px-12">
                    <FaUserCircle className="mx-auto my-4"/>
                    <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
                    <form onSubmit={handleSignIn}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Enter your username"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox"
                                />
                                <span className="ml-2 text-gray-700">Remember me</span>
                            </label>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="underline bg-[#02BC77] hover:bg-blue-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SignIn;
