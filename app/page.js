'use client';

import React from 'react';
import Hero from './components/home/Hero';
import Collection from './components/home/Collection';
import ChooseUs from './components/home/ChooseUs';
import HowItWorks from './components/home/HowItWorks';

export default function Page() {
  return (
    <React.Fragment>
      <main>
        <Hero />
        <Collection />
        <ChooseUs />
        <HowItWorks />
      </main>
    </React.Fragment>
  );
}
