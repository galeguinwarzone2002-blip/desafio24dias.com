
import React from 'react';
import { CountdownBanner } from './components/CountdownBanner';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Comparison } from './components/Comparison';
import { Bonus } from './components/Bonus';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Guarantee } from './components/Guarantee';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CountdownBanner />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <Comparison />
        <Bonus />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Guarantee />
      </main>
      <Footer />
    </div>
  );
};

export default App;
