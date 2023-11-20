import './TodoSearch.css'
import React from 'react';


function TodoSearch({searchValue, setSearchValue}) {
  // vammos a trabajar con estados
  // const [searchValue, setSearchValue] = React.useState('');
  // console.log('el usuario esta buscando un todo' + searchValue + '')
  return (
    <div>
      <input
        className="todo-search-tittle"
        value={searchValue}
        placeholder="Buscar"
        onChange={(event) => {
          setSearchValue(event.target.value);
          // console.log('Estas buscando un Todo')
          // console.log(event)
          // console.log(event.target)
          // console.log(event.target.value)
        }}
      ></input>
    </div>
  );
}

export { TodoSearch };
