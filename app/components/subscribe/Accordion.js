import styled from 'styled-components';
import { sizes } from '../../styling/Globals';
import { useState, useEffect, useRef } from 'react';
import Summary from './Summary';

import {
  preferenceOptions,
  beantypeOptions,
  quantityOptions,
  grindOptions,
  deliveryOptions,
  prices,
} from '../../data/data';

const AccordionStyles = styled.div`
  margin: 7.5rem 0 0;

  .componentContainer {
    display: flex;
    gap: clamp(6.25rem, 8.681vw, 9.375rem);

    @media (min-width: ${sizes.desktop}) {
      padding: 0 clamp(3.75rem, 5.903vw, 6.25rem);
    }
  }
  .navigation {
    display: none;

    @media (min-width: ${sizes.desktop}) {
      display: block;
      min-width: clamp(13.5rem, 17.708vw, 15.9375rem);
      flex: 1 1 25%;
    }
  }

  .navigationList {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .navItem {
    border-bottom: 0.0625rem solid rgba(131, 136, 143, 0.25);
    font-family: var(--font-fraunces);
    font-weight: 700;
    padding: 0 0 1.5rem;
  }

  .index {
    margin: 0 1.5313rem 0 0;
    color: var(--grey);
    font-size: 1.5rem;
    line-height: 2rem;
    opacity: 0.5;

    &.cyan {
      color: var(--darkCyan);
      opacity: 1;
    }

    &.gray {
      color: var(--grey);
      opacity: 0.25;
    }
  }

  .name {
    color: var(--darkGreyBlue);
    font-size: 1.5rem;
    line-height: 2rem;
    opacity: 0.4;
    transition: all 0.3s ease-in;

    &:hover {
      color: var(--grey);
      opacity: 0.85;
    }

    &.bold {
      font-weight: 700;
      color: var(--darkGreyBlue);
      opacity: 1;
    }

    &.gray {
      color: var(--grey);
      opacity: 0.25;
    }
  }

  .accordion {
    display: flex;
    flex-direction: column;
    gap: 3.75rem;

    @media (min-width: ${sizes.tablet}) {
      gap: 6.25rem;
    }
  }

  .questionContainer {
    cursor: pointer;
    display: flex;
    justify-content: space-between;

    font-family: var(--font-fraunces);
    font-size: 1.5rem;
    line-height: 1.75rem;
    color: var(--grey);

    @media (min-width: ${sizes.tablet}) {
      font-size: 2rem;
      line-height: 3rem;
    }
  }

  .question {
    max-width: 15rem;

    @media (min-width: ${sizes.tablet}) {
      max-width: unset;
    }
  }

  .answerContainer {
    display: flex;
    flex-direction: column;
    margin: 2rem 0 0;
    gap: 1rem;

    @media (min-width: ${sizes.tablet}) {
      flex-direction: row;
      gap: 1.302vw;
      margin: 2.5rem 0 0;
    }

    @media (min-width: ${sizes.desktop}) {
      gap: 1.5rem;
    }
  }

  .answer {
    background-color: var(--lightGrey);
    padding: 1.5rem;
    border-radius: 0.5rem;
    transition: all 0.3s ease-in;

    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        background-color: var(--paleOrange);
      }
    }

    @media (min-width: ${sizes.tablet}) {
      padding: 2rem 1.5625rem 5.25rem;
      flex: 1 1 33%;
    }

    &.selected {
      background-color: var(--darkCyan);
      color: white;
    }

    &.selected h3 {
      color: white;
    }

    &.selected p {
      color: white;
    }
  }

  .heading {
    font-size: 1.5rem;
    line-height: 2rem;
    margin: 0 0 0.5rem;

    @media (min-width: ${sizes.tablet}) {
      margin: 0 0 1.5rem;
    }
  }

  .paragraph {
    @media (min-width: ${sizes.tablet}) {
      line-height: 1.625rem;
    }
  }

  .iconContainer {
    align-self: center;
  }

  .arrowIcon {
    transform: rotate(0deg);
    align-self: center;
  }

  details summary::-webkit-details-marker {
    display: none;
  }

  details .arrowIcon {
    transition: transform 0.3s;
  }

  details[open] .arrowIcon {
    transform: rotate(180deg);
  }

  details.disabled .questionContainer {
    cursor: not-allowed;
  }

  details.disabled .question {
    color: rgba(131, 136, 143, 0.4);
  }

  details.disabled svg path {
    fill: rgba(14, 135, 132, 0.4);
  }

  div.answer:last-of-type {
    @media (min-width: ${sizes.tablet}) {
      margin: 0;
    }
  }
`;

