import { NavLink } from "react-router-dom";
import Logo from "../assets/argentBankLogo.png"
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
    return (
        <div className=" relative z-20 bg-white  ">
            <div className="container mx-auto flex flex-row justify-between items-center">
        <NavLink to="/">
            <img src={Logo} alt="" className="w-48 " /></NavLink>
       <NavLink to="/loginPage/signIn" className="flex items-center">
  <div className="flex items-center">
             <FaUserCircle />  <p className="ml-1 hover:underline cursor-pointer">Sign In</p>
         </div>

       </NavLink>
            </div>
        </div>
    );
};

export default Navbar;