import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet";

import AuthForm from "./authForm";
// import { authSignInUp } from "../../services/authFetch";

//atom
// import { useAtom } from "jotai";
// import { userAtom } from "../../store/user";

export default function SignIn() {
  // const navigate = useNavigate();
  // const [, setUser] = useAtom(userAtom);

  const handleLogin = async ({ email, password }) => {
  //   try {
  //     const user = await authSignInUp("/users/sign_in", {
  //       user: { email, password },
  //     });
  //     if(user){
  //       toast.success("Bonjour, nous somme ravis de vous voir !");
  //     }
  //     setUser({
  //       id: user.user.id,
  //       email: user.user.email,
  //       isLogged: true,
  //     });
  //     navigate("/");
  //   } catch (error) {
  //     // console.error(error); 
  //     toast.error("Une erreur est survenue. Veuillez vérifier votre email et mot de passe");
  //   }
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
      <AuthForm onSubmit={handleLogin} buttonText="Login" />
    </div>
    </>
    )
}
