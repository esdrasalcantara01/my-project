import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Carro from './Filetostudy';
import {Alertar} from './Filetostudy';
import { Alertar2 } from './Filetostudy';
import { Musica1 } from './Filetostudy';
import { Musica2 } from './Filetostudy';
import { useState, createContext, useContext, useRef, useMemo } from 'react'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Todos from "./Todos"
import "./App2.css"; 
import { Frasecss, useFetch } from './Filetostudy';
import "./my-sass.scss";

var elemento_de_teste = <p>ola se voce esta me vendo</p>
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(elemento_de_teste);

var test = <p>eu sou a prova desse teste, continue olhando para mim enquanto eu mudo</p>
var test2 = <p>5 + 5 is {5 + 5}</p>
var test3 = 
<div>
  <div>
<p>posso escrever varias coisas por aqui</p>
<p>posso escrever varios paragrafos</p>
<ul>
  <li>apples</li>
  <li>bananas</li>
  <li>cerveja</li>
</ul>
</div> 

<>
<p>paragrafo de teste</p>
</>

<input type="text" />
<p className="firstClass">ola meu chapa!</p>

</div>

var rua = ReactDOM.createRoot(document.getElementById("rua"));
rua.render(test);
rua.render(test2);
rua.render(test3);


var x = 11;
var aux = "goodbye";
if (x == 10){
  aux = "hello";
}
else aux = "hi bro!"
var test4 = <p>{aux}</p>

var rua2 = ReactDOM.createRoot(document.getElementById("rua2"));
rua2.render(test4); 

function Test2(){
  return <p>estudando componentes de funcao react</p> 
}
var rua3 = ReactDOM.createRoot(document.getElementById("rua3"));
rua3.render(<Test2 />);


function Test_2(props){
  return <p>a banana e {props.color}</p>
}
var rua4 = ReactDOM.createRoot(document.getElementById("rua4"));
rua4.render(<Test_2 color="green"/>);

class Test extends React.Component {
  render(){
    return <p>estudando componentes de classe react</p>;
  }
}

function AboutTest2(){
  var cor = "vermelho";
  return (
    <>
    <Test2/>
    <p>muito interessante ate agora</p>
    <Carro modelo="mustang" cor={cor} />
    <Alertar2 />
    </> 
  );
}
var rua5 = ReactDOM.createRoot(document.getElementById("rua5"));
rua5.render(<AboutTest2/>);

var rua6 = ReactDOM.createRoot(document.getElementById("rua6"));
rua6.render(<Alertar />);

function Escutar(props) {
  var ouvir = props.ouvir;
  if(ouvir) {
    return <Musica1 />;
  
    {return <Musica2 />;}
}

  var ouvir = props.ouvir;
  return (
    <>
    { ouvir ? <Musica1 /> : <Musica2 /> }
    </>
  )  
}

var rua7 = ReactDOM.createRoot(document.getElementById("rua7"));
rua7.render(<Escutar ouvir={true} />);

function Garage(props) {
  var cars = props.cars;
  return (
    <>
    <p>Garagem</p>
    {cars.length > 0 &&
    <p>
      voce tem {cars.length} carros na sua Garagem
    </p>
    }
    </>
  );
}

var cars = ['ford', 'mustang', 'bmw', 'renault'];
var rua8 = ReactDOM.createRoot(document.getElementById("rua8"));
rua8.render(<Garage cars={cars} />);

function Carro2(props){
  return <li>eu sou um {props.modelo}</li>
}
function Garagem(){
  var carros = [
    {id: 1, modelo: 'fiat'},
    {id: 2, modelo: 'chevrolet'}, 
    {id: 3, modelo: 'wolkswagen'}
  ];
  return (
    <>
    <p>quais sao os carros que estao na minha Garagem?</p>
    <ul>
      {carros.map((carro) => <Carro2 key={carro.id} modelo={carro.modelo} />)}
    </ul>
    </>
  );
}
var rua9 = ReactDOM.createRoot(document.getElementById("rua9"))
rua9.render(<Garagem />);

function Formulario(){
  return (
    <form>
      <label>Digite seu nome :
        <input type="text" />
      </label>
    </form>
  )
}
var rua10 = ReactDOM.createRoot(document.getElementById("rua10"));
rua10.render(<Formulario />);


function Formulario2(){
  var [nome, enviarnome] = useState("");
return (
  <form>
    <label>Digite seu nome: 
     <input
     type="text"
     value={nome}
     onChange={(e) => enviarnome(e.target.value)}
     />
    </label>
  </form>
)
}
var rua11 = ReactDOM.createRoot(document.getElementById("rua11"))
rua11.render(<Formulario2 />);

