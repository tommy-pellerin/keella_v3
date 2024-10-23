import { useState } from "react";
import { Link } from 'react-router-dom';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Trouver une séance', href: '/workouts', authRequired: false },
  { name: 'Proposer une séance', href: '/', authRequired: false },
  { name: 'Inscription', href: '/sign-up', authRequired: false },
  { name: 'Connexion', href: '/sign-in', authRequired: false },
  { name: 'Messages', href: '/messages', authRequired: true },
  { name: 'Mon compte', href: '/my-account', authRequired: true },
  { name: 'Mes annonces', href: '/my-account', authRequired: true },
  { name: 'Mes réservations', href: '/my-account', authRequired: true },
  { name: 'Déconnexion', href: '/', authRequired: true },
  { name: 'Aide', href: '/help', authRequired: false },

];

export default function NavLinks({ closeMenu }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Simulate the auth state

  // Filter links based on the authentication state
  const filteredLinks = links.filter(link => {
    // Show "authRequired" links only if authenticated, or non-authRequired otherwise
    return isAuthenticated ? true : !link.authRequired;
  });

  return (
    <ul>
      {filteredLinks.map((link) => (
        <li key={link.name} className="list-none hover:bg-gray-400">
          <Link to={link.href} className="block w-full h-full p-3 md:pr-10"  onClick={closeMenu}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}