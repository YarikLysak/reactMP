import React, { useState } from "react";
import { Fab, Typography, Modal, Button } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CloseIcon from "@material-ui/icons/Close";

import { StyledMenu, StyledMenuItem } from "./StyledMenu";
import { styles } from "./styles";

export const MoreBtn = () => {
  const {
    moreBg,
    moreBtn,
    moreCloseBtn,
    deleteModal,
    deleteModalBody,
    deleteModalBodyIcon,
    deleteConfirmBtn,
  } = styles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [IsOpenDelete, setIsOpenDelete] = useState(false);

  const openModal = (e) => setAnchorEl(e.currentTarget);
  const closeModal = () => setAnchorEl(null);
  const onDeleteItem = () => {
    setIsOpenDelete(true);
    closeModal();
  };

  return (
    <>
      <Fab
        size="small"
        aria-label="more"
        className={moreBg}
        onClick={openModal}
      >
        <MoreVertIcon className={moreBtn} />
      </Fab>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeModal}
      >
        <CloseIcon
          fontSize="small"
          onClick={closeModal}
          className={moreCloseBtn}
        />
        <StyledMenuItem onClick={closeModal}>Edit</StyledMenuItem>
        <StyledMenuItem onClick={onDeleteItem}>Delete</StyledMenuItem>
        <Modal
          className={deleteModal}
          open={IsOpenDelete}
          onClose={() => setIsOpenDelete(false)}
        >
          <div className={deleteModalBody}>
            <CloseIcon
              className={deleteModalBodyIcon}
              fontSize="large"
              onClick={() => setIsOpenDelete(false)}
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
              onClick={() => setIsOpenDelete(false)}
            >
              Confirm
            </Button>
          </div>
        </Modal>
      </StyledMenu>
    </>
  );
};
