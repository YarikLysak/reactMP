import React from "react";
import { Modal, Typography, Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/styles";

const styles = makeStyles((theme) => ({
  deleteModal: {
    display: "flex",
    justifyContent: "center",
    overflow: "auto",
  },
  deleteModalBody: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    width: "60%",
    marginTop: theme.spacing(5),
    padding: theme.spacing(2, 4, 4),
    backgroundColor: theme.darkGray,
    outline: "none",
    color: theme.white,
    textTransform: "uppercase",
    fontWeight: "initial",
  },
  deleteModalBodyIcon: {
    alignSelf: "flex-end",
    cursor: "pointer",
  },
  deleteConfirmBtn: {
    alignSelf: "flex-end",
  },
}));

const DeleteModal = ({ IsOpen, setIsOpen }) => {
  const {
    deleteModal,
    deleteModalBody,
    deleteModalBodyIcon,
    deleteConfirmBtn,
  } = styles();

  return (
    <Modal
      className={deleteModal}
      open={IsOpen}
      onClose={() => setIsOpen(false)}
    >
      <div className={deleteModalBody}>
        <CloseIcon
          className={deleteModalBodyIcon}
          fontSize="large"
          onClick={() => setIsOpen(false)}
        />
        <Typography variant="h4" gutterBottom>
          Delete Movie
        </Typography>
        <Typography variant="subtitle1">
          Are you want to delete this movie?
        </Typography>
        <Button
          className={deleteConfirmBtn}
          color="secondary"
          variant="contained"
          onClick={() => setIsOpen(false)}
        >
          Confirm
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