function Formulario3(){
  var [nome, enviarnome] = useState("");

  var handleChange = (event) => {
    event.preventDefault();
    alert(`o nome que voce enviou e: ${nome}`)
  }
  return (
    <form onSubmit={handleChange}>
      <label>Digite o seu nome:
        <input 
        type="text"
        value={nome}
        onChange={(e) => enviarnome(e.target.value)}
        />
      </label>
      <input type='submit' />
    </form>
  )
}
var rua12 = ReactDOM.createRoot(document.getElementById("rua12"))
rua12.render(<Formulario3 />);

function Formularioduplo(){
  var [inputs, setInputs] = useState({});

  var handleChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    setInputs(valores => ({...valores, [name]: value}))
  }

  var handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>digite seu nome:
        <input 
        type="text"
        name="username"
        value={inputs.username || ""}
        onChange={handleChange}
        />
      </label>
      
      <label>digite sua idade:
       <input 
         type="number"
         name="age"
         value={inputs.age || ""}
         onChange={handleChange}
         />
      </label>
      <input type='submit' />
    </form>
  )
}
var rua13 = ReactDOM.createRoot(document.getElementById("rua13"))
rua13.render(<Formularioduplo />);

function Textarea(){
  var [textarea, setTextarea] = useState(
    "o contexto da area de texto vai para o atribito value"
  );

  var handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  )
}
var rua14 = ReactDOM.createRoot(document.getElementById("rua14"))
rua14.render(<Textarea />);

function Selectbox(){
  var [myCar, setMyCar] = useState("volvo");
  var handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}
var rua15 = ReactDOM.createRoot(document.getElementById("rua15"))
rua15.render(<Selectbox />);

export default function App(){
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NoPage />} />
      </Route>
     </Routes>
    </BrowserRouter>
  );
}
var rua16 = ReactDOM.createRoot(document.getElementById("rua16"));
rua16.render(<App />);


var Api = () => {
  var [count, setCount] = useState(0);
  var [todos, setTodos] = useState(["todo 1, todo 2"]);

  var increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
    <Todos todos={todos} />
    <hr />
    <div>
      count: {count}
      <button onClick={increment}>+</button>
    </div>
    </>
  );
};
var rua17 = ReactDOM.createRoot(document.getElementById("rua17"));
rua17.render(<Api />)

var Header = () => {
  return (
    <>
    <p style={{color: "blue"}}>ola! eu sou um paragrafo azul</p>
    </>
  );
}
var rua18 = ReactDOM.createRoot(document.getElementById("rua18"));
rua18.render(<Header />)

var Paragrafo = () => {
  var Mystyle = {
    color: "orange",
    backgroundColor: "black",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
    <p style={Mystyle}>ola, eu sou um paragrafo editado!</p>
    </>
  )
}
var rua19 = ReactDOM.createRoot(document.getElementById("rua19"))
rua19.render(<Paragrafo />)

var rua20 = ReactDOM.createRoot(document.getElementById("rua20"))
rua20.render(<Frasecss />)

var Paragrafoedit = () => {
  return <p class="scss">paragrafo scss</p>
}
rua20.render(<Paragrafoedit/>)

function FavoriteColor(){
  var [color, setColor] = useState("");

  return (
    <>
    <p> minha cor favorita e {color}!</p>
    <button type='button'
    onClick={() => setColor("blue")}>blue</button>
    <button type='button'
    onClick={() => setColor("red")}>red</button>
    <button type='button'
    onClick={() => setColor("green")}>green</button>
    <button type='button'
    onClick={() => setColor("pink")}>pink</button>
    <button type='button' 
    onClick={() => setColor("")}>no one</button>
    </>
  )
}
rua20.render(<FavoriteColor/>)

/* o meu jeito */
function Hooks(){
  var [pessoa, caracteristica] = useState({
    nome: "Rodrigo",
    idade: 15,
    genero: "masculino",
    gosto: "tocar guitarra, violao, teclado e ler a biblia"
  })

  return (
    <>
    <p>ola, meu nome e {pessoa.nome}, eu tenho {pessoa.idade} anos, meu genero e {pessoa.genero} e eu gosto de {pessoa.gosto} </p>
    <button type='button' onClick={() => caracteristica({
      nome: "Vanessa",
      idade: 15, 
      genero: "feminino",
      gosto: "tocar bateria e ler a biblia"
  })}>change</button>
    </>
  )
}
var rua20 = ReactDOM.createRoot(document.getElementById("rua21"))
rua20.render(<Hooks/>)

