import styled from 'styled-components';
import NextImage from '../../utils/NextImage';
import { sizes } from '../../styling/Globals';

import mobileCommitmentImage from '../../../public/about/mobile/image-commitment.jpg';
import tabletCommitmentImage from '../../../public/about/tablet/image-commitment.jpg';
import desktopCommitmentImage from '../../../public/about/desktop/image-commitment.jpg';

const CommitmentStyles = styled.div`
  .container {
    @media (min-width: ${sizes.tablet}) {
      display: flex;
      gap: 4.3125rem;
      justify-content: space-between;

      @media (min-width: ${sizes.desktop}) {
        gap: 7.8125rem;
      }
    }
  }

  .imageContainer {
    position: relative;
    width: auto;
    height: clamp(25rem, 106.667vw, 35rem);
    border-radius: 0.625rem;
    border: 0rem solid;
    overflow: hidden;
    text-align: center;

    @media (min-width: ${sizes.tablet}) {
      width: 100%;
      height: clamp(29.375rem, 61.198vw, 39.0625rem);
    }

    @media (min-width: ${sizes.desktop}) {
      height: clamp(27.8125rem, 57.943vw, 50rem);
    }
  }

  .textContainer {
    text-align: center;
    margin: 3rem 0 7.5rem;

    @media (min-width: ${sizes.tablet}) {
      max-width: clamp(21.1875rem, 44.141vw, 25rem);
      margin: 1rem 0 9rem;
    }

    @media (min-width: ${sizes.desktop}) {
      max-width: clamp(33.75rem, 70.313vw, 37.5rem);
      align-self: center;
      text-align: left;
    }
  }

  .heading {
    font-size: 2rem;
    line-height: 2.625rem;
    font-weight: 900;
    margin: 0 0 1.875rem;

    @media (min-width: ${sizes.desktop}) {
      font-size: 2.5rem;
      line-height: 3rem;
    }
  }

  .paragraph {
    opacity: 0.7;
  }
`;

export default function Commitment() {
  return (
    <CommitmentStyles>
      <div className='container'>
        <div className='imageContainer'>
          <NextImage
            mobileImgSrc={mobileCommitmentImage}
            tabletImgSrc={tabletCommitmentImage}
            desktopImgSrc={desktopCommitmentImage}
            alt='man preparing coffee in a cafe'
          />
        </div>
        <div className='textContainer'>
          <h2 className='heading'>Our commitment</h2>
          <p className='paragraph'>
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </div>
    </CommitmentStyles>
  );
}
