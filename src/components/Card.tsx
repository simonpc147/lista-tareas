import { useState } from "react";
import Modal from "./Modal";

function Card() {
 
  const [showModal,setShowModal] = useState(false);
  
  return (
    <div>
      <button onClick={() =>{ setShowModal(true)}}>+</button>;
      <Modal showModal={showModal} closeModal={() => setShowModal(false) } />
    </div>
  )

}

export default Card;
