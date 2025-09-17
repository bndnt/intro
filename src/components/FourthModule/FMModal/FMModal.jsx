import { useState } from "react";
import SecondModuleModal from "../../SecondModuleModal/SecondModuleModal";

const FMModal = () => {
  const [isOpenModal, setIsOpen] = useState(false);
  const onOpenModal = () => {
    setIsOpen(true);
  };
  const omCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      {isOpenModal && <SecondModuleModal closeModal={omCloseModal} />}
      <button type="button" onClick={onOpenModal}>
        Open modal
      </button>
    </div>
  );
};

export default FMModal;
