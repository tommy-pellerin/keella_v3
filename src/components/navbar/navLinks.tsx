import { useState } from "react";
import { Link } from 'react-router-dom';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const staticLinks = [
  { name: 'Trouver une séance', href: '/workouts' },
  { name: 'Proposer une séance', href: '/host' },
];

const notAuthLinks = [
  { name: 'Inscription', href: '/sign-up' },
  { name: 'Connexion', href: '/sign-in' },
];
const authLinks = [
  { name: 'Messages', href: '/messages' },
  { name: 'Mes réservations', href: '/account-settings' },
  { name: 'Mon compte', href: '/account-settings' },
  { name: 'Mes annonces', href: '/account-settings'},
  { name: 'Déconnexion', href: '/'},
];

export default function NavLinks({ closeMenu }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Simulate the auth state

  return (
    <ul>
      { staticLinks.map((link) => (
          <li key={link.name} className="list-none hover:bg-gray-400 font-semibold">
            <Link to={link.href} className="block w-full h-full p-3 md:pr-10"  onClick={closeMenu}>
              {link.name}
            </Link>
          </li>
      ))}
      
      <hr />

      { isAuthenticated ? 
        authLinks.map((link) => (
          <li key={link.name} className="list-none hover:bg-gray-400">
            <Link to={link.href} className="block w-full h-full p-3 md:pr-10"  onClick={closeMenu}>
              {link.name}
            </Link>
          </li>
        ))
        :
        notAuthLinks.map((link) => (
          <li key={link.name} className="list-none hover:bg-gray-400">
            <Link to={link.href} className="block w-full h-full p-3 md:pr-10"  onClick={closeMenu}>
              {link.name}
            </Link>
          </li>
        ))
      }

      <hr />

      <li className="list-none hover:bg-gray-400">
        <Link to="/help" className="block w-full h-full p-3 md:pr-10"  onClick={closeMenu}>
          Centre d'aide
        </Link>
      </li>
    </ul>
  );
}