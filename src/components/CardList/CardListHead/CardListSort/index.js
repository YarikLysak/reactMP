import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormControl } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { cardListSortStyles } from "./CardListSort.styles";
import { selectSortedBy } from "../../../../store/actions/actionCreators";
import { StyledMenu, StyledMenuItem } from "../../CardItem/MoreBtn/StyledMenu";

const CardListSort = () => {
  const { sortByWrapper, sortTrigger, sortTriggerIcon } = cardListSortStyles();
  const { list, selected } = useSelector((state) => state.sortBy);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = useCallback((e) => setAnchorEl(e.currentTarget));
  const handleClose = useCallback(() => setAnchorEl(null));
  const handleClick = useCallback(
    ({ target: { value } }) => {
      const selectedSort = list.find(({ code }) => value.toString() === code);
      dispatch(selectSortedBy(selectedSort));
      handleClose();
    },
    [list]
  );

  return (
    <div className={sortByWrapper}>
      <h4>Sort by</h4>

      <FormControl>
        {list.length ? (
          <>
            <div className={sortTrigger} onClick={handleOpen}>
              {list.find(({ code }) => code === selected.code).title}
              <ArrowDropDownIcon className={sortTriggerIcon} />
            </div>
            <StyledMenu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {list.map((item) => (
                <StyledMenuItem
                  key={item.code}
                  value={item.code}
                  onClick={handleClick}
                >
                  {item.title}
                </StyledMenuItem>
              ))}
            </StyledMenu>
          </>
        ) : null}
      </FormControl>
    </div>
  );
};
export default CardListSort;
