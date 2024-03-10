import { useState } from "react";
import Modal from "./Modal";
import "./Modal.css";

export default function ModalTest() {
  const [showModalPopUp, setShowModalPopUp] = useState(false);

  function handleTogglePopUp() {
    setShowModalPopUp(!showModalPopUp);
  }

  function onClose() {
    setShowModalPopUp(false);
  }

  return (
    <div className="custom-modal">
      <button onClick={handleTogglePopUp}>Open Modal PopUp</button>
      {showModalPopUp && (
        <Modal onClose={onClose} body={<div>Customised BOdy</div>} />
      )}
    </div>
  );
}
