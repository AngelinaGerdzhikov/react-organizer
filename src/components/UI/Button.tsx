import classes from "./Button.module.css";

interface FuncProps {
  children: any;
  onClick(): void;
  className?: string;
}

const Button: React.FC<FuncProps> = (props) => {
  return (
    <button
      className={`${classes.button} ${props.className && props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
