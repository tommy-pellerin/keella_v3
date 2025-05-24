// authActionsAtoms.js
import { atom } from 'jotai';
import Cookies from "js-cookie";
import { tokenAtom, userAtom } from './authAtoms';
import { login, register, fetchUserData, updateUserData, logout } from '../services/apiServices';

// Atome pour l’inscription
export const registerAtom = atom(
  null,
  async (get, set, registrationData) => {
    try {
      const { token } = await register(registrationData);
      Cookies.set("keellauth", token); //// Stockage du token dans un cookie sécurisé
      set(tokenAtom, token);
      set(userAtom, userId); // Stockage de l'ID utilisateur dans le Local Storage
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      throw error;
    }
  }
);

// Atome pour la connexion
export const loginAtom = atom(
  null,
  async (get, set, credentials) => {
    try {
      const { token, user } = await login(credentials);
      // Stockage du token dans un cookie sécurisé
      Cookies.set("keellauth", token, { secure: true, sameSite: 'Strict' });
      set(tokenAtom, token);
      set(userAtom, userId); // Stockage de l'ID utilisateur dans le Local Storage
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      throw error;
    }
  }
);


// Atome pour la déconnexion
export const logoutAtom = atom(
  null,
  async (get, set) => {
    try {
      await logout();
      Cookies.remove("keellauth");
      set(tokenAtom, null); // Réinitialise l’atome
      
      // Suppression de l'ID utilisateur du Local Storage et de l’atome
      localStorage.removeItem('userId');
      set(userAtom, null);
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
      throw error;
    }
  }
);

// Atome pour la mise à jour des informations de l’utilisateur
export const updateUserAtom = atom(
  null,
  async (get, set, updatedData) => {
    const token = get(tokenAtom);
    if (token) {
      try {
        const newUser = await updateUserData(token, updatedData);
        set(userAtom, newUser);
      } catch (error) {
        console.error("Erreur de mise à jour des données utilisateur :", error);
        throw error;
      }
    }
  }
);