import { Helmet } from "react-helmet";
const Help = () => {
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
        <h3 className="text-center m-4">
          Quelques questions qui reviennent souvent
        </h3>
        <div className="flex flex-wrap mt-1 mb-5">
          <div className="w-full md:w-1/2 p-2">
            <div className="h-full p-5 rounded-lg shadow-lg bg-gray-50">
              <div>
                <h5 className="text-center text-lg font-semibold mb-4">
                  Je suis propriétaire
                </h5>
                <div>
                  <p>
                    1.Est-ce qu&apos;un locataire peut me régler en liquide ?
                  </p>
                  <p>
                    Non, n&apos;acceptez jamais une location en dehors du site.
                    Aucun règlement en liquide n&apos;est autorisé pour payer
                    une location. Pourquoi ? Parce qu&apos;en cas
                    d&apos;accident ou de vol, vous ne serait pas assurée par
                    Keella. Le paiement en ligne est un gage de sécurité pour
                    vous, ne prenez pas de risques inutiles en contournant le
                    paiement sur le site.
                  </p>
                  <p>2. Quand suis-je crédité ?</p>
                  <p>
                    Vous serez crédité sur votre compte par virement entre 3 et
                    5 jours après la réalisation de la réservation.
                  </p>
                  <p>
                    3. Que se passe-t-il si le locataire ne se présente pas ou
                    est en retard ?
                  </p>
                  <p>
                    Si le locataire ne se présente pas au lieu de rendez-vous au
                    plus tard dans un délai de 30 minutes à compter de
                    l&apos;heure convenue, aucun remboursement ne pourra être
                    effectué.
                  </p>
                  <p>4. Comment contacter le locataire ?</p>
                  <p>
                    Dans la version actuelle de Keella, il n&apos;y a pas de
                    messagerie, vous pouvez contacter vos clients par mail via
                    &ldquo;mon compte &gt; mes annonces &gt; contacter le
                    client&ldquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <div className="h-full p-5 rounded-lg shadow-lg bg-gray-50">
              <div>
                <h5 className="text-center text-lg font-semibold mb-4">
                  Je suis locataire
                </h5>
                <div>
                  <p>1. Quels sont les moyens de paiement acceptés ?</p>
                  <p>
                    Actuellement, Keella n&apos;accepte que les paiements par
                    carte bancaire. Tout paiement en espèces ou en dehors du
                    site est considéré comme une infraction aux conditions
                    générales d&apos;utilisation et constitue un motif de
                    bannissement de la communauté. Utiliser notre plateforme
                    permet d&apos;une part la protection de vos données, et
                    d&apos;autre part une assurance en cas de problème.
                  </p>
                  <p>2. Quand serai-je débité ?</p>
                  <p>Vous êtes débité dès que le paiement est passé.</p>
                  <p>3. Réservation : le propriétaire ne me répond pas/plus</p>
                  <p>
                    Avant acceptation de la réservation, Il peut arriver que
                    certains propriétaires ne répondent pas ou ne soient pas
                    libres, il est donc conseillé d&apos;envoyer un message à
                    plusieurs propriétaires différents avant de réserver pour
                    s&apos;assurer de leurs disponibilités avant
                    d&apos;effectuer une demande de réservation.
                  </p>
                  <p>4. Comment contacter l&apos;hote ?</p>
                  <p>
                    Dans la version actuelle de Keella, il n&apos;y a pas de
                    messagerie, vous pouvez contacter votre hote par mail via
                    &ldquo;mon compte &gt; mes réservations &gt; contacter
                    l&apos;hote&ldquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
