import React, { useState } from "react";
import {
  Typography,
  Button,
  TextField,
  FormControl,
  Select,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";

import { cardManageBodyStyles } from "./CardModalBody.styles";
import { genres } from "../../../assets/mockData";
import Logo from "../../Core/Logo";
import { CardModalFormInput } from "./CardModalFormInput";

const CardModalBody = ({ setIsOpen }) => {
  const classes = cardManageBodyStyles();
  const [genre, setGenre] = useState("");

  const onReset = () => {
    console.log("Reset");
    setIsOpen(false);
  };
  const onSave = () => {
    console.log("Save");
    setIsOpen(false);
  };

  return (
    <>
      <Logo />
      <div className={classes.cardModalBody}>
        <CloseIcon
          className={classes.cardModalBodyIcon}
          fontSize="large"
          onClick={() => setIsOpen(false)}
        />
        <Typography variant="h4" gutterBottom>
          Edit movie
        </Typography>
        <form
          className={classes.cardModalBodyForm}
          autoComplete="off"
          noValidate
        >
          <CardModalFormInput
            id="manage-title"
            title="Title"
            placeholder="Title here"
          />
          <CardModalFormInput
            id="manage-release-date"
            title="Release Date"
            placeholder="Select Date"
            type="date"
            InputProps={{
              endAdornment: (
                <DateRangeOutlinedIcon className={classes.inputDateIcon} />
              ),
            }}
          />
          <CardModalFormInput
            id="manage-movie-url"
            title="Movie URL"
            placeholder="Movie URL here"
          />
          <div className={classes.formFieldWrapper}>
            <FormControl variant="outlined">
              <label htmlFor="manage-genres">Genres</label>
              <Select
                className={classes.cardModalInput}
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                displayEmpty={false}
                native
                inputProps={{
                  name: "genres",
                  id: "manage-genres",
                  classes: {
                    icon: classes.icon,
                  },
                }}
              >
                <option disabled value="">
                  Select Genre
                </option>
                {genres.map((genre) => (
                  <option key={genre.code} value={genre.code}>
                    {genre.title}
                  </option>
                ))}
              </Select>
            </FormControl>
          </div>
          <CardModalFormInput
            id="manage-overview"
            title="Overview"
            placeholder="Overview here"
          />
          <CardModalFormInput
            id="manage-runtime"
            title="Runtime"
            placeholder="Runtime here"
          />
          <div className={classes.cardModalBtnBlock}>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={onReset}
            >
              Reset
            </Button>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={onSave}
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
export default CardModalBody;
