import { API_BASE_URL, getHeaders } from "./configFetch.js";

export async function register(userData) {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  if (!response.ok) throw new Error("Erreur d'inscription");
  return await response.json();
}

export async function login(credentials) {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) throw new Error("Erreur de connexion");
  return await response.json(); // Par exemple, { token: 'abcd1234' }
}

export async function fetchUserData(token) {
  const response = await fetch(`${API_BASE_URL}/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) throw new Error("Erreur de récupération des données utilisateur");
  return await response.json();
}

export async function updateUserData(token, updatedData) {
  const response = await fetch(`${API_BASE_URL}/user`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updatedData),
  });
  if (!response.ok) throw new Error("Erreur de mise à jour des données utilisateur");
  return await response.json();
}

export async function logout() {
  // Exemple d'appel d'API pour la déconnexion (ou simplement gérer côté client si aucun appel n'est requis)
  return true;
}

