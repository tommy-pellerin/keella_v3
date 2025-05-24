import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet";

import AuthForm from "./authForm";

//atom
import { useAtom } from "jotai";
import { loginAtom } from "../../store/authActionsAtoms";

export default function SignIn() {
  const navigate = useNavigate();
  const [, setLogin] = useAtom(loginAtom); // On ne prend que setLogin car on n'a pas besoin de l'état actuel
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async ({ email, password }) => {

    setIsLoading(true); // Indique que le chargement commence

    try {
      // Appel à la méthode d'authentification via l'atom
      await setLogin({ email, password }); // On appelle l'atome avec les credentials
      toast.success("Bonjour, nous sommes ravis de vous voir !");
      navigate("/"); // Redirige vers la page d'accueil
    } catch (error) {
      toast.error("Une erreur est survenue. Veuillez vérifier votre email et mot de passe");
    } finally {
      setIsLoading(false); // Réinitialise l'état de chargement
    }
  };

  return (
    <>
    <Helmet>
      <title>Keella | Connexion</title>
      <meta name="description" content="connexion" />
    </Helmet>
    
    <div className="text-center my-5">
      <h1>Connexion</h1>
      <p>Vous semblez motivé ! 💪</p>
      <AuthForm onSubmit={handleLogin} buttonText={isLoading ? "Connexion en cours..." : "Se connecter"} />
    </div>
    </>
    )
}
