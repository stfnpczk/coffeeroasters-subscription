import { StepStyles } from '../shared/StepsToSubscribe';
import styled from 'styled-components';
import { sizes } from '../../styling/Globals';

const StepsDark = styled(StepStyles)`
  background-color: var(--darkGrey);
  text-align: center;
  padding: 5rem 1.5rem;
  border-radius: 0.625rem;

  @media (min-width: ${sizes.tablet}) {
    text-align: left;
    padding: 6.0625rem 2.5rem 4.375rem;

    @media (min-width: ${sizes.desktop}) {
      padding: 6.0625rem clamp(5.3125rem, 5.903vw, 6.25rem) 4.3125rem;
    }
  }

  .circle {
    background-color: transparent;
  }

  .headingThree {
    color: var(--white);
  }

  .paragraph {
    color: var(--white);
  }
`;
export default function StepsToSubscribeDark() {
  return (
    <StepsDark>
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
    </StepsDark>
  );
}
