import { useState } from 'react';
import banner from '../../assets/images/banner.png';
import { Link } from 'react-router-dom';
import "./home.css"

const ExplanatoryBanner = () => {
  const [isEquipmentOpen, setIsEquipmentOpen] = useState(false);
  const [isUsageOpen, setIsUsageOpen] = useState(false);

  return (
    <div className='py-5'>
      <h2 className="text-center font-bold text-3xl">Avec Keella, tout le monde y gagne !</h2>
      <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-lg mx-auto my-4">
        {/* Image responsive */}
        <img src={banner} alt="activity" className="w-full md:w-1/2" />

        {/* Cartes responsives */}
        <div className="w-full md:w-1/2 space-y-4">
          
          {/* Carte pour les sportifs */}
          <div className='border rounded-lg p-4'>
            <button
              className="font-bold text-lg w-full expendableButton"
              onClick={() => setIsEquipmentOpen(!isEquipmentOpen)}
            >
              💪 Je veux faire du sport
            </button>
              <div className={`mt-2 expendableBox-content ${isEquipmentOpen ? 'expendableBox-expended'  : ''}`}>
                <p>
                  En tant que sportif, profitez de la flexibilité de louer l&apos;équipement sportif dont vous avez besoin, 
                  où que vous soyez. Parfait pour essayer de nouveaux sports ou pour des séances de sport lors de vos voyages.
                </p>
                <Link to="/workouts" className="button-primary-large text-white font-bold py-2 px-4 rounded block mt-4">
                  Voir les séances
                </Link>
              </div>
          </div>

          {/* Carte pour les hôtes */}
          <div className="border rounded-lg p-4">
            <button
              className="font-bold text-lg w-full expendableButton"
              onClick={() => setIsUsageOpen(!isUsageOpen)}
            >
              🏠 Je partage ma salle de sport avec matériels
            </button>
              <div className={`mt-2 expendableBox-content ${isUsageOpen ? 'expendableBox-expended'  : ''}`}>
                <p className="mt-2">
                  En tant que hôte, créez des activités uniques ou proposez votre salle de sport avec les matériels à la location. 
                </p>
                
                <p className="mt-2">
                  Définissez vous-même le prix et le nombre de personnes à accueillir. Ajustez vos disponibilités à votre convenance.
                </p>

                <p className="mt-2">
                  C&apos;est une excellente manière de gagner un revenu supplémentaire tout en contribuant à la bonne santé des autres.
                </p>
                <div className='flex flex-grow gap-1'>
                  <Link to="/host" className="button-primary-large text-white font-bold py-2 px-4 rounded block mt-4">
                    Plus de détails
                  </Link>
                  <Link to="/workouts/create" className="button-primary-large text-white font-bold py-2 px-4 rounded block mt-4">
                    Proposer une séance
                  </Link>
                </div>                
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplanatoryBanner;