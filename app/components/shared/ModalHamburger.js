import styled from 'styled-components';

import { useCallback, useEffect, useRef } from 'react';

const ModalStyles = styled.dialog`
  position: relative;
  border-width: 0;

  margin: 5.9375rem 0 0;
  background: linear-gradient(
    360deg,
    rgba(254, 252, 247, 0.5) 0%,
    var(--lightCream) 70%
  );

  .modalContainer {
    width: 100vw;
    height: 100vh;
  }

  &[open] {
    animation: show 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  &.closing {
    animation: hide 450ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  &::backdrop {
    background: transparent;
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
      transform: translate(0%);
    }
    to {
      opacity: 0;
      transform: translateX(-100%);
    }
  }
`;

export default function Modal({ open, onClose, children }) {
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
