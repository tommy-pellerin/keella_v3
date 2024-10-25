import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Keella | Vie privée</title>
        <meta name="description" content="Confidentialité" />
      </Helmet>
      <h1>Confidentialité</h1>
      <p>Notre engagement à l'égard de la vie privée</p>
      <p>
        Keella est résolu à protéger vos données. Pour en savoir plus, consultez la <Link to="/privacy-policy">Politique de confidentialité</Link>.
      </p>

      <div className="container mx-auto">
        <div>
          <button>
            Demander à recevoir mes données personnelles
          </button>
        </div>
        <div>
          <button>
            Désactiver mon compte
          </button>
          <p>Votre compte et vos données ne seront plus visible, mais nous conservons vos données afin que vous puissiez le réactiver</p>
        </div>
        <div>
          <button>
            Activer mon compte
          </button>
          <p>Activer votre compte et rendre celui-ci visible</p>
        </div>
        <div>
          <button>
            Supprimer mon compte
          </button>
          <p>Votre compte et vos données seront supprimés définitivement, conformément à la législation applicable.</p>
        </div>
        <div>
          <button>
            Modifier les cookies
          </button>
        </div>
        
      </div>
    </>
  )
}
