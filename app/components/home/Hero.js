import styled from 'styled-components';
import { sizes } from '../../styling/Globals';

import mobileHeroImage from '../../../public/home/mobile/image-hero-coffeepress.jpg';
import tabletHeroImage from '../../../public/home/tablet/image-hero-coffeepress.jpg';
import desktopHeroImage from '../../../public/home/desktop/image-hero-coffeepress.jpg';

import CtaLink from '../shared/CtaLink';
import NextImage from '../../utils/NextImage';

export const HeroStyles = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 0.625rem;
    border: 0rem solid;
    overflow: hidden;
    position: relative;
    margin: 2.5rem 0 7.5rem;
    height: 31.25rem;
    padding: 6.25rem 1.5rem 0;

    @media (min-width: ${sizes.tablet}) {
      align-items: flex-start;
      text-align: left;
      margin: 3.3125rem 0 9rem;
      padding: 6.5rem 3.625rem;
    }

    @media (min-width: ${sizes.desktop}) {
      height: 37.5rem;
      margin: 2.75rem 0 8.5rem;
      padding: 7.25rem 0 7.25rem 5.3125rem;
    }
  }

  .heroImage {
    z-index: -1;
  }

  .heading {
    font-size: 2.5rem;
    line-height: 2.5rem;
    color: var(--lightCream);

    @media (min-width: ${sizes.tablet}) {
      font-size: 3rem;
      line-height: 3rem;
      max-width: 42.318vw;
    }

    @media (min-width: ${sizes.desktop}) {
      font-size: 4.5rem;
      line-height: 4.5rem;
      max-width: 30.8125rem;
    }
  }

  .paragraph {
    font-size: 0.9375rem;
    line-height: 1.5625rem;
    margin: 1.5rem 0 2.5rem 0;
    color: rgba(254, 252, 247, 0.8);

    @media (min-width: ${sizes.tablet}) {
      max-width: 51.823vw;
      max-width: clamp(24.875rem, 51.823vw, 31.25rem);
      margin: 1.5rem 0 3.125rem 0;
    }

    @media (min-width: ${sizes.desktop}) {
      max-width: 27.8125rem;
      font-size: 1rem;
      line-height: 1.625rem;
      margin: 2rem 0 3.5rem 0;
    }
  }
`;

export default function Hero() {
  return (
    <HeroStyles>
      <div className='container'>
        <h1 className='heading'>Great coffee made simple.</h1>
        <p className='paragraph'>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>

        <NextImage
          mobileImgSrc={mobileHeroImage}
          tabletImgSrc={tabletHeroImage}
          desktopImgSrc={desktopHeroImage}
          alt='coffee press'
        />

        <CtaLink text='Create your plan' link='/subscribe' />
      </div>
    </HeroStyles>
  );
}
