import TaskStatus from "./TaskStatus";
import { TaskStatus as TaskStatusEnum } from '../../models/tasks/task-status.enum';

const Task = () => {
  return (
    <section>
      <h5>Task</h5>
      <TaskStatus status={TaskStatusEnum.TO_DO}/>
    </section>
  );
}

export default Task;