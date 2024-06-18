import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const User = () => {
    return (
        <div className="">
            <Navbar />
     
            <div className="bg-[#12022B] min-h-screen flex flex-col items-center pt-12">
                <form className="text-center mb-8">
                    <h1 className="font-bold text-white text-4xl mb-4">Welcome back<br/>Tony Jarvis!</h1>
                    <button type="submit" className="bg-[#02BC77] hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline">
                        Edit name
                    </button>
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
                            <button className="bg-[#02BC77] sm:w-auto  w-full hover:bg-blue-700 text-white sm:mt-0 mt-2 px-4 py-2 rounded focus:outline-none focus:shadow-outline">
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
