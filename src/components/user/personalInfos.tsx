import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet";

export default function PersonalInfos() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Helmet>
        <title>Keella | Informations personelles</title>
        <meta name="description" content="Personal informations" />
      </Helmet>
      <h1>Informations personnelles</h1>

      <div className="container bg-gray-200 mx-auto lg:w-3/5 my-5 border border-gray rounded-lg">
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-5 my-5">

          <>
            <div className="sm:w-full lg:w-3/5">
            <label>Prénom</label>
            <br />
            <input
              type="firstName"
              placeholder="Tapez votre prénom"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full h-10 px-2 border rounded-md focus:border-blue-500 focus:outline-none"
            ></input>
            </div>

            <div className="sm:w-full lg:w-3/5">
              <label>Nom</label>
              <br />
              <input
                type="lastName"
                placeholder="Tapez votre nom"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full h-10 px-2 border rounded-md focus:border-blue-500 focus:outline-none"
              ></input>
            </div>
          </>

          <div className="w-3/5">
            <label>Email</label>
            <br />
            <input
              type="email"
              placeholder="Tapez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-10 px-2 border rounded-md focus:border-blue-500 focus:outline-none"
            ></input>
          </div>
            <>
              <div className="w-3/5">
                <label>Numéro de téléphone</label>
                <br />
                <input
                  type="phone"
                  placeholder="Tapez votre numéro de téléphone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-10 px-2 border rounded-md focus:border-blue-500 focus:outline-none"
                ></input>
              </div>
            </>
          <div className="w-3/5">
            <button type="submit" className="button-primary-large">Enregistrer</button>
          </div>        
        </form>
      </div>
    </>
  )
}
