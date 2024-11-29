import styles from "./my-style.module.css"
import { useState, useEffect } from "react";

function Carro(props) {
    return <h1>ola, eu sou um carro, de marca {props.modelo}, eu sou {props.cor} </h1>;
}

export default Carro;

export function Alertar(){
var frase = () => {
alert("eu sou uma janela de alerta");
}

return (
    <button onClick={frase}>clique em mim</button>
);
}

export function Alertar2(){
var frase = (a, b) => {
    alert("tipo de evento: " + b.type);
    
}

var frase2 = (a) => {
    alert(a);
}
return(
    <>
    <button onClick={() => frase2("eu tambem sou uma janela de alerta,\n porem com argumento react js")}>clique aqui tambem!</button>
    <button onClick={(event) => frase("evento", event)}>clique</button>
    </>
);
}

export function Musica1(){
    return <p>que musica boa</p>;
}

export function Musica2(){
    return <p>que musica ruim!</p>;
}

export var Frasecss = () => {
    return <p className={styles.bigblue}>eu sou um paragrafo editado com css importado</p>
}

export var useFetch = (url) => {
    var [data, setData] = useState(null);

    useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => setData(data));
  }, [url]);

  return [data];
};

