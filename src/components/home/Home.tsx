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
      <h2>
        Users feedback
      </h2>
      <Faq />
    
    </>
  );
};

export default Home;