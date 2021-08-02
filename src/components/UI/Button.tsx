import classes from "./Button.module.css";

interface FuncProps {
  children: any;
  onClick(): void;
  className?: string;
  primary?: boolean;
  default?: boolean;
}

const Button: React.FC<FuncProps> = (props) => {
  return (
    <button
      className={`
        ${props.className}
        ${props.primary && `${classes['button']} ${classes['button-primary']}`}
        ${props.default && `${classes['button']}`}
      `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
