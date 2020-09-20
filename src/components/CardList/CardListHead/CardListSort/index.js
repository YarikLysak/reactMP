import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, Select, MenuItem, Typography } from "@material-ui/core";
import { cardListSortStyles } from "./CardListSort.styles";
import { selectSortedBy } from "../../../../store/actions/actionCreators";

const CardListSort = () => {
  const { sortByWrapper, sortBySelect, icon } = cardListSortStyles();
  const { sortBy } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = useCallback(
    ({ target: { value } }) =>
      dispatch(selectSortedBy(sortBy.find(({ code }) => code === value))),
    [sortBy]
  );

  return (
    <div className={sortByWrapper}>
      <Typography variant="subtitle1">Sort by</Typography>

      <FormControl>
        {sortBy.length ? (
          <Select
            className={sortBySelect}
            value={sortBy.find((el) => el.selected).code}
            onChange={handleChange}
            inputProps={{
              classes: {
                icon: icon,
              },
            }}
          >
            {sortBy.map((item) => (
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
