
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import MagneticCursor from '../components/MagneticCursor';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MagneticCursor />
      <Navigation />
      <Hero />
    </div>
  );
};

export default Index;
