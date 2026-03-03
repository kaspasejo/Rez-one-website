import { useState } from 'react';
import { Hero } from './Hero';
import { ArtistCarousel } from './ArtistCarousel';
import { Problem } from './Problem';
import { WhatWeDo } from './WhatWeDo';
import { SocialProof } from './SocialProof';
import { FinalCTA } from './FinalCTA';
import { Footer } from './Footer';

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black">
      <Hero isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <ArtistCarousel />
      <Problem isModalOpen={isModalOpen} />
      <WhatWeDo />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </div>
  );
}