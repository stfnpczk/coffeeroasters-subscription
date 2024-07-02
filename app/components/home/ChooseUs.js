import styled from 'styled-components';
import { chooseUs } from '../../data/data';
import Image from 'next/image';
import { sizes } from '../../styling/Globals';

const ChooseUsStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 7.5rem 0 0;
  border-radius: 0.625rem;
  color: var(--lightCream);

  @media (min-width: ${sizes.tablet}) {
    text-align: unset;
  }

  @media (min-width: ${sizes.desktop}) {
    text-align: center;
    margin: 12.5rem 0 0;
  }

  &:after {
    content: '';
    position: absolute;
    width: calc(100% - 3rem);
    height: 56.375rem;
    background-color: var(--darkGrey);
    border-radius: 0.625rem;
    z-index: -1;
    max-width: 32.8125rem;

    @media (min-width: ${sizes.tablet}) {
      width: calc(100% - 5rem);
      max-width: 61.5rem;
      height: 35.8125rem;
    }

    @media (min-width: ${sizes.desktop}) {
      width: calc(100% - 10rem);
      max-width: calc(92.5rem - 10rem);
    }
  }

  .backgroundTile {
    padding: 4rem 1.5rem 0;
    max-width: 33.75rem;

    @media (min-width: ${sizes.tablet}) {
      text-align: center;
    }

    @media (min-width: ${sizes.desktop}) {
      max-width: 36.75rem;
    }
  }

  .headingTwo {
    font-size: 1.75rem;
    color: var(--lightCream);

    @media (min-width: ${sizes.tablet}) {
      font-size: 2rem;
      line-height: 3rem;
    }

    @media (min-width: ${sizes.desktop}) {
      font-size: 2.5rem;
      line-height: 3rem;
    }
  }

  .paragraphTop {
    margin: 1.5rem 0 4rem;
    color: var(--lightCream);

    @media (min-width: ${sizes.desktop}) {
      margin: 2rem 0 5rem;
    }

    @media (min-width: ${sizes.desktop}) {
      margin: 2rem 0 5.375rem;
    }
  }

  .listWrapper {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 1.5rem;

    @media (min-width: ${sizes.desktop}) {
      flex-direction: row;
      max-width: clamp(64.0625rem, 77.083vw, 75rem);
    }
  }

  .headingThree {
    font-size: 1.5rem;
    line-height: 2rem;
    color: var(--lightCream);
    margin: 0 0 1.5rem;

    @media (min-width: ${sizes.tablet}) {
      margin: 0 0 1rem;
    }

    @media (min-width: ${sizes.desktop}) {
      margin: 0 0 1.5rem;
    }
  }

  .paragraph {
    line-height: 1.5625rem;
    color: var(--lightCream);

    @media (min-width: ${sizes.desktop}) {
      font-size: 1rem;
      line-height: 1.625rem;
    }
  }

  .listItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
    background-color: var(--darkCyan);
    padding: 4.5rem 1rem 3rem;
    border-radius: 0.5rem;

    @media (min-width: ${sizes.tablet}) {
      flex-direction: row;
      padding: 2.5rem 4.375rem;
      max-width: 74.609vw;
    }

    @media (min-width: ${sizes.desktop}) {
      flex-direction: column;
      max-width: 21.875rem;
      gap: 3.5rem;
      padding: 4.5rem 3rem 3rem;
    }
  }

  .listIcon {
    width: 3.5rem;
    height: 3.5rem;

    @media (min-width: ${sizes.desktop}) {
      width: 4.5rem;
      height: 4.5rem;
    }
  }
`;

export default function ChooseUs() {
  return (
    <ChooseUsStyles>
      <div className='backgroundTile'>
        <h2 className='headingTwo'>Why choose us?</h2>
        <p className='paragraph paragraphTop'>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <ul className='listWrapper'>
        {chooseUs.map((element, index) => (
          <li className='listItem' key={index}>
            <Image
              className='listIcon'
              src={element.imageSource}
              width={72}
              height={72}
              alt={element.description}
            />
            <div>
              <h3 className='headingThree'>{element.heading}</h3>
              <p className='paragraph'>{element.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </ChooseUsStyles>
  );
}
