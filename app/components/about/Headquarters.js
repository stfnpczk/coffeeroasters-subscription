import styled from 'styled-components';
import { sizes } from '../../styling/Globals';
import Image from 'next/image';
import { headquarters } from '../../data/data';

const HeadquartersStyles = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: ${sizes.tablet}) {
    text-align: left;
  }

  .heading {
    font-size: 1.5rem;
    line-height: 2rem;
    color: var(--grey);
  }

  .addressList {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4.5rem 0 0;
    gap: 5rem;

    @media (min-width: ${sizes.tablet}) {
      flex-direction: row;
      gap: clamp(5rem, 10.417vw, 8.125rem);
    }

    @media (min-width: ${sizes.desktop}) {
      justify-content: unset;
      gap: clamp(5.9375rem, 12.37vw, 12.5rem);
    }
  }

  .addressItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.9375rem;

    @media (min-width: ${sizes.tablet}) {
      align-items: flex-start;
    }
  }

  .headingThree {
    font-size: 1.75rem;
    line-height: 2.25rem;
    margin: 0 0 1.375rem;

    @media (min-width: ${sizes.tablet}) {
      font-size: 1.5rem;
      line-height: 2.25rem;
    }

    @media (min-width: ${sizes.desktop}) {
      font-size: 2rem;
      line-height: 2.25rem;
    }
  }

  address {
    font-style: normal;
    span {
      display: block;
      text-decoration: none;
      font-size: 1rem;
      line-height: 1.625rem;
    }
  }
`;

export default function Headquarters() {
  return (
    <HeadquartersStyles>
      <h2 className='heading'>Our headquarters</h2>
      <ul className='addressList'>
        {headquarters.map((element, index) => (
          <li className='addressItem' key={index}>
            <Image
              className='countryImageIcon'
              src={element.iconSrc}
              width={'auto'}
              height={'auto'}
              alt={`icon of ${element.country}`}
            />
            <div>
              <h3 className='headingThree'>{element.country} </h3>
              <p> {element.street}</p>
              <address>
                <span className='addressInfo'>
                  {element.information.street}{' '}
                </span>
                <span>{element.information.city} </span>
                <span>{element.information.state} </span>
                <span>{element.information.phone} </span>
              </address>
            </div>
          </li>
        ))}
      </ul>
    </HeadquartersStyles>
  );
}
