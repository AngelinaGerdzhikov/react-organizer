import { Task } from "../../models/tasks/task";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import classes from './DeleteTaskPrompt.module.css';

const DeleteTaskPrompt: React.FC<{ taskTitle: string; onHidePrompt: () => void, onDeleteTask: () => void }> = (
  props
) => {
  const onConfirmationClickHandler = () => {
    props.onDeleteTask();
    props.onHidePrompt();
  };

  return (
    <Modal onCloseModal={props.onHidePrompt} className={classes['delete-prompt']}>
      <h4 className={classes.title}>Are you sure you want to delete task: '<span className="bold">{props.taskTitle}</span>?</h4>
      <Button onClick={props.onHidePrompt} default={true}>No</Button>
      <Button onClick={onConfirmationClickHandler} primary={true}>Yes</Button>
    </Modal>
  );
};

export default DeleteTaskPrompt;