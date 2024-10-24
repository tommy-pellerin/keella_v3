import React, { useState } from 'react';

const Faq = () => {
  const [open, setOpen] = useState(null);

  const toggle = index => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <>
    <div className='w-full px-4 my-10'>
      <div className='mx-auto w-full max-w-md md:max-w-3xl'>
        <h2 className='text-3xl font-bold text-center mb-12'>Questions Fréquentes</h2>
        {[
          {
            title: 'Concept',
            content: 'Keella est une plateforme innovante qui permet aux utilisateurs de trouver et de réserver des espaces sportifs privés ou des séances d\'entraînement organisées par des particuliers. Cette approche démocratise l\'accès aux installations sportives et favorise une communauté active et engagée.'
          },
          {
            title: "Comment contacter l'hote de la séance ?",
            content: "Pour contacter un hote, connectez-vous sur votre compte Keella puis cliquez sur 'Contacter l'hôte' sur la page de l'annonce qui vous intéresse."
          },
          {
            title: 'La location est-elle assurée ? Que se passe-t-il en cas de problème ?',
            content: "Pour l'instant, la plateforme est mise à disposition gratuitement des utilisateurs et ne génère donc aucun revenu. Les utilisateurs sont invités à être responsables de leurs actions."
          },
        ].map((faq, index) => (
          <div key={index} className='mb-2'>
            <button
              className='flex justify-between items-center p-4 w-full font-medium text-left text-gray-800 bg-gray-100 rounded-lg hover:bg-gray-200'
              onClick={() => toggle(index)}
            >
              {faq.title}
              <span className='text-xl'>{open === index ? '-' : '+'}</span>
            </button>
            <div className={`${open === index ? 'block' : 'hidden'} p-4 bg-white rounded-lg`}>
              <p>{faq.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Faq;