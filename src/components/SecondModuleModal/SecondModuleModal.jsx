import { useEffect, useState } from "react";
import css from "./SecondModuleModal.module.css";
const SecondModuleModal = ({ closeModal }) => {
  const [counter, setCounter] = useState(() => {
    return parseInt(localStorage.getItem("modal-counter") ?? 0);
  });
  // useEffect(() = {
  //     console.log(`${counter}`);

  // }, [counter])
  useEffect(() => {
    // console.log("Modal is mounted!");
    const handleKeyDown = (e) => {
      // console.log("keydown");
      // console.log(e);
      if (e.code === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);
  useEffect(() => {
    localStorage.setItem("modal-counter", counter);
  }, [counter]);

  const handleBackdropClose = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <div className={css.backdrop} onClick={handleBackdropClose}>
      <div className={css.modal}>
        <button
          type="button"
          aria-label="close-modal-button"
          onClick={closeModal}
          className={css.modalBtn}
        >
          <svg width={24} height={24} viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
            />
          </svg>
        </button>
        <h3>Modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A debitis
          cupiditate culpa iure eaque minima. Error molestias sunt minus, quos
          voluptatem dolorem quo, modi eius voluptas, corrupti facilis sed
          recusandae.
        </p>
        <p>Counter state: {counter}</p>
        {/* <button type="button" onClick={() => setCounter(counter + 1)}> */}
        <button
          type="button"
          onClick={() => setCounter((prevState) => prevState + 1)}
        >
          Change counter`s state
        </button>
      </div>
    </div>
  );
};

export default SecondModuleModal;
