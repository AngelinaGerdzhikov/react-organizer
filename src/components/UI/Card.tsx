import React, { ReactNode } from "react";
import classes from "./Card.module.css";

const Card: React.FC<{ children: ReactNode; className?: string }> = (props) => {
  return (
    <div className={`${props.className} ${classes.card}`}>{props.children}</div>
  );
};

export default Card;
