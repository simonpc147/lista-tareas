import { useState } from "react";

interface Modal {
  showModal: boolean;
  closeModal: () => void;
}

function Modal({ showModal, closeModal }: Modal) {
  if (!showModal) return null;

  const [addModal, setAddModal] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const titulo = event.currentTarget.titulo.value;
    setAddModal(titulo);
    // Aquí puedes agregar la lógica adicional que necesites con el valor del título
  };

  return (
    <div className="container">
      <div className="contenedor">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="titulo" name="titulo" id="titulo" />
          <div className="fecha">
            <input type="text" placeholder="Dia" name="" id="dia" />
            <input type="time" placeholder="Hora" name="" id="hora" />
          </div>
          <textarea name="" placeholder="descripcion" id="label"></textarea>
          <div className="prioridad">
            <button>Importante</button>
            <button>Urgente</button>
            <button>Necesario</button>
          </div>
          <div>
            <input type="submit" name="" id="" />
            <button>Añadir</button>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

const addModal = () => {
  return { titulo };
};

export default Modal;
