'use client';
import styled from 'styled-components';
import { useWindowWidth } from '@/app/hooks/useWindowWidth';
import Link from 'next/link';
import { sizes } from '@/app/styling/Globals';
import closeIcon from '@/public/shared/mobile/icon-close.svg';
import hamburgerIcon from '@/public/shared/mobile/icon-hamburger.svg';
import Image from 'next/image';
import ModalHambuger from '@/app/components/shared/ModalHamburger';
import logo from '@/public/shared/desktop/logo.svg';
import React, { useState } from 'react';

const HeaderStyles = styled.header`
  .container {
    display: flex;
    justify-content: space-between;

    @media (min-width: ${sizes.tablet}) {
      align-items: center;

      .logoIcon {
        width: 14.75rem;
        height: 1.625rem;
      }
    }
  }

  .navigationList {
    display: flex;
    flex-direction: row;
    gap: 2.0625rem;
  }

  .mobileNavList {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    a {
      font-family: var(--font-fraunces);
      font-size: 1.5rem;
      line-height: 2rem;
      color: var(--darkGreyBlue);
      font-weight: 900;
    }
  }

  .link {
    font-size: 0.75rem;
    line-height: 0.9375rem;
    font-weight: 700;
    color: var(--grey);
    letter-spacing: 0.0575rem;
    transition: all 0.3s ease-in;

    @media (hover: hover) {
      &:hover {
        color: var(--darkGreyBlue);
      }
    }
  }
  .toggleIcon {
    align-self: center;
  }
`;

const Hamburger = styled.button`
  .toggleIcon {
    align-self: center;
  }
`;

export default function Header() {
  const windowSize = useWindowWidth();

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <HeaderStyles>
      <div className='container'>
        <div className='logoContainer'>
          <Image
            className='logoIcon'
            width={163}
            height={18}
            src={logo}
            alt='logo coffee roasters'
          />
        </div>
        {windowSize.width < 768 ? (
          <div>
            <ModalHambuger onClose={() => setIsOpen(false)} open={isOpen}>
              <ul className='mobileNavList'>
                <li>
                  <Link
                    className='link'
                    href='/'
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className='link'
                    href='/about'
                    onClick={() => setIsOpen(false)}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className='link'
                    href='/subscribe'
                    onClick={() => setIsOpen(false)}
                  >
                    Create Your Plan
                  </Link>
                </li>
              </ul>
            </ModalHambuger>
            <Hamburger onClick={toggleMenu}>
              <Image
                src={isOpen ? closeIcon : hamburgerIcon}
                width={16}
                height={15}
                alt='toggle open/close icon'
              />
            </Hamburger>
          </div>
        ) : (
          <nav className='headerNavigation' role='navigation'>
            <ul className='navigationList'>
              <li>
                <Link className='link' href='/'>
                  HOME
                </Link>
              </li>
              <li>
                <Link className='link' href='/about'>
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link className='link' href='/subscribe'>
                  CREATE YOUR PLAN
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </HeaderStyles>
  );
}
