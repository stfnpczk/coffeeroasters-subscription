import styled from 'styled-components';
import CtaLink from '../shared/CtaLink';
import { sizes } from '../../styling/Globals';
import StepsToSubscribe from '../shared/StepsToSubscribe';

const HowItWorksStyles = styled.div`
  text-align: center;
  margin: 8.75rem 0 0;

  @media (min-width: ${sizes.tablet}) {
    text-align: left;
  }

  @media (min-width: ${sizes.desktop}) {
    margin: 11.875rem auto 0;
    max-width: 69.375rem;
  }

  .headingTwo {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 900;
    color: var(--grey);
    margin: 0 0 5rem;

    @media (min-width: ${sizes.tablet}) {
      margin: 0 0 2.5rem;
    }

    @media (min-width: ${sizes.desktop}) {
      margin: 0 0 5rem;
    }
  }
`;

export default function HowItWorks() {
  return (
    <HowItWorksStyles>
      <h2 className='headingTwo'> How it works</h2>
      <StepsToSubscribe />
      <CtaLink text='Create your plan' link='/subscribe' />
    </HowItWorksStyles>
  );
}
