import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

export const CtaStyles = styled.div`
  .cta {
    color: var(--lightCream);
    background-color: var(--darkCyan);
    padding: 1.0313rem 2.125rem;
    border-radius: 0.375rem;
    font-family: var(--font-fraunces);
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.5625rem;
    transition: all 0.3s ease-in;
  }

  &:hover {
    .cta {
      background-color: var(--buttonHover);
    }
  }
`;

export default function CtaLink({ text, link }) {
  return (
    <CtaStyles>
      <Link className='cta' href={link} passHref={true}>
        {text}
      </Link>
    </CtaStyles>
  );
}
