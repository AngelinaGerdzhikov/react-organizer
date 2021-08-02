import Button from './Button';
import classes from './Button.module.css';

const DeleteButton:React.FC<{ onClick: () => void}> = (props) => {
  return (
    <Button
        className={classes["button-delete"]}
        onClick={props.onClick}
      >
        X
      </Button>
  );
}

export default DeleteButton;