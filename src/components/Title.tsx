function Title() {
  const nombre = "Simón";

  const data = new Date();
  const horaA = data.getHours();

  const hora = (hora: number) => {
    if (hora > 6 && hora < 12) {
      return "Buenos Dias";
    } else if (hora >= 12 && hora <= 18) {
      return "Buenas Tardes";
    } else if (hora >= 18 && hora <= 24) {
      return "Buenas noches";
    } else {
      return "Buenas Madrugadas";
    }
  };

  return `${hora(horaA)} ${nombre}`;
}

export default Title;