export default function Accordion() {
  const [selectedOptions, setSelectedOptions] = useState({
    preference: '',
    beantype: '',
    quantity: '',
    grindOption: '',
    deliveries: '',
  });

  const { preference, beantype, quantity, grindOption, deliveries } =
    selectedOptions;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [name]: value }));
  };

  const handleCapsuleClick = (event) => {
    // Prevent click event if Capsules is selected (details element disabled)
    if (preference === 'Capsules') {
      event.preventDefault();
    }
  };

  const renderOptions = (options, selectedValue, name) =>
    options.map((option) => (
      <label
        key={option.id}
        htmlFor={option.id}
        className={`answer ${selectedValue === option.value ? 'selected' : ''}`}
      >
        <h3 className='heading'>{option.heading}</h3>
        <p className='paragraph'>{option.paragraph}</p>
        <input
          type='radio'
          id={option.id}
          name={name}
          value={option.value}
          checked={selectedValue === option.value}
          onChange={handleChange}
        />
      </label>
    ));

  const renderDeliveryOptions = (options, selectedValue, name) =>
    options.map((option) => (
      <label
        key={option.id}
        htmlFor={option.id}
        className={`answer ${selectedValue === option.value ? 'selected' : ''}`}
      >
        <h3 className='heading'>{option.heading}</h3>
        <p className='paragraph'>
          <span>
            {selectedOptions.quantity
              ? `$${prices[selectedOptions.quantity][option.priceKey].toFixed(
                  2
                )}`
              : '$7.20'}
          </span>{' '}
          per shipment. {option.paragraph}
        </p>
        <input
          type='radio'
          id={option.id}
          name={name}
          value={option.value}
          checked={selectedValue === option.value}
          onChange={handleChange}
        />
      </label>
    ));
  const grindOptionRef = useRef(null);

  useEffect(() => {
    if (preference === 'Capsules' && grindOptionRef.current !== null) {
      grindOptionRef.current.open = false;
    }
  }, [preference]);

  return (
    <AccordionStyles>
      <div className='componentContainer'>
        <nav className='navigation'>
          <ul className='navigationList'>
            <li className='navItem'>
              <a href='#preferences'>
                <span className={`index ${preference ? 'cyan' : ''}`}>01</span>
                <span className={`name ${preference ? 'bold' : ''}`}>
                  Preferences
                </span>
              </a>
            </li>

            <li className='navItem'>
              <a href='#beanType'>
                <span className={`index ${beantype ? 'cyan' : ''}`}>02</span>
                <span className={`name ${beantype ? 'bold' : ''}`}>
                  Bean Type
                </span>
              </a>
            </li>

            <li className='navItem'>
              <a href='#quantity'>
                <span className={`index ${quantity ? 'cyan' : ''}`}>03</span>
                <span className={`name ${quantity ? 'bold' : ''}`}>
                  Quantity
                </span>
              </a>
            </li>

            <li className='navItem grind'>
              <a href='#grindOption'>
                <span
                  className={`index ${
                    selectedOptions['preference'] === 'Capsules'
                      ? 'gray'
                      : grindOption
                      ? 'cyan'
                      : ''
                  }`}
                >
                  04
                </span>
                <span
                  className={`name ${
                    selectedOptions['preference'] === 'Capsules'
                      ? 'gray'
                      : grindOption
                      ? 'bold'
                      : ''
                  }`}
                >
                  Grind Option
                </span>
              </a>
            </li>

            <li className='navItem'>
              <a href='#deliveries'>
                <span className={`index ${deliveries ? 'cyan' : ''}`}>05</span>
                <span className={`name ${deliveries ? 'bold' : ''}`}>
                  Deliveries
                </span>
              </a>
            </li>
          </ul>
        </nav>

        <div className=''>
          <ul className='accordion'>
            <li id='preferences'>
              <details open>
                <summary className='questionContainer'>
                  <span className='question'>
                    How do you drink your coffee?
                  </span>
                  <div className='iconContainer'>
                    <svg
                      className='arrowIcon'
                      width='19'
                      height='13'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z'
                        fill='#0E8784'
                        fillRule='nonzero'
                      />
                    </svg>
                  </div>
                </summary>
                <div className='answerContainer'>
                  {renderOptions(
                    preferenceOptions,
                    selectedOptions.preference,
                    'preference'
                  )}
                </div>
              </details>
            </li>

            <li id='beanType'>
              <details>
                <summary className='questionContainer'>
                  <span className='question'>What type of coffee?</span>
                  <div className='iconContainer'>
                    <svg
                      className='arrowIcon'
                      width='19'
                      height='13'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z'
                        fill='#0E8784'
                        fillRule='nonzero'
                      />
                    </svg>
                  </div>
                </summary>
                <div className='answerContainer'>
                  {renderOptions(
                    beantypeOptions,
                    selectedOptions.beantype,
                    'beantype'
                  )}
                </div>
              </details>
            </li>

            <li id='quantity'>
              <details>
                <summary className='questionContainer'>
                  <span className='question'>How much would you like?</span>
                  <div className='iconContainer'>
                    <svg
                      className='arrowIcon'
                      width='19'
                      height='13'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z'
                        fill='#0E8784'
                        fillRule='nonzero'
                      />
                    </svg>
                  </div>
                </summary>
                <div className='answerContainer'>
                  {renderOptions(
                    quantityOptions,
                    selectedOptions.quantity,
                    'quantity'
                  )}
                </div>
              </details>
            </li>

            <li
              id='grindOption'
              className={`option ${
                selectedOptions.preference === 'Capsules' ? 'disabled' : ''
              }`}
            >
              <details
                className={preference === 'Capsules' ? 'disabled' : ''}
                ref={grindOptionRef}
                onClick={handleCapsuleClick}
              >
                <summary className='questionContainer'>
                  <span className='question'>Want us to grind them?</span>
                  <div className='iconContainer'>
                    <svg
                      className='arrowIcon'
                      width='19'
                      height='13'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z'
                        fill='#0E8784'
                        fillRule='nonzero'
                      />
                    </svg>
                  </div>
                </summary>
                <div className='answerContainer'>
                  {renderOptions(
                    grindOptions,
                    selectedOptions.grindOption,
                    'grindOption'
                  )}
                </div>
              </details>
            </li>

            <li id='deliveries'>
              <details>
                <summary className='questionContainer'>
                  <span className='question'>How often should we deliver?</span>
                  <div className='iconContainer'>
                    <svg
                      className='arrowIcon'
                      width='19'
                      height='13'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z'
                        fill='#0E8784'
                        fillRule='nonzero'
                      />
                    </svg>
                  </div>
                </summary>
                <div className='answerContainer'>
                  {renderDeliveryOptions(
                    deliveryOptions,
                    selectedOptions.deliveries,
                    'deliveries'
                  )}
                </div>
              </details>
            </li>
          </ul>

          <Summary selectedOptions={selectedOptions} prices={prices} />
        </div>
      </div>
    </AccordionStyles>
  );
}
