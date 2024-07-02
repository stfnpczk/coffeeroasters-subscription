import styled from 'styled-components';
import { sizes } from '../../styling/Globals';

export const StepStyles = styled.div`
  .itemList {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    margin: 0 0 4.9375rem;

    @media (min-width: ${sizes.tablet}) {
      flex-direction: row;
      margin: 0 0 2.75rem;
    }

    @media (min-width: ${sizes.desktop}) {
      gap: 5.875rem;
      margin: 0 0 4.3125rem;
    }
  }

  .line {
    display: none;

    @media (min-width: ${sizes.tablet}) {
      display: block;
      width: calc(69% + 2rem);
      transform: translateY(1.0625rem) translateX(1rem);
      border: solid 0.0625rem var(--paleOrange);
    }
    @media (min-width: ${sizes.desktop}) {
      width: calc(69% + 3.5rem);
    }
  }

  .circle {
    @media (min-width: ${sizes.tablet}) {
      position: relative;
      width: 1.9375rem;
      height: 1.9375rem;
      border-radius: 50%;
      background-color: var(--lightCream);
      border: 0.125rem solid var(--darkCyan);
      z-index: 1;
    }
  }

  .stepNumber {
    font-family: var(--font-fraunces);
    font-size: 4.5rem;
    font-weight: 900;
    color: var(--paleOrange);

    @media (min-width: ${sizes.tablet}) {
      display: block;
      margin: 2.5rem 0 0;
    }

    @media (min-width: ${sizes.desktop}) {
      margin: 4.1875rem 0 0;
    }
  }

  .headingThree {
    font-size: 1.75rem;
    line-height: 2rem;
    margin: 1rem 0 1.5rem;

    @media (min-width: ${sizes.tablet}) {
      max-width: 14.125rem;
    }

    @media (min-width: ${sizes.desktop}) {
      font-size: 2rem;
      line-height: 2rem;
      max-width: 15.9375rem;
      margin: 2.375rem 0 2.625rem;
    }
  }
`;

export default function StepsToSubscribe() {
  return (
    <StepStyles>
      <hr className='line' />
      <ol className='itemList'>
        <li>
          <div className='circle'> </div>
          <span className='stepNumber'> 01</span>
          <h3 className='headingThree'>Pick your coffee</h3>
          <p className='paragraph'>
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </li>
        <li>
          <div className='circle'> </div>
          <span className='stepNumber'> 02</span>
          <h3 className='headingThree'>Choose the frequency</h3>
          <p className='paragraph'>
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </li>
        <li>
          <div className='circle'> </div>
          <span className='stepNumber'> 03</span>
          <h3 className='headingThree'>Receive and enjoy!</h3>
          <p className='paragraph'>
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </p>
        </li>
      </ol>
    </StepStyles>
  );
}