/* o jeito do w3 */
function Hooks2(){
  var [pessoa, caracteristica] = useState({
    nome: "Aghata",
    idade: 18,
    genero: "feminino",
    gostos: "andar de bicicleta e ler livros"
  })
 
  var atualizar = () => {
    caracteristica(previousState => {
      return { ...previousState, nome: "Beatriz" }
    });
  }
  return (
    <>
    <p>ola! meu nome e {pessoa.nome}, eu tenho {pessoa.idade} anos, meu genero e {pessoa.genero} e eu gosto de {pessoa.gostos}</p>
    <button 
    type='button'
    onClick={atualizar}>mudar</button>

    </>
  )
}
var rua20 = ReactDOM.createRoot(document.getElementById("rua22"))
rua20.render(<Hooks2/>)

var Time = () =>{
  var [time, changetime] = useState(0)
  
  useEffect(() => {
    setTimeout(() => {
      changetime(() => time + 1);
      }, 1000);
  });

  return <p>eu estou renderizando {time} vezes!</p>
}
var rua20 = ReactDOM.createRoot(document.getElementById("rua23"))
rua20.render(<Time />)

var Timefrozen = () => {
  var [time, timefrozen] = useState(0)
  
  useEffect(() => {
    setTimeout(() => {
      timefrozen(() => time + 1);
    }, 1000);
  }, [])

  return <p>eu estou renderizando {time} vezes!</p>
}
var rua20 = ReactDOM.createRoot(document.getElementById("rua24"))
rua20.render(<Timefrozen />)

function Counter() {
  var [count, setCount] = useState(0);
  var [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

return (
  <>
   <p>conta: {count}</p>
   <button onClick={() => setCount((c) => c + 1)}>+</button>
   <p>calculation: {calculation}</p>
  </>
 );
}
var rua20 = ReactDOM.createRoot(document.getElementById("rua25"))
rua20.render(<Counter />)

function Counter2() {
  var [count, setCount] = useState(0);
  var [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(() => count + 1);
  }, 1000)
})

useEffect(() => {
  setTimeout(() => {
    setCalculation(() => count * 2)
  }, 100);
})
 
return (
  <>
  <p>conta: {count}</p>
   <p>conta: {calculation}</p>
  </>
)
}
var rua20 = ReactDOM.createRoot(document.getElementById("rua26"))
rua20.render(<Counter2 />)

function Cleartime(){
  var [time1, updatetime] = useState(0);

  useEffect(() => {
    var bye = setTimeout(() => {
      updatetime((time1) => time1 + 1)
    }, 1000);

    return () => clearTimeout(bye)
  }, []);

return (
  <>
  <p>{time1}</p>
  </>
)
}
var rua20 = ReactDOM.createRoot(document.getElementById("rua27"))
rua20.render(<Cleartime />) 

/* sem contexto */
function _Component1(){
  var [user, setUser] = useState("Esdras Alcantara");

  return (
    <>
    <hr/>
    <p>{`hello ${user}!`}</p>
    <_Component2 user={user} />
    </>
  );
}

function _Component2({user}) {
  return (
    <>
    <p>Component 2</p>
    <_Component3 user={user} />
    </>
  );
}

function _Component3({user}){
  return (
    <>
    <p>Component 3</p>
    <_Component4 user={user} />
    </>
  );
}

function _Component4({user}){
  return (
    <>
    <p>Component 4</p>
    <_Component5 user={user} />
    </>
  );
}

function _Component5({user}){
  return (
    <>
    <p>Component5</p>
    <p>{`hello ${user} again!`}</p>
    </>
  );
}
var rua20 = ReactDOM.createRoot(document.getElementById("rua28"));
rua20.render(<_Component1 />);

/* com contexto */
var UserContext = createContext()

function Component1(){
  var [user, setUser] = useState("Esdras Alcantara");

  return (
    <>
    <hr/>
    <UserContext.Provider value={user}>
      <p>{`hello ${user}!`}</p>
      <Component2 user={user} />
    </UserContext.Provider>
    </>
    );
}

function Component2(){
  return (
    <>
    <p>component 2</p>
    <Component3 />
    </>
  );
}

function Component3(){
  return (
    <>
    <p>component 3</p>
    <Component4 />
    </>
  );
}

function Component4(){
  return (
    <>
    <p> component 4</p>
    <Component5 />
    </>
  );
}

