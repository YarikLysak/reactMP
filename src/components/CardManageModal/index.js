import React, { useState } from "react";
import { Button, Modal } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { cardManageStyles } from "./CardModal.styles";
import CardModalBody from "./CardModalBody";

const CardManageModal = () => {
  const { addButton, cardModal } = cardManageStyles();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<AddIcon />}
        className={addButton}
        onClick={() => setIsOpen(true)}
      >
        Add movie
      </Button>
      <Modal
        className={cardModal}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <CardModalBody setIsOpen={setIsOpen} />
      </Modal>
    </>
  );
};

export default CardManageModal;
