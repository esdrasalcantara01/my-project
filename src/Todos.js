import { memo } from "react";

var Todos = ({ todos }) => {
    console.log("child render");
    return (
        <>
        <h2>My todos</h2>
        {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
        })}
        </>
    );
};
export {Todos}


var Todos1 = ({ todos, addTodo }) => {
    return (
      <>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </>
    );
  };
  export {Todos1};


var Todos2 = ({ todos, addTodo }) => {
    return (
        <>
        <p>My second todos</p>
        {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add second Todo</button>
        </>
    );
};
export default memo (Todos2);



