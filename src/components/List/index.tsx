import { ITask } from "../../types/task";
import Item from "./Item";
import style from "./List.module.scss";

interface Props {
  tasks: ITask[];
  selectedTask: (selectedTask: ITask) => void;
}

function List({ tasks, selectedTask }: Props) {
  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item) => (
          <Item selectedTask={selectedTask} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
