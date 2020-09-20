import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, Select, MenuItem, Typography } from "@material-ui/core";
import { cardListSortStyles } from "./CardListSort.styles";
import { selectSortedBy } from "../../../../store/actions/actionCreators";

const CardListSort = () => {
  const { sortByWrapper, sortBySelect, icon } = cardListSortStyles();
  const { list, selected } = useSelector((state) => state.sortBy);
  const dispatch = useDispatch();

  const handleChange = useCallback(
    ({ target: { value } }) =>
      dispatch(selectSortedBy(list.find(({ code }) => code === value))),
    [list]
  );

  return (
    <div className={sortByWrapper}>
      <Typography variant="subtitle1">Sort by</Typography>

      <FormControl>
        {list.length ? (
          <Select
            className={sortBySelect}
            value={selected.code}
            onChange={handleChange}
            inputProps={{
              classes: {
                icon: icon,
              },
            }}
          >
            {list.map((item) => (
              <MenuItem key={item.code} value={item.code}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        ) : null}
      </FormControl>
    </div>
  );
};
export default CardListSort;
