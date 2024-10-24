import { useState } from "react";
import { useMatch, Link } from "react-router-dom";

export default function AuthForm({ onSubmit, buttonText }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("")

  //check if is signing up
  const match = useMatch("/sign-up");
  const isSigningUp = match ? true : false;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit({ firstName, lastName, email, password, phone });
  };

  return (
    <div className="container bg-gray-200 mx-auto lg:w-3/5 my-5 border border-gray rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-5 my-5">
        {/* display is signignup */}
        {isSigningUp &&
        <>
          <div className="sm:w-full lg:w-3/5">
          <label>Prénom</label>
          <br />
          <input
            type="firstName"
            placeholder="Tapez votre prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full h-10 px-2 border rounded-md focus:border-blue-500 focus:outline-none"
          ></input>
          </div>

          <div className="sm:w-full lg:w-3/5">
            <label>Nom</label>
            <br />
            <input
              type="lastName"
              placeholder="Tapez votre nom"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full h-10 px-2 border rounded-md focus:border-blue-500 focus:outline-none"
            ></input>
          </div>
        </>
        }

        <div className="w-3/5">
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="Tapez votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-10 px-2 border rounded-md focus:border-blue-500 focus:outline-none"
          ></input>
        </div>
        <div className="w-3/5">
          <label>Mot de passe</label>
          <br />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Tapez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-10 px-2 border rounded-md focus:border-blue-500 focus:outline-none"
            ></input>
            <button
              type="button"
              onClick={()=> setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1"
            >
              {showPassword ? 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
              : 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              }
            </button>
          </div>
        </div>
        {isSigningUp && 
          <>
            <div className="w-3/5">
              <label>Numéro de téléphone</label>
              <br />
              <input
                type="phone"
                placeholder="Tapez votre numéro de téléphone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full h-10 px-2 border rounded-md focus:border-blue-500 focus:outline-none"
              ></input>
            </div>
            <p className="w-3/5">
              En appuyant sur le bouton Accepter et continuer ci-dessous, j&apos;accepte les <Link to="/terms-of-use" className="underline hover:no-underline">conditions d&apos;utilisation</Link> de Keella et je certifie que j&apos;ai plus de 18 ans.
            </p>
          </>
        }
        <div className="w-3/5">
          <button type="submit" className="button-primary-large">{buttonText}</button>
        </div>        
      </form>

      {isSigningUp ?
          <div>
            <span>Vous avez déjà un compte ? </span>
            <Link to="/sign-in" className="underline hover:no-underline">Se connecter</Link>
          </div>
          :
          <div>
            <Link to="/forget-password" className="underline hover:no-underline">Mot de passe oublié ?</Link>
            <br />
            <div>
              <span>Vous n'avez pas de compte ? </span>
              <Link to="/sign-up" className="underline hover:no-underline">S&apos;inscrire</Link>
            </div>
          </div>
        }
    </div>
  );
}
