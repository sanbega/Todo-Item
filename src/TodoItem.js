import "./TodoItem.css";
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";


function TodoItem(props) {
  const handleDelete = () => {
    props.onDelete(props.id);
  };
  return (
    <li className="TodoItem">
      <CompleteIcon complete={props.completed} onComplete={props.onComplete} />
      {/* <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        V
      </span> */}
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon handleDelete={handleDelete} />
      {/* <span className="Icon Icon-delete" >
        X
      </span> */}
    </li>
  );
}


export { TodoItem }