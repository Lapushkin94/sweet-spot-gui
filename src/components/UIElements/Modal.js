import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

import Backdrop from './Backdrop';
import './Modal.css';

const ModalOverlay = ({ nodeRef, ...props }) => {
  const content = (
    <div ref={nodeRef} className={`modal ${props.className}`} style={props.style}>
      <header className={`modal-header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : event => event.preventDefault()
        }
      >
        <div className={`modal-content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal-footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = props => {
  const nodeRef = useRef(null);
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
        nodeRef={nodeRef}
      >
        <ModalOverlay nodeRef={nodeRef} {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
