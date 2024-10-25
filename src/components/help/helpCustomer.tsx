import React from 'react'

export default function HelpCustomer() {
  return (
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
  )
}
