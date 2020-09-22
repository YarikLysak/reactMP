import React, { useState, cloneElement } from "react";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import CardModalBody from "./CardModalBody";

export const cardManageStyles = makeStyles({
  cardModal: {
    display: "flex",
    justifyContent: "center",
    overflow: "auto",
  },
});

const CardManageModal = (props) => {
  const { cardModal } = cardManageStyles();
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      {cloneElement(props.children, {
        onClick: (e) => {
          if (props.closePrevModal) {
            props.closePrevModal();
          }
          if (props.setEditMovie) {
            props.setEditMovie(e);
          }
          openModal();
        },
      })}
      <Modal
        className={cardModal}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {CardModalBody({
          setIsOpen: setIsOpen,
          editedMovie: props.editedMovie,
        })}
      </Modal>
    </>
  );
};

export default CardManageModal;
