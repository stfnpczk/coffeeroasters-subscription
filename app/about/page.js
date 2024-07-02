'use client';
import React from 'react';
import Hero from '../components/about/Hero';
import Commitment from '../components/about/Commitment';
import Quality from '../components/about/Quality';
import Headquarters from '../components/about/Headquarters';

export default function Page() {
  return (
    <React.Fragment>
      <main>
        <Hero />
        <Commitment />
        <Quality />
        <Headquarters />
      </main>
    </React.Fragment>
  );
}
