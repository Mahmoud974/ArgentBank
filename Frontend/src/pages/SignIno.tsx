import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaUserCircle } from 'react-icons/fa';
import { handleSignIn } from '../services/service';
import { useDispatch } from 'react-redux';
import { setUser } from '../slice/userSlice'; // Assurez-vous que le chemin est correct

const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const responseData = await handleSignIn(email, password);
      dispatch(setUser({ email, token: responseData.token })); // Assurez-vous que 'token' est la clé correcte dans votre réponse
      navigate('/connexion');
    } catch (error) {
      console.error('Erreur de connexion:', (error as Error).message);
      setErrorMessage((error as Error).message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-[#12022B] min-h-screen flex items-start justify-center pt-12">
        <div className="bg-white py-8 rounded shadow-md px-12">
          <FaUserCircle className="mx-auto my-4" size={50} />
          <h2 className="text-2xl font-bold mb-4 text-center">Se connecter</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Adresse email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Entrez votre adresse email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                placeholder="Entrez votre mot de passe"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700">Se souvenir de moi</span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="underline bg-[#02BC77] hover:bg-blue-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline"
              >
                Se connecter
              </button>
            </div>
            {errorMessage && (
              <div className="mt-4 text-red-500 text-center">
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
