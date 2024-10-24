import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from 'react';
import SearchBar from "./searchBar";
import NavLinks from "./navLinks";

import SignOut from "../auth/sign-out";
import { getData } from '../../services/data-fetch';

//Styles
import logoKeella from '../../assets/images/logo_keella.png';

//Atoms
import { useAtom } from "jotai";
import { userAtom } from '../../store/user'

export default function Navbar() {
  const [toggleSearch,setToggleSearch] = useState(true)
  // État pour savoir si le scroll est en cours
  const [isScrolling, setIsScrolling] = useState(true);
  // Gérer le menu dropdown
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null); // Référence pour le menu

  // Fermer le menu en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Fermer le menu si le clic est à l'extérieur
      }
    };

    // Ajouter l'événement de clic à la fenêtre
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Nettoyer l'événement lorsque le composant est démonté
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  // Utiliser useEffect pour écouter l'événement de défilement
  useEffect(() => {
    const handleScroll = () => {
      // Si l'utilisateur a cliqué sur un bouton récemment, on ignore le scroll
      if (isScrolling) {
        if (window.scrollY >= 1) {
          setToggleSearch(false); // Fermer la recherche si on scrolle vers le bas
        } else {
          setToggleSearch(true); // Ouvrir si on est en haut de la page
        }
      }
    };

    // Ajouter l'écouteur d'événement pour l'événement "scroll"
    window.addEventListener("scroll", handleScroll);

    // Nettoyer l'écouteur d'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling]); // Ajouter isScrolling comme dépendance pour re-render lors de son changement

  // Fonction pour basculer toggleSearch manuellement
  const handleToggleSearch = () => {
    setToggleSearch(!toggleSearch); // Inverser l'état de toggleSearch
    setIsScrolling(false); // Empêcher immédiatement le scroll de modifier l'état
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <div className="flex justify-between items-center bg-white py-1 shadow-lg px-10" ref={menuRef}>

      <Link to="/" className="flex flex-shrink-0 items-center">
        <img
          className="h-12 w-auto"
          src={logoKeella}
          alt="keella"
        />
      </Link>

      <div className="hidden md:flex justify-center items-center gap-5">
        <button className={`${toggleSearch ? "hidden" : "button-no-color "}`} onClick={() => handleToggleSearch()}>
          <span>Rechercher une séance de sport</span>
          <div className="rounded-full bg-blue-500 h-full w-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="h-full p-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
        </button>

        <SearchBar toggleSearch={toggleSearch} />

        <Link to="/host" className={`${toggleSearch ? "hidden" : "button-primary-small"}`}>Proposer une séance</Link>
      </div>
      
        <button className="flex justify-center items-center gap-2 border border-gray-500 rounded-full p-1" onClick={()=>toggleMenu()}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          <div className="h-8 w-8 border bg-gray-500 rounded-full flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
        </button>

        {isMenuOpen && (
          <div 
            className="absolute top-full left-0 w-full bg-white rounded-lg shadow-lg py-2 text-center md:w-auto md:right-10 md:top-full md:left-auto md:text-left"
          >
            <NavLinks closeMenu={toggleMenu}/>
          </div>
        )}

    </div>
  )
}
