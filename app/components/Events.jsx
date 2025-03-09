import React from 'react';

const Events = () => {
  // Dynamic card data
  const cards = [
    {
      id: 1,
      image: '/img-01-1.jpg', // Replace with correct image path
      title: 'Neque dolor primis a libero tempus a tempor',
      description:
        'Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor a gravi donec ipsum aporta justo',
    },
    {
      id: 2,
      image: '/img-01-2.jpg', // Replace with correct image path
      title: 'Second Card Title',
      description:
        'Second card description. Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus.',
    },
    {
      id: 3,
      image: '/img-03-1.jpg', // Replace with correct image path
      title: 'Third Card Title',
      description:
        'Third card description. Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus.',
    },
  ];

  return (
    <div className='flex justify-center items-center py-10 mt-12'>
      <div className='flex justify-center items-center flex-col max-w-7xl mx-auto px-4'>
        {/* Heading */}
        <h2 className='text-4xl md:text-6xl text-red-500 font-bold mb-4 text-center'>
          EVENTS & CATERING
        </h2>
        <p className='text-center max-w-2xl mb-8 text-gray-700'>
          Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus
          varius magna
        </p>

        {/* Cards Container */}
        <div className='flex flex-wrap justify-center gap-8'>
          {cards.map((card) => (
            <div
              key={card.id}
              className='flex flex-col bg-white text-black p-6 rounded-lg  shadow-lg w-full sm:w-80 overflow-hidden'
            >
              {/* Image Container */}
              <div className='overflow-hidden rounded-t-lg'>
                <img
                  src={card.image}
                  alt={card.title}
                  className='w-full h-48 object-cover transform duration-700 ease-in-out transition-transform hover:scale-110'
                />
              </div>
              <h2 className='text-xl font-semibold mt-4'>{card.title}</h2>
              <p className='mt-2 text-gray-600'>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;