import styled from 'styled-components';
import NextImage from '../../utils/NextImage';
import { sizes } from '../../styling/Globals';

import mobileQualityImage from '../../../public/about/mobile/image-quality.jpg';
import tabletQualityImage from '../../../public/about/tablet/image-quality.jpg';
import desktopQualityImage from '../../../public/about/desktop/image-quality.jpg';

const QualityStyles = styled.div`
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 0 clamp(11.3125rem, 48.267vw, 15.8125rem);

  @media (min-width: ${sizes.tablet}) {
    margin: 9rem 0 clamp(13.1875rem, 27.474vw, 16.5625rem);
  }

  @media (min-width: ${sizes.desktop}) {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 7.8125rem;
    padding: 0 5.3125rem 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 4.875rem;
    width: calc(100% - 3rem);
    width: 100%;
    height: 31.8125rem;
    background-color: var(--darkGrey);
    border-radius: 0.625rem;
    z-index: -1;
    max-width: 32.8125rem;

    @media (min-width: ${sizes.tablet}) {
      top: 10rem;

      width: calc(100%);
      height: clamp(30.5rem, 63.542vw, 38.125rem);
      max-width: unset;
    }

    @media (min-width: ${sizes.desktop}) {
      height: clamp(29.625rem, 61.719vw, 37.5rem);
      top: 5.5rem;
    }
  }

  .imageContainer {
    position: relative;
    height: 11.1875rem;
    border-radius: 0.625rem;
    /* border: 0 solid; */
    overflow: hidden;
    margin: 0 1.5rem 0;
    z-index: 2;
    width: calc(100% - 3rem);

    @media (min-width: ${sizes.tablet}) {
      height: clamp(20rem, 41.667vw, 25rem);
      width: calc(100% - 7.25rem);
    }

    @media (min-width: ${sizes.desktop}) {
      height: clamp(29.625rem, 61.719vw, 37.5rem);
      flex: 0 1 45%;

      margin: 0;
    }
  }

  .textContainer {
    padding: 0 1.5rem 0;

    @media (min-width: ${sizes.tablet}) {
      max-width: 33.75rem;
    }

    @media (min-width: ${sizes.desktop}) {
      padding: 0;
      width: clamp(33.75rem, 70.313vw, 33.75rem);
      max-width: unset;
    }
  }

  .heading {
    font-size: 1.75rem;
    line-height: 1.75rem;
    font-weight: 900;
    margin: 4rem 0 1.5rem;
    color: var(--lightCream);

    @media (min-width: ${sizes.tablet}) {
      font-size: 2rem;
      line-height: 3rem;
    }

    @media (min-width: ${sizes.desktop}) {
      font-size: 2.5rem;
    }
  }

  .paragraph {
    color: var(--lightCream);
    opacity: 0.7;
  }
`;

export default function Quality() {
  return (
    <QualityStyles>
      <div className='imageContainer'>
        <NextImage
          mobileImgSrc={mobileQualityImage}
          tabletImgSrc={tabletQualityImage}
          desktopImgSrc={desktopQualityImage}
          alt='quality'
        />
      </div>

      <div className='textContainer'>
        <h2 className='heading'>Uncompromising quality</h2>
        <p className='paragraph'>
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
    </QualityStyles>
  );
}
