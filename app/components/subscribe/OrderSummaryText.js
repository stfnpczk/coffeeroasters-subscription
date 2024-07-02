import styled from 'styled-components';

export const OrderSummaryParagraph = styled.p`
  font-family: var(--font-fraunces);
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: ${(props) => props.color || 'var(--white)'};
  font-weight: 700;
`;

export default function OrderSummaryText({ selectedOptions, color }) {
  const isCapsuleSelected = selectedOptions['preference'] === 'Capsules';

  const displaySelectedOption = (key) => {
    return selectedOptions[key] ? (
      selectedOptions[key]
    ) : (
      <>
        <span className='fillHighlight'>_____</span>
      </>
    );
  };
  return (
    <OrderSummaryParagraph color={color}>
      “I drink my coffee {isCapsuleSelected ? 'using' : 'as'}{' '}
      <span className='fillHighlight'>
        {displaySelectedOption('preference')}
      </span>
      {''}, with a{' '}
      <span className='fillHighlight'>{displaySelectedOption('beantype')}</span>{' '}
      type of bean.{' '}
      <span className='fillHighlight'>
        {displaySelectedOption('quantity')} {''}
      </span>
      {!isCapsuleSelected && (
        <>
          ground ala{' '}
          <span className='fillHighlight'>
            {displaySelectedOption('grindOption')}
          </span>
        </>
      )}
      , sent to me{' '}
      <span className='fillHighlight'>
        {displaySelectedOption('deliveries')}
      </span>
      .”
    </OrderSummaryParagraph>
  );
}