function Component5(){
  var user = useContext(UserContext);

  return (
    <>
    <p>Component 5</p>
    <p>{`hello ${user} again!`}</p>
    </>
  );
}
var rua20 = ReactDOM.createRoot(document.getElementById("rua29"))
rua20.render(<Component1 />)

function Reftest(){
  var [inputValue, setInputValue] = useState("");
  var count = useRef(0);

  useEffect(() => {
   count.current = count.current + 1;
  });

  return(
    <>
    <input 
    type="text"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    />
    <p>render count: {count.current}</p>
    </>
  );
}

rua20.render(< Reftest />)

function Input(){
  var inputElement = useRef();

  var focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
    <input type='text' ref={inputElement} />
    <button onClick={focusInput}>focus input</button>
    </>
  );
}

rua20.render(<Input />);

function Previous(){
  var [inputValue, setInputValue] = useState("");
  var previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
    <input
     type='text'
     value={inputValue}
     onChange={(e) => setInputValue(e.target.value)}
     />
     <p>valor atual: {inputValue}</p>
     <p>valor anterior: {previousInputValue.current}</p>
    </>
  );
}
rua20.render(<Previous/>);

var Var = () => {
  var [count, setCount] = useState(0);
  var [todos, setTodos] = useState([]);

  var increment = () => {
    setCount((c) => c + 1);
  };
  var addTodo = () => {
    setTodos((t) => [...t, "ola novamente"]);
  };

  return (
    <>
    <Todos todos={todos} addTodo={addTodo} />
    <hr/>
    <div>
      count: {count}
      <button onClick={increment}>+</button>
    </div>
    </>
  );
};
rua20.render(<Var/>);

var Var2 = () => {
  var [count, setCount] = useState(0);
  var [todos, setTodos] = useState([]);

  var increment = () => {
    setCount((c) => c + 1);
  };
  var addTodo = useCallback(() => {
    setTodos((t) => [...t, "New todo"]);
  }, [todos]);

  return (
    <>
    <Todos todos={todos} addTodo={addTodo} />
    <hr/>
    <div>
      count: {count}
      <button onClick={increment}>+</button>
    </div>
    </>
  );
};
var rua20 = ReactDOM.createRoot(document.getElementById("rua30"));
rua20.render(<Var2 />);

/* sem memo */
function Calculation(){
  var [count, setCount] = useState(0);
  var [todos, setTodos] = useState([]);
  var calculation = expensiveCalculation(count);

  var increment = () => {
    setCount((c) => c + 1);
  };
  var addTodo = () => {
    setTodos((t) => [...t, "Nova tarefa"])
  };

return (
  <div>
    <div>
     <p>my todos</p>
     {todos.map((todo, index) => {
      return <p key={index}>{todo}</p>;
     })}
     <button onClick={addTodo}>Add todo</button>
  </div>
  <hr/>
  <div>
    Count: {count}
    <button onClick={increment}>+</button>
    <p>expensive Calculation</p>
    {calculation}
   </div>
  </div>
);
};

var expensiveCalculation = (num) => {
  console.log("calculating...");
  for (var i = 0; i < 1000000000000000; i++){
  num += 1;
}
return num;
};

rua20.render(<Calculation />);

/* com memo */
function Calculation2(){
  var [count, setCount] = useState(0);
  var [todos, setTodos] = useState([]);
  var calculation = useMemo (() => expensiveCalculation(count), [count]);
  
  var increment = () => {
    setCount((c) => c + 1);
};

var addTodo = () => {
  setTodos((t) => [...t, "nova tarefa"]);
};

return (
  <div>
    <div>
      <p>minhas tarefas</p>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>add new todo</button>
    </div>
    <hr />
    <div>
      <p>count: {count}</p>
      <button onClick={increment}>+</button>
      <p>expensive Calculation</p>
      {calculation}
    </div>
  </div>
);
};

var expensiveCalculation = (num) => {
  console.log("calculating...");
  for(var i = 0; i < 10000000; i++){
    num += 1
  }
  return num
}
var rua20 = ReactDOM.createRoot(document.getElementById("rua31"))
rua20.render(<Calculation2 />)


var Home2 = () => {
  var [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => setData(data));
  }, []);

  return (
    <>
    {data && 
    data.map((item) => {
      return <p key={item.id}>{item.title}</p>;
    })}
    </>
  );
};
rua20.render(<Home2 />);

var Home_2 = () => {
  var [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
    {data &&
    data.map((item) => {
      return <p key={item.id}>{item.title}</p>;
    })}
    </>
  );
};
rua20.render(<Home_2 />)