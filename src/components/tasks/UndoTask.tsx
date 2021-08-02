import Button from "../UI/Button";
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { useAppDispatch } from "../../hooks/store-hooks";

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
    <aside>
      <h5>A task has been deleted. Do you want to undo it?</h5>
      <Button onClick={props.onDoNotUndo} default={true} >No</Button>
      <Button onClick={undoHandler} primary={true} >No</Button>
    </aside>
  )
}

export default UndoTask;
