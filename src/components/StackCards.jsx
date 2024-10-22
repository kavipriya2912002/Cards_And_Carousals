import React from 'react';
import { useInView } from 'react-intersection-observer';

const cardsData = [
  {
    image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Cat 1',
    description: 'Cats have highly sensitive whiskers that help them navigate their environment. These whiskers can detect even the slightest changes in their surroundings, which is essential for hunting and avoiding obstacles.',
  },
  {
    image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Cat 2',
    description: 'While cats purr when they are content, they also purr when they are scared or in pain. Purring is believed to have a calming effect, and the vibrations may promote healing and reduce stress.',
  },
  {
    image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Cat 3',
    description: 'Just like human fingerprints, a cats nose print is unique to each individual. The patterns of ridges and bumps on their noses can be used to identify them.',
  },
  {
    image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Cat 4',
    description: 'Cats are known for their love of sleep, averaging 12-16 hours a day. They are crepuscular animals, meaning they are most active during dawn and dusk, which aligns with their natural hunting instincts.',
  },
  {
    image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Cat 5',
    description: 'Cats have developed a unique way of communicating with humans. They often use specific vocalizations and body language to express their needs and feelings, showing that they have adapted to living alongside people.',
  },
  {
    image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Cat 6',
    description: 'Cats have developed a unique way of communicating with humans. They often use specific vocalizations and body language to express their needs and feelings, showing that they have adapted to living alongside people.',
  },
];

function Card({ image, title, description, index }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`card relative sticky top-0 transition-transform duration-500 ${inView ? 'scale-100' : 'scale-95'} mb-10`}
    >
      <div className="bg-white rounded-lg flex overflow-hidden shadow-xl">
        <div className="flex w-2/5 shrink-0">
          <img className="w-full h-full object-cover" src={image} alt="" />
        </div>
        <div className="p-10 flex flex-col">
          <h1 className="text-5xl font-semibold text-[#16263a]">{title}</h1>
          <p className="leading-relaxed text-2xl text-[#16263a]">{description}</p>
        </div>
      </div>
    </div>
  );
}

function StackCards() {
  return (
    <div className="bg-hsl(265.3, 10%, 75%) p-5">
      <div className="max-w-2xl mx-auto">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default StackCards;
