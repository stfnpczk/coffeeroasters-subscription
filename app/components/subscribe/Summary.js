'use client';
import styled from 'styled-components';
import { sizes } from '../../styling/Globals';
import SubscribeModal from './SubscribeModal';
import { useState } from 'react';
import { useWindowWidth } from '@/app/hooks/useWindowWidth';
import OrderSummaryText from './OrderSummaryText';
// import { useRouter } from 'next/navigation';

const SummaryStyles = styled.div`
  margin: 5rem 0 0;

  @media (min-width: ${sizes.tablet}) {
    margin: 9rem 0 0;

    @media (min-width: ${sizes.desktop}) {
      margin: 5.5rem 0 0;
    }
  }

  .container {
    background-color: var(--darkGrey);
    padding: 2rem 1.5rem;
    border-radius: 0.625rem;
    margin: 0 0 4.5rem;

    @media (min-width: ${sizes.tablet}) {
      padding: 1.6875rem 2.75rem;
    }
  }

  .heading {
    font-family: var(--font-barlow);
    font-size: 1rem;
    line-height: 1.625rem;
    color: var(--white);
    opacity: 0.5;
    margin: 0 0 0.5rem;
  }

  .fillHighlight {
    color: var(--darkCyan);
    line-height: 1.67;
    font-size: 1.5rem;
  }

  .linkContainer {
    display: flex;
    justify-content: center;

    @media (min-width: ${sizes.desktop}) {
      justify-content: right;
    }
  }

  .subscribePlan {
    display: flex;
    background-color: var(--darkCyan);
    color: var(--lightCream);
    padding: 1.0313rem 1.9375rem;
    border-radius: 0.375rem;
    font-family: var(--font-fraunces);
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.5625rem;
    cursor: pointer;
    transition: background-color 0.3s ease-in;

    @media (min-width: ${sizes.tablet}) {
      margin-left: auto;
    }

    &:hover {
      background-color: var(--buttonHover);
    }
  }
  .subscribePlan:disabled {
    color: var(--lightCream);
    background-color: var(--buttonDisabled);
    padding: 1.0313rem 2.125rem;
    border-radius: 0.375rem;
    font-family: var(--font-fraunces);
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.5625rem;
  }

  .subscribePlan:disabled:hover {
    background-color: var(--buttonDisabled);
    cursor: not-allowed;
  }

  .headingContainer {
    padding: 1.75rem 1.5rem;
    background-color: var(--darkGreyBlue);

    @media (min-width: ${sizes.tablet}) {
      padding: 3rem 3.5rem 2.5rem;
    }
  }

  .headingSubscribe {
    color: var(--white);
    font-size: 1.75rem;
    line-height: 2rem;

    @media (min-width: ${sizes.tablet}) {
      font-size: 2.5rem;
      line-height: 3rem;
    }
  }

  .textContainer {
    padding: 2.5rem 1.5rem 1.5rem;

    @media (min-width: ${sizes.tablet}) {
      padding: 3.5rem;
    }
  }

  .paragraphCheckoutTwo {
    margin: 0.125rem 0 1.5rem;

    @media (min-width: ${sizes.tablet}) {
      margin: 0.4375rem 0 2.9375rem;
    }
  }

  .checkoutContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .pricePerMonthSubscribe {
    font-family: var(--font-fraunces);
    font-size: 2rem;
    line-height: 2.25rem;
    color: var(--darkGreyBlue);
    font-weight: 700;
  }
`;

export default function Summary({ selectedOptions, prices }) {
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);
  const windowSize = useWindowWidth();

  const areAllOptionsSelected = () => {
    if (selectedOptions.preference === 'Capsules') {
      // Replace grindOption with 'placeholder' temporarily
      return !Object.values({
        ...selectedOptions,
        grindOption: 'placeholder',
      }).some((option) => !option);
    } else {
      return !Object.values(selectedOptions).some((option) => !option);
    }
  };

  const calculateTotalPrice = () => {
    const { quantity, deliveries } = selectedOptions;

    if (
      !quantity ||
      !deliveries ||
      !prices[quantity] ||
      !prices[quantity][deliveries]
    ) {
      return 0;
    }

    let price = parseFloat(prices[quantity][deliveries]);

    switch (deliveries) {
      case 'Every week':
        price *= 4;
        break;
      case 'Every 2 weeks':
        price *= 2;
        break;
      case 'Every month':
        price *= 1;
        break;
      default:
        break;
    }

    return price.toFixed(2);
  };

  return (
    <SummaryStyles>
      <div className='container'>
        <h3 className='heading'> ORDER SUMMARY</h3>

        <OrderSummaryText selectedOptions={selectedOptions} />
      </div>

      <button
        className='subscribePlan'
        type='button'
        disabled={!areAllOptionsSelected()}
        onClick={() => setIsSubscribeModalOpen(true)}
      >
        Create my plan!
      </button>

      <SubscribeModal
        open={isSubscribeModalOpen}
        onClose={() => setIsSubscribeModalOpen(false)}
      >
        <div className='headingContainer'>
          <h3 className='headingSubscribe'>Order Summary</h3>
        </div>
        <div className='textContainer'>
          <OrderSummaryText
            selectedOptions={selectedOptions}
            color='var(--grey)'
          />

          <p className='paragraphCheckoutTwo'>
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.{' '}
          </p>

          {windowSize.width < 768 ? (
            <button
              className='subscribePlan'
              type='button'
              onClick={() => {
                setIsSubscribeModalOpen(false);

                setTimeout(() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }, 700);
              }}
            >
              Checkout - ${calculateTotalPrice()} / mo
            </button>
          ) : (
            <div className='checkoutContainer'>
              <span className='pricePerMonthSubscribe'>
                ${calculateTotalPrice()} / mo
              </span>

              <button
                className='subscribePlan'
                type='button'
                onClick={() => {
                  setIsSubscribeModalOpen(false);

                  setTimeout(() => {
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    });
                  }, 700);
                }}
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </SubscribeModal>
    </SummaryStyles>
  );
}
