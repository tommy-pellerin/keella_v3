import { atom } from 'jotai';
import { atomWithStorage } from "jotai/utils";
import Cookies from "js-cookie";
import { login, register, fetchUserData, updateUserData, logout } from '../services/apiServices';

// Atome pour gérer le token (ou statut de connexion), initialisé avec la valeur du cookie
// la combinaison des 2 permet : les composants peuvent réagir immédiatement à l’état de l’atome tokenAtom, assurant une interface réactive sans nécessiter de vérifications constantes du cookie. Et une connexion persistante.
export const tokenAtom = atom(() => Cookies.get("keellauth") || null);

// Fonction pour récupérer les informations de l'utilisateur depuis le Local Storage
function getUserFromLocalStorage() {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}

// Atome de l'utilisateur
export const userAtom = atomWithStorage("user", getUserFromLocalStorage());

// Atome des workouts
export const workoutsAtom = atom(
  async () => {
    return await fetchWorkouts();
  }
);