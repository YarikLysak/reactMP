import React from "react";
import { useDispatch } from "react-redux";
import { Modal, Typography, Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/styles";
import { deleteMovie, selectSearch } from "../../store/actions/moviesActionCreators";

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

const DeleteModal = ({ isOpen, setIsOpen, deletedMovie }) => {
  const {
    deleteModal,
    deleteModalBody,
    deleteModalBodyIcon,
    deleteConfirmBtn,
  } = styles();

  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(deleteMovie(deletedMovie));
    dispatch(selectSearch());
    setIsOpen(false);
  };

  return (
    <Modal
      className={deleteModal}
      open={isOpen}
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
          onClick={handleConfirm}
        >
          Confirm
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
