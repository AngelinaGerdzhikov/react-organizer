import React, { ReactNode, useState } from "react";
import classes from "./DragAndDrop.module.css";

const Draggable: React.FC<{
  children: ReactNode;
  transferData: any,
  onDragStart?: (event: React.DragEvent<HTMLElement>) => void;
  onDragEnd?: (event: React.DragEvent<HTMLElement>) => void;
}> = (props) => {
  const [isBeingDragged, setIsBeingDragged] = useState(false);

  const dragStartHandler = (event: React.DragEvent<HTMLElement>, dataTransfer: any) => {
    event.dataTransfer.setData('transferData', JSON.stringify(dataTransfer));
    setTimeout(() => {
      setIsBeingDragged(true);
    }, 0);
    console.log("Drag start");
    if (props.onDragStart) props.onDragStart(event);
  };
  
  const dragEndHandler = (event: React.DragEvent<HTMLElement>, dataTransfer: any) => {
    event.dataTransfer.setData('transferData', JSON.stringify(dataTransfer));
    setIsBeingDragged(false);
    if (props.onDragEnd) props.onDragEnd(event);
    // add it to the drop target
    // event.currentTarget.appendChild(draggable);

    // display the draggable element
    // draggable.classList.remove('hide');
  };

  return (
    <section
      draggable
      onDragStart={(e) => dragStartHandler(e, props.transferData)}
      onDragEnd={(e) => dragEndHandler(e, props.transferData)}
      className={`${isBeingDragged && classes.dragged}`}
    >
      {props.children}
    </section>
  );
};

export default Draggable;
