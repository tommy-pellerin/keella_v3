import { useState } from "react";
import { Helmet } from "react-helmet";
import HelpCustomer from "./helpCustomer";
import HelpHost from "./helpHost";

const Help = () => {
  const [isHost, setIsHost] = useState(false);

  return (
    <>
      <Helmet>
        <title>Keella | Aide & F.A.Q</title>
        <meta name="description" content="Aide et questions fréquentes" />
      </Helmet>

      <div className="container mx-auto my-5">
        <div className="background-blue-500 text-center">
          <h1>Aide</h1>
          <form>
            <label>
              <input type="text" name="search" placeholder="Recherche par mot clé">
              </input>
              <button className="rounded-full bg-blue-500 h-full w-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="h-full p-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
            </label>
          </form>
        </div>

        <div>
          <button className="button-primary-small" onClick={()=> setIsHost(false)}>
            Je suis locataire
          </button>
          <button className="button-primary-small" onClick={()=> setIsHost(true)}>
            Je suis propriétaire
          </button>
        </div>

        <h3 className="text-center m-4">
          Quelques questions qui reviennent souvent
        </h3>

        <div className="flex flex-wrap mt-1 mb-5">
          <div className="w-full md:w-1/2 p-2">
            <div className="h-full p-5 rounded-lg shadow-lg bg-gray-50">
              { isHost ?
                <HelpHost/>
              :
                <HelpCustomer/>
              }
            </div>
          </div>
        </div>

        <div>
          <h3>Recherche par thème</h3>
          <ul>
            <li>Vos réservations</li>
            <li>Paiements, tarification et remboursement</li>
            <li>Gestion d'une location</li>
            <li>Votre compte</li>
            <li>Sinistre, litige</li>
            <li>Evaluations et commentaires</li>
            <li>Sécurité et accessibilité</li>
            <li>A propos de Keella</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Help;
