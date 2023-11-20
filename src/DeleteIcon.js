import React from "react";
import { TodoIcon } from "./TodoIcon";


function DeleteIcon({ handleDelete }) {
  return <TodoIcon type="delete" color="gray" onClick={handleDelete} />;
}

export { DeleteIcon };
