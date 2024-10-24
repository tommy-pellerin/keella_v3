import { useEffect } from 'react';
import Hero from './Hero';
import Faq from './Faq';
import ExplanatoryBanner from './ExplanatoryBanner';
import { Helmet } from "react-helmet";

const Home = () => {

  return (
    <>
      <Helmet>
        <title>Keella | Accueil</title>
        <meta name="description" content="page d'accueil" />
      </Helmet>
      <Hero />
      <ExplanatoryBanner />
      <h2>
        Exemples
      </h2>
      <div className='text-center'>
        <h2>Retour expérience</h2>
        <p>Pour l'instant nous n'avons pas encore de retour d'expérience mais nous serons ravis d'afficher votre avis 😀</p>
      </div>
      
      <Faq />
    
    </>
  );
};

export default Home;