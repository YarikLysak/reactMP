import React, { useState } from "react";
import { Fab } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CloseIcon from "@material-ui/icons/Close";

import { StyledMenu, StyledMenuItem } from "./StyledMenu";
import { styles } from "./styles";
import { CardManageModal, DeleteModal } from "../../../CardManageModals";

export const MoreBtn = ({ moreBgHoverClass, movie }) => {
  const classes = styles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [editedMovie, setEditedMovie] = useState(false);

  const closeModal = () => setAnchorEl(null);

  const onDeleteItem = () => {
    setIsOpenDelete(true);
    closeModal();
  };
  const handleClick = (e) => {
    setEditedMovie(movie);
    setAnchorEl(e.currentTarget);
  };

  return (
    <>
      <Fab
        size="small"
        aria-label="more"
        className={`${classes.moreBg} ${moreBgHoverClass}`}
        onClick={handleClick}
      >
        <MoreVertIcon className={classes.moreBtn} />
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
          className={classes.moreCloseBtn}
        />
        <CardManageModal closePrevModal={closeModal} editedMovie={editedMovie}>
          {<StyledMenuItem>Edit</StyledMenuItem>}
        </CardManageModal>
        <StyledMenuItem onClick={onDeleteItem}>Delete</StyledMenuItem>
        <DeleteModal
          isOpen={isOpenDelete}
          setIsOpen={setIsOpenDelete}
          deletedMovie={movie}
        />
      </StyledMenu>
    </>
  );
};
