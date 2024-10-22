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
          <form className="flex justify-between border border-gray-500 rounded-full">
            <div className="rounded-full hover:bg-gray-300 py-2 px-8">
              <div className="flex flex-col">
                <label className="font-semibold text-start">Lieu</label>
                <input placeholder="Où cherchez-vous ?" name="location" className="border-0 bg-transparent focus:outline-none placeholder-gray-500"></input>
              </div>
              <div className="hidden">Drop down</div>
            </div>
            <div className="rounded-full hover:bg-gray-300 py-2 px-5">
              <button className="flex flex-col ">
                <label className="font-semibold">Date</label>
                <span className="text-gray-500">Quand ?</span>
              </button>
              <div className="hidden">Drop down</div>
            </div>
            <div className="rounded-full hover:bg-gray-300 py-2 px-5">
              <button className="flex flex-col">
                <label className="font-semibold">Créneau</label>
                <span className="text-gray-500">Quand ?</span>
              </button>
              <div className="hidden">Drop down</div>
            </div>
            <div className="flex justify-between items-center gap-5 rounded-full hover:bg-gray-300 py-2 ps-5 pe-2">
              <button className="flex flex-col">
                <label className="font-semibold">Pratiquant(e)s</label>
                <span className="text-gray-500">Combien ?</span>
              </button>
              <div className="hidden">Drop down</div>
              <button className="rounded-full bg-blue-500 h-full w-12">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="h-full p-2">
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
