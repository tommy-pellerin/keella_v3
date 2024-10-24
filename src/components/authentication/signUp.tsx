import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet";
import AuthForm from "./authForm";
// import { authSignInUp } from "../../services/authFetch";

//atom
// import { useAtom } from "jotai";
// import { userAtom } from "../../store/user";

export default function SignUp() {
  // const navigate = useNavigate();
  // const [,setUser] = useAtom(userAtom);

  const handleSignup = async ({ username, email, password }) => {
  //   try {
  //     const user = await authSignInUp("/users", {
  //       user: { username, email, password },
  //     });
  //     setUser({
  //       id: user.user.id,
  //       email: user.user.email,
  //       isLogged: true,
  //     });
  //     toast.success("Bonjour et Bienvenue !");
  //     navigate("/");
  //   } catch (error) {
  //     // console.error(error);
  //     if (error.response && error.response.status === 422) {
  //       // Extract and display the specific error message from the backend
  //       const errorMessage = await error.response.json(); // Assuming the error response is in JSON format
  //       toast.error(errorMessage.message || "Erreur d'inscription. Veuillez vérifier vos informations.");
  //     } else {
  //       toast.error("Une erreur est survenue. Veuillez vérifier votre email et mot de passe");
  //     }
  //   }
  };

  return (
  <>
    <Helmet>
      <title>Keella | Inscription</title>
      <meta name="description" content="Inscription" />
    </Helmet>
    <div className="text-center my-5">
      <h1>Créer un compte</h1>
      <p>Aller on se motive ! 🏃‍♂️‍➡️</p>
      <AuthForm onSubmit={handleSignup} buttonText="Accepter et continuer" />
    </div>
  </>
  )
}
