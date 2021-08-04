import React, { ReactNode, useState } from "react";
import classes from './DragAndDrop.module.css';

const DragAndDrop: React.FC<{ onDrop: (event: React.DragEvent<HTMLElement>) => void, children?: ReactNode }> = (props) => {
  const [isBeingDraggedOver, setIsBeingDraggedOver] = useState(false);

  const dragEnterHandler = (event: React.DragEvent<HTMLElement>) => {
    setIsBeingDraggedOver(true);
    event.preventDefault();
  };

  const dragOverHandler = (event: React.DragEvent<HTMLUListElement>) => {
    setIsBeingDraggedOver(true);
    event.preventDefault();
  };

  const dragLeaveHandler = (event: React.DragEvent<HTMLUListElement>) => {
    setIsBeingDraggedOver(false);
  };

  const dropHandler = (event: React.DragEvent<HTMLUListElement>) => {
    setIsBeingDraggedOver(false);

    // // get the draggable element
    // const id = event.dataTransfer;
    // console.log("Drop", id);

    props.onDrop(event);
    // add it to the drop target
    // event.currentTarget.appendChild(draggable);

    // display the draggable element
    // draggable.classList.remove('hide');
  };

  return (
    <section
      onDragEnter={dragEnterHandler}
      onDragOver={dragOverHandler}
      onDragLeave={dragLeaveHandler}
      onDrop={dropHandler}

      className={`
        ${isBeingDraggedOver && classes['dragged-over']}
      `}
    >
      {!props.children && <div className={classes.empty}></div>}
      {props.children && props.children}
    </section>
  );
};

export default DragAndDrop;
