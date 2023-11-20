// import logo from './platzi.webp';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from "./TodoSearch";
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodo } from './CreateTodo';
// import './App.css';

// const defaultTodos = [
//   { text: "Empezar con el curso de React", completed: true, id: 1 },
//   { text: "Culminar la mitad del curso React", completed: false, id: 2 },
//   { text: "Terminar el curso de React", completed: false, id: 3 },
//   { text: "camibar el mensaje cuando se completen todo los todos", completed: false, id: 4 },
// ];
// localStorage.setItem("Todos_V1", JSON.stringify(defaultTodos));
// localStorage.removeItem("Todos_V1")
// JSON.stringify() esto es para convertir todo en String ya que solo se puede guardar la informacion en String en localStorage
// <div className="App"> Nota : React solo puede renderisar un elemento o compenete por lo cual se le puede colocar el // <div className="App"> o tambien a herramienta de React que es //<React.Fragment> no olvides inporta React por poder utilizar la herramienta
// truco tambien se puede usar las llaves solas y no es necesario importar React "<></>"
// esto es un Custom Hooks
function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem("itemName");
  let parsedItem;
  if (!localStorageItem) {
    localStorage.setItem("itemName", JSON.stringify(initialValue));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  const [item, setItem] = React.useState(parsedItem);
  const saveItem = (newItem) => {
    localStorage.setItem("itemName", JSON.stringify(newItem));
    setItem(newItem);
  };
  return [item ,saveItem];
}
function App() {
  
  // let parsedTodos = JSON.parse(localStorageTodos);
  //aca vamos a compartir el estado del contenedor padre al contenedor hijo
  // const [todos, setTodos] = React.useState(defaultTodos);
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState("");
  // console.log("el usuario esta buscando un todo" + searchValue + "");
  // esto es un estado deribado 
  const completedTodos = todos.filter(todo =>  !!todo.completed).length;
  const totalTodos = todos.filter(todos => !!todos.text).length;
  // const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => { return todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase())})
  const handleDeleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    // setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };
  
  const completeTodo = (text) => {
    // const completeTodo = (todoId) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex((todo) => todo.text === text);
      // const todoIndex = newTodos.filter((todo) => todo.id === todoId);
      newTodos[todoIndex].completed = true;
      // setTodos(newTodos);
      saveTodos(newTodos);
    };
  return (
    // esto no es html es jsx
    <>
      {/* estoy incertando un componente en otro */}
      {/* El completed es una propiedad o props como lo es total  */}
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onDelete={handleDeleteTodo}
            onComplete={() => completeTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodo />
    </>
  );
}

export default App;
