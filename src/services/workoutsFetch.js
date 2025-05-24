import Cookies from "js-cookie";
import { API_BASE_URL, getHeaders } from "./configFetch.js";

export async function fetchWorkouts() {
  const response = await fetch(`${API_BASE_URL}/workouts`);
  if (!response.ok) throw new Error("Erreur de récupération des workouts");
  return await response.json();
}