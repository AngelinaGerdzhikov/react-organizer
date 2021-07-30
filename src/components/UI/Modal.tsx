import { Fragment, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import classes from './Modal.module.css';

const Backdrop: React.FC<{ onCloseModal: () => void }> = (props) => {
  const closeModalHandler = () => {
    props.onCloseModal();
  }

  return <div className={classes.backdrop} onClick={closeModalHandler}></div>
}

const ModalContent:React.FC<{ children: ReactNode, className: string }> = (props) => {
  return (
    <Card className={` ${classes.modal} ${props.className}`}>
      <div className={classes.content}>
        {props.children}
      </div>
    </Card>
  )
}

const Modal:React.FC<{ onCloseModal: () => void, children: ReactNode, className: string }> = (props) => {
  const overlayContainer = document.getElementById("overlay");

  return (
    <Fragment>
      {overlayContainer &&
        ReactDOM.createPortal(
          <Backdrop onCloseModal={props.onCloseModal} />, overlayContainer
        )
      }      
      {overlayContainer &&
        ReactDOM.createPortal(
          <ModalContent className={props.className}>{props.children}</ModalContent>, overlayContainer
        )
      }      
    </Fragment>
  )
}

export default Modal;