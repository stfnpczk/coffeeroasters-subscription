import styled from 'styled-components';
import NextImage from '../../utils/NextImage';

import mobileHeroImage from '../../../public/about/mobile/image-hero-whitecup.jpg';
import tabletHeroImage from '../../../public/about/tablet/image-hero-whitecup.jpg';
import desktopHeroImage from '../../../public/about/desktop/image-hero-whitecup.jpg';
import { HeroStyles } from '../home/Hero';

const HeroStylesAbout = styled(HeroStyles)`
  .container {
    height: 25rem;
  }

  .heading {
    font-size: clamp(1.75rem, 3.646vw, 2.5rem);
    line-height: clamp(1.75rem, 3.646vw, 3rem);
  }
`;

export default function Hero() {
  return (
    <HeroStylesAbout>
      <div className='container'>
        <h1 className='heading'>About Us</h1>
        <p className='paragraph'>
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>

        <NextImage
          mobileImgSrc={mobileHeroImage}
          tabletImgSrc={tabletHeroImage}
          desktopImgSrc={desktopHeroImage}
          alt='white cup'
        />
      </div>
    </HeroStylesAbout>
  );
}
