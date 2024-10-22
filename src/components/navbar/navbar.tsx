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
  const [toggleSearch,setToggleSearch] = useState(false)

  return (
    <>
      <div className="flex justify-between items-center bg-white py-1 shadow-lg px-10">

        <Link to="/" className="flex flex-shrink-0 items-center">
          <img
            className="h-12 w-auto"
            src={logoKeella}
            alt="keella"
          />
        </Link>

        <div>
          <button className="button-no-color" onClick={() => setToggleSearch(!toggleSearch)}>
            <span>Rechercher une séance de sport</span>
            <div className="rounded-full bg-blue-500 h-full w-6" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="h-full p-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
          </button>

          <form className={`border border-gray-500 rounded-full ${
            toggleSearch ? "flex justify-between" : "hidden"
          }`}>
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

        <button className="flex justify-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          <div>
            <span className="rounded-full bg-blue-500">Menu</span>
          </div>
        </button>

      </div>
    </>
  )
}
