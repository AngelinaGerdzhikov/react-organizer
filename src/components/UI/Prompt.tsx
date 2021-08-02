import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import DeleteButton from "./DeleteButton";
import classes from "./Prompt.module.css";

const Prompt: React.FC<{
  children: ReactNode;
  onClose: () => void;
  className?: string;
}> = (props) => {
  const promptContainer = document.getElementById("prompt-container");

  return (
    <React.Fragment>
      {promptContainer &&
        ReactDOM.createPortal(
          <Card className={` ${classes.prompt} ${props.className}`}>
            <DeleteButton onClick={props.onClose} />
            <div className={classes.content}>{props.children}</div>
          </Card>,
          promptContainer
        )}
    </React.Fragment>
  );
};

export default Prompt;
