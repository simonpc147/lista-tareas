import { useState } from "react";

function Card() {
  const estilo = {
    width: "100%",
  };

  const [valor, cambiarValor] = useState(true);  
  const cambiar = ()=> cambiarValor(!valor); 

  const [Boton, setBoton] = useState(["boton", "boton2", "boton3"])
  const addButton = () => setBoton([...Boton, "Añadido"]);
  const delButton = () => setBoton(Boton.slice(0,-1));
  
  // let botonSaludo = <button className="border rounded-s w-12 bg-red-300">Hola!</button>;
  // let botonDespedida = <button disabled={!valor} className="border rounded-s w-12 bg-blue-300">Chao</button>;
  return (
    <div className="flex justify-around flex-col text-center" style={estilo} onClick={cambiar}>
      {/* {  valor ? botonSaludo : botonDespedida} */}
      <button onClick={addButton}>Agregar Boton</button>
      <button onClick={delButton}>Eliminar Boton</button>
      <Body boton={Boton} />
    </div>
  );
}


//CUERPO DE LA FUNCION//
interface Botones {
  boton: string[];
}

function Body({ boton }: Botones) {
  const [Valor, setV] = useState(1);
  const iterar = (i: number)=> setV(i);

  return boton.map((botonesUno, index) => (
    <button
      onClick={()=> {iterar(index)}}
      className={`${index == Valor ? "bg-red-100": ""}`}
      key={index}
    >
      {botonesUno}
    </button>
  ));
}


export default Card;
