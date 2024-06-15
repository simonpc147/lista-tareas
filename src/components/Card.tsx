function Card() {
  const estilo = {
    width: "100%",
  };

  const botones = [
    "boton",
    "boton1",
    "boton2",
    "boton3",
    "boton4",
    "boton5",
    "boton6",
    "boton7",
  ];
  const prueba : number [] = [1] 

  


  return (
    <div className="flex justify-around flex-col text-center" style={estilo}>
      { prueba.length ? <Footer2/> : <Footer/>}
      <Body botones={botones} />
    </div>
  );
}

interface Botones {
  botones: string[];
}

function Body({ botones }: Botones) {
  return botones.map((boton, index) => (
    <button
      onClick={() => {
        console.log(index, boton);
      }}
      key={index}
    >
      {boton}
    </button>
  ));
}

function Footer() {
  return <footer>Footer</footer>;
}

function Footer2() {
  return <footer>Footer2</footer>;
}

export default Card;
