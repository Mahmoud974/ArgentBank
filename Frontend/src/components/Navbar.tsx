import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/argentBankLogo.png';
import { FaUserCircle } from 'react-icons/fa';

interface NavbarProps {
  isLoggedIn: boolean; // Propriété pour indiquer si l'utilisateur est connecté
  onLogout: () => void; // Callback pour gérer la déconnexion
}

const Navbar = ({ isLoggedIn, onLogout }: NavbarProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Mettre à jour l'état de connexion à false
    onLogout();
    // Rediriger l'utilisateur vers la page d'accueil
    navigate('/');
  };

  return (
    <div className="relative z-20 bg-white">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <NavLink to="/">
          <img src={Logo} alt="" className="w-48 " />
        </NavLink>
        {isLoggedIn ? (
          // Si connecté, affiche le nom de l'utilisateur et le bouton de déconnexion
          <div className="flex items-center">
            <FaUserCircle /> 
            <p className="ml-1 hover:underline cursor-pointer" onClick={handleLogout}>Sign out</p>
          </div>
        ) : (
          // Sinon, affiche le lien de connexion
          <NavLink to="/login" className="flex items-center">
            <div className="flex items-center">
              <FaUserCircle /> <p className="ml-1 hover:underline cursor-pointer">Sign In</p>
            </div>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
