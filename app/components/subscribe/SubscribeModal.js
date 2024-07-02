import styled from 'styled-components';
import { sizes } from '../../styling/Globals';

import { useCallback, useEffect, useRef } from 'react';

const ModalStyles = styled.dialog`
  margin: auto 1.5rem;
  border-radius: 0.5rem;

  @media (min-width: ${sizes.tablet}) {
    margin: auto;
    width: 33.75rem;
  }

  &[open] {
    animation: show 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  &.closing {
    animation: hide 450ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  @keyframes show {
    from {
      opacity: 0;
      transform: translateX(-100%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  @keyframes hide {
    from {
      opacity: 1;
      transform: translateX(0%);
    }
    to {
      opacity: 0;
      transform: translateX(-100%);
    }
  }

  &::backdrop {
    backdrop-filter: blur(0.1875rem);
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export default function SubscribeModal({ open, onClose, children }) {
  const modalRef = useRef(null);

  const onClick = useCallback(
    ({ target }) => {
      const { current: el } = modalRef;
      if (target === el) {
        onClose();
      }
    },
    [onClose]
  );

  const onAnimEnd = useCallback(() => {
    const { current: el } = modalRef;
    if (!open) {
      el.close();
    }
  }, [open]);

  useEffect(() => {
    const { current: el } = modalRef;
    if (open) {
      el.showModal();
    }
  }, [open]);

  return (
    <ModalStyles
      ref={modalRef}
      className={`modal ${!open ? 'closing' : ''}`}
      onClose={onClose}
      onClick={onClick}
      onAnimationEnd={onAnimEnd}
    >
      <div className='modalContainer'>{children}</div>
    </ModalStyles>
  );
}
