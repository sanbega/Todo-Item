import "./CreateTodo.css";

function CreateTodo(props) {
  return (
    <button className="botton-create" 
    onClick={
      (event) => {
      console.log("Estas intentando crear un Todo")
      console.log(event) 
      console.log(event.target)
      }
    }>
      +
    </button>
  );
}

export { CreateTodo };
