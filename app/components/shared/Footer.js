'use client';
import styled from 'styled-components';
import Image from 'next/image';
import logolight from '@/public/shared/desktop/logo-light.svg';
import Link from 'next/link';
import { sizes } from '../../styling/Globals';

const FooterStyles = styled.footer`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 7.5rem 0 4.5rem;
  background-color: var(--darkGreyBlue);
  padding: 3.4375rem 0;

  @media (min-width: ${sizes.desktop}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 2.9375rem 5.3125rem;
  }

  .itemList {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 3rem 0;

    @media (min-width: ${sizes.tablet}) {
      flex-direction: row;
      gap: 2.0625rem;
      margin: 2rem 0 4.0625rem;
    }

    @media (min-width: ${sizes.desktop}) {
      margin: 0;
    }
  }

  .links {
    color: var(--grey);
    letter-spacing: 0.0575rem;
    font-weight: 700;
    transition: color 0.3s ease-in;

    &:hover {
      color: var(--lightCream);
    }

    @media (min-width: ${sizes.tablet}) {
      font-size: 0.75rem;
      line-height: 0.9375rem;
    }
  }

  .socials {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
  }

  .socialLink {
    svg path {
      transition: all 0.3s ease-in;
    }

    &:hover {
      svg path {
        fill: var(--paleOrange);
      }
    }
  }

  .logoWhite {
    svg path {
      fill: white;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className='imageContainer'>
        <Image src={logolight} alt='logo coffeeroasters' />
      </div>
      <nav className='footerNavigation' role='navigation'>
        <ul className='itemList'>
          <li>
            <Link className='links' href='/'>
              HOME
            </Link>
          </li>
          <li>
            <Link className='links' href='/about'>
              ABOUT US
            </Link>
          </li>
          <li>
            <Link className='links' href='/subscribe'>
              CREATE YOUR PLAN
            </Link>
          </li>
        </ul>
      </nav>

      <div className='socials'>
        <Link
          className='socialLink'
          href='https://www.facebook.com'
          passHref={true}
          aria-label='Link to Facebook page'
        >
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
            <path
              fill='#FEFCF7'
              d='M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z'
            />
          </svg>
        </Link>
        <Link
          className='socialLink'
          href='https://twitter.com'
          passHref={true}
          aria-label='Link to Twitter page'
        >
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='20'>
            <path
              fill='#FEFCF7'
              d='M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z'
            />
          </svg>
        </Link>
        <Link
          className='socialLink'
          href='https://www.instagram.com'
          passHref={true}
          aria-label='Link to Instagram page'
        >
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
            <path
              fill='#FEFCF7'
              d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'
            />
          </svg>
        </Link>
      </div>
    </FooterStyles>
  );
}
