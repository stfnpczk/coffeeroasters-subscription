'use client';
import styled from 'styled-components';
import NextImage from '../../utils/NextImage';

import mobileHeroImage from '../../../public/plan/mobile/image-hero-blackcup.jpg';
import tabletHeroImage from '../../../public/plan/tablet/image-hero-blackcup.jpg';
import desktopHeroImage from '../../../public/plan/desktop/image-hero-blackcup.jpg';
import { HeroStyles } from '../home/Hero';

const HeroStylesSubscribe = styled(HeroStyles)`
  .container {
    height: 25rem;
  }
`;

export default function Hero() {
  return (
    <HeroStylesSubscribe>
      <div className='container'>
        <h1 className='heading'>Create a plan</h1>
        <p className='paragraph'>
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>

        <NextImage
          mobileImgSrc={mobileHeroImage}
          tabletImgSrc={tabletHeroImage}
          desktopImgSrc={desktopHeroImage}
          alt='white cup'
          priority={true}
        />
      </div>
    </HeroStylesSubscribe>
  );
}
