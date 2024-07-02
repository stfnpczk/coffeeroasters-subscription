import styled from 'styled-components';
import { collection } from '../../data/data';
import Image from 'next/image';
import { sizes } from '../../styling/Globals';

const CollectionStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: ${sizes.tablet}) {
    text-align: left;
  }

  @media (min-width: ${sizes.desktop}) {
    text-align: center;
  }

  .headingTwo {
    font-size: 2.5rem;
    background-image: linear-gradient(
      rgba(150, 150, 150, 0.6),
      rgba(150, 150, 150, 0.01)
    );
    background-clip: text;
    color: transparent;
    margin: 0 0 1.875rem;

    @media (min-width: ${sizes.tablet}) {
      font-size: 6rem;
      line-height: 4.5rem;
      margin: 0 0 -1.625rem;
    }

    @media (min-width: ${sizes.desktop}) {
      font-size: 9.375rem;
      line-height: unset;
      margin: 0 0 -5.9375rem;
    }
  }

  .headingThree {
    font-size: 1.5rem;
    line-height: 2rem;
    margin: 1.5rem 0 1rem;

    @media (min-width: ${sizes.tablet}) {
      margin: 0;
    }
  }

  .listWrapper {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media (min-width: ${sizes.desktop}) {
      flex-direction: row;
      gap: 1.875rem;
      max-width: 67rem;
    }
  }

  .listItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1.25rem;
    max-width: 74.609vw;

    @media (min-width: ${sizes.tablet}) {
      flex-direction: row;
      padding: 0;
      gap: 2.25rem;
      max-width: clamp(35.8125rem, 74.609vw, 40.625rem);
    }

    @media (min-width: ${sizes.desktop}) {
      flex-direction: column;
      max-width: unset;
    }
  }

  .imageContainer {
    position: relative;

    @media (min-width: ${sizes.tablet}) {
      width: 16rem;
      height: 12.5625rem;
    }
  }

  .coffeeBagImage {
    width: 100%;
    height: auto;
  }

  .paragraph {
    margin: 1rem 0;
  }
`;

export default function Collection() {
  return (
    <CollectionStyles>
      <h2 className='headingTwo'>our collection</h2>
      <ul className='listWrapper'>
        {collection.map((element, index) => (
          <li className='listItem' key={index}>
            <div className='imageContainer'>
              <Image
                className='coffeeBagImage'
                src={element.imageSource}
                width={192}
                height={151}
                alt={element.description}
              />
            </div>
            <div>
              <h3 className='headingThree'>{element.heading}</h3>
              <p className='paragraph'>{element.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </CollectionStyles>
  );
}
