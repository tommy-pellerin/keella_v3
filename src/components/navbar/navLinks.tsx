// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Trouver une séance', href: '/workouts' },
  { name: 'Proposer une séance', href: '/' },
  { name: 'Inscription', href: '/sign-up' },
  { name: 'Connexion', href: '/sign-in' },
  { name: 'Aide', href: '/help' },
];

export default function NavLinks() {

  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.name} className="list-none hover:bg-gray-400 p-3">
            <a
              
              href={link.href}
            >
              {link.name}
            </a>
          </li>
        );
      })}
    </>
  );
}