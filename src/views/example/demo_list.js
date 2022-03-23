import React from 'react';


function Player(props) {
  return <li>Player :  { props.name }</li>;
}
function List() {
  const lists = [
    {id: 1, name: 'John'},
    {id: 2, name: 'David'},
    {id: 3, name: 'Tom'}
  ];
  return (
    <>
	    <h3>List best Player</h3>
        {lists.map((list) => <Player key={list.id} name={list.name} />)}
    </>
  );
}
 export default List