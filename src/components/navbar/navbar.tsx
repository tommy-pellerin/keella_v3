import { Link } from "react-router-dom";
import SignOut from "../auth/sign-out";
import { useEffect, useState } from 'react';
import { getData } from '../../services/data-fetch';

//Styles
import logoKeella from '../../assets/images/logo_keella.png';

//Atoms
import { useAtom } from "jotai";
import { userAtom } from '../../store/user'

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Link to="/" className="flex flex-shrink-0 items-center">
          <img
            className="h-12 w-auto"
            src={logoKeella}
            alt="keella"
          />
        </Link>
        <div>
          <button className="button-primary-small">Rechercher une séance de sport</button>
          <form className="grid grid-cols-4 border border-gray-500 rounded-full">
            <div>
              <button className="flex flex-col rounded-full hover:bg-gray-300">
                <label >Lieu</label>
                <span>Où cherchez-vous ?</span>
              </button>
              <div className="hidden">Drop down</div>
            </div>
            <div>
              <button className="flex flex-col rounded-full hover:bg-gray-300">
                <label >Date</label>
                <span>Quand ?</span>
              </button>
              <div className="hidden">Drop down</div>
            </div>
            <div>
              <button className="flex flex-col rounded-full hover:bg-gray-300">
                <label >Créneau</label>
                <span>Horaire ?</span>
              </button>
              <div className="hidden">Drop down</div>
            </div>
            <div className="flex justify-between">
              <div>
                <button className="flex flex-col rounded-full hover:bg-gray-300">
                  <label >Pratiquant(e)s</label>
                  <span>Combien de praticant</span>
                </button>
                <div className="hidden">Drop down</div>
              </div>
              <button className="rounded-full bg-blue-500 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
            </div>
          </form>
          <Link to="/" className="button-primary-small">Proposer une séance</Link>
        </div>
        <div>Profile button</div>
      </div>
      
      
      
    </div>
  )
}
