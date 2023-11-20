import './TodoCounter.css'

// las propiedades se envia dentro de las llaves esta es una forma y va dentro de los parentecis del componente 
// la otra por es la que esta entre las comillas por cierto nota se escriben sin comillas 
// function TodoCounter("props") {
  // props.cualquierCosa
  function TodoCounter({total, completed}) {

  return (
    <h1 className="text">
      Has completado <span> {completed} </span> de <span> {total}</span> Todos
    </h1>
  );
}

export { TodoCounter };
