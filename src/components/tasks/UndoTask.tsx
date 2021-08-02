import Button from "../UI/Button";
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { useAppDispatch } from "../../hooks/store-hooks";
import Prompt from '../UI/Prompt';

interface UndoTaskProps {
  onDoNotUndo: () => void,
  onUndo: () => void
}
const UndoTask:React.FC<UndoTaskProps> = (props) => {
  const dispatch = useAppDispatch();

  const undoHandler = () => {
    dispatch(UndoActionCreators.undo());
    props.onUndo();
  }

  return (
    <Prompt onClose={props.onDoNotUndo}>
      <aside>
        <h5>A task has been deleted. Do you want to undo it?</h5>
        <Button onClick={props.onDoNotUndo} default={true}>No</Button>
        <Button onClick={undoHandler} primary={true}>Yes</Button>
      </aside>
    </Prompt>
  )
}

export default UndoTask;
