import { Link } from "react-router-dom";

export default function Host() {
  return (
    <>
      <div>
        <h1>Gagner de l'argent en proposant votre salle de sport</h1>
        <p>Vous etes propriétaire, vous avez un local ou une zone équipé de materiels de sport, vous souhaitez en faire profiter aux autres ?</p>
        <p>Estimez vos revenus via notre simulateur</p>
      </div>
      <div>
        <h2>Vous n'avez pas tout compris ? Ce n'est pas votre faute !</h2>
        <p>Voici comment ça fonctionne :</p>
        <ul>
          <li>🏓 Vous faite l'inventaire de vos équipement en bon état d'utilisation.</li>
          <li>📝 Vous fixez fixez vos regles : si vous souhaitez acceuillir un(e) ou plusieurs pratiquants pour faire du sport avec vous ou en privé.</li>
          <li>🏠 Vous aménager les zone et le(s) métériel(s) en fonction de vos regles.</li>
          <li>🪙 Vous fixez vos prix et horaires.</li>
          <li>✋ Vous acceuillez votre/vos pratiquants.</li>
          <li>💖 Le pratiquant ainsi que la santé mondiale vous remercie d'avoir aidé l'humanité à rester en forme !</li>
        </ul>
      </div>
      <Link className="button-primary-small" to='/workouts/create'>
        Créer une annonce
      </Link>
    </>
  )
}
