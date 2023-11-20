import "../src/TodoList.css";


function TodoList(props) {
  return (
    <ul className="todo">
      {/* las props se utilizan para comunicar componentes  */}
      {props.children}
    </ul>
  );
}

export { TodoList };
