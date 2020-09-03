import React, { useState } from "react";
import { Fab } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CloseIcon from "@material-ui/icons/Close";

import { StyledMenu, StyledMenuItem } from "./StyledMenu";
import { styles } from "./styles";
import { CardManageModal, DeleteModal } from "../../../CardManageModals";

export const MoreBtn = ({ moreBgHoverClass }) => {
  const classes = styles();
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
        className={[classes.moreBg, moreBgHoverClass]}
        onClick={openModal}
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
        <CardManageModal closePrevModal={closeModal}>
          {<StyledMenuItem>Edit</StyledMenuItem>}
        </CardManageModal>
        <StyledMenuItem onClick={onDeleteItem}>Delete</StyledMenuItem>
        <DeleteModal IsOpen={IsOpenDelete} setIsOpen={setIsOpenDelete} />
      </StyledMenu>
    </>
  );
};
