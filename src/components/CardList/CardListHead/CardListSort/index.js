import React from "react";
import PropTypes from "prop-types";
import { FormControl, Select, MenuItem, Typography } from "@material-ui/core";
import { cardListSortStyles } from "./CardListSort.styles";

let sortBySelected = "1";

const handleChange = (el) => {
  sortBySelected = el.target.value;
};

const CardListSort = ({ sortBy }) => {
  const { sortByWrapper, sortBySelect, icon } = cardListSortStyles();

  return (
    <div className={sortByWrapper}>
      <Typography variant="subtitle1">Sort by</Typography>

      <FormControl>
        <Select
          className={sortBySelect}
          value={sortBySelected}
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
      </FormControl>
    </div>
  );
};
export default CardListSort;

CardListSort.propTypes = {
  sortBy: PropTypes.array.isRequired,
};
