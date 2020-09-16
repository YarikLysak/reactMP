import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { FormControl, Select, MenuItem, Typography } from "@material-ui/core";
import { cardListSortStyles } from "./CardListSort.styles";

const CardListSort = ({ sortBy, selectSortedBy }) => {
  const { sortByWrapper, sortBySelect, icon } = cardListSortStyles();

  const handleChange = useCallback(
    ({ target: { value } }) =>
      selectSortedBy(sortBy.find(({ code }) => code === value)),
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

CardListSort.propTypes = {
  sortBy: PropTypes.array.isRequired,
  selectSortedBy: PropTypes.func.isRequired,
};
