'use client';
import React from 'react';
import Hero from '../components/subscribe/Hero';
import StepsToSubscribeDark from '../components/subscribe/StepsToSubscribeDark';
import Accordion from '../components/subscribe/Accordion';

export default function Page() {
  return (
    <React.Fragment>
      <main>
        <Hero />
        <StepsToSubscribeDark />
        <Accordion />
      </main>
    </React.Fragment>
  );
}
