import { Link } from "react-router-dom"
import { Helmet } from "react-helmet";

//Atom
import { useAtom } from 'jotai';
import { userAtom } from '../../store/user';


const AccountSettings = () => {
  const [user] = useAtom(userAtom)

  return (
    <>
      <Helmet>
          <title>Keella | Mon compte</title>
          <meta name="description" content="page mon compte proposante des liens vers mon profil, mes réservations, mes annonces et mes crédits" />
      </Helmet>
      <div className="background-blue-500">
        <h1 className="text-4xl">Mon compte</h1>
      </div>
      <div className="container mx-auto my-5">
        <div className="flex gap-5 place-items-center">

          <Link to={`/profile/${user.id}`} className="border rounded-lg shadow-lg px-3 py-3 w-3/5 sm:h-52 lg:h-44">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <div className="text-center">
                <h2 className="border-b">Mon profil</h2>
                <p>Retrouver vos informations ainsi que les notes et commentaires.</p>
              </div>
          </Link>

          <Link to={`/account-settings/personal-infos/`} className="border rounded-lg shadow-lg px-3 py-3 w-3/5 sm:h-52 lg:h-44">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                </svg>
              </div>
              <div className="text-center">
                <h2 className="border-b">Mes informations personnelles</h2>
                <p>Modifier vos informations.</p>
              </div>
          </Link>

          <Link to={`/account-settings/security`} className="border rounded-lg shadow-lg px-3 py-3 w-3/5 sm:h-52 lg:h-44">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <div className="text-center">
                <h2 className="border-b">Sécurité</h2>
                <p>Modifier votre mot de passe.</p>
              </div>
          </Link>

          <Link to={`/account-settings/privacy`} className="border rounded-lg shadow-lg px-3 py-3 w-3/5 sm:h-52 lg:h-44">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <div className="text-center">
                <h2 className="border-b">Confidentialité</h2>
                <p>Gérer vos données personnelles, votre consentement concernant nos cookies ou supprimer votre compte.</p>
              </div>
          </Link>

          <Link to={`/account-settings/payment-methods`} className="border rounded-lg shadow-lg px-3 py-3 w-3/5 sm:h-52 lg:h-44">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                </svg>
              </div>
              <div className="text-center">
                <h2 className="border-b">Paiements et versements</h2>
                <p>Consulter et Gérer vos paiements et versements</p>
              </div>
          </Link>

        </div>

        <p>Besoin d'aide ?</p>
        <p>Envoyez nous votre demande : <a href="mailto:contact@keella.fr?subject=Contact depuis le site web Keella" className="hover:underline">contact@keella.fr</a></p>
      </div>
    </>
  )
}

export default AccountSettings