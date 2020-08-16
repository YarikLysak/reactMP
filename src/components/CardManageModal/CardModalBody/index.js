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
          <div className={classes.formFieldWrapper}>
            <label for="manage-title">Title</label>
            <TextField
              id="manage-title"
              className={classes.cardModalInput}
              variant="outlined"
              placeholder="Title here"
              fullWidth
            />
          </div>
          <div className={classes.formFieldWrapper}>
            <label for="manage-release-date">Release Date</label>
            <TextField
              id="manage-release-date"
              className={classes.cardModalInput}
              variant="outlined"
              type="date"
              placeholder="Select Date"
              fullWidth
              InputProps={{
                endAdornment: (
                  <DateRangeOutlinedIcon className={classes.inputDateIcon} />
                ),
              }}
            />
          </div>
          <div className={classes.formFieldWrapper}>
            <label for="manage-movie-url">Movie URL</label>
            <TextField
              id="manage-movie-url"
              className={classes.cardModalInput}
              variant="outlined"
              placeholder="Movie URL here"
              fullWidth
            />
          </div>
          <div className={classes.formFieldWrapper}>
            <FormControl variant="outlined">
              <label for="manage-genres">Genres</label>
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
          <div className={classes.formFieldWrapper}>
            <label for="manage-overview">Overview</label>
            <TextField
              id="manage-overview"
              className={classes.cardModalInput}
              variant="outlined"
              placeholder="Overview here"
              fullWidth
            />
          </div>
          <div className={classes.formFieldWrapper}>
            <label for="manage-runtime">Runtime</label>
            <TextField
              id="manage-runtime"
              className={classes.cardModalInput}
              variant="outlined"
              placeholder="Runtime here"
              fullWidth
            />
          </div>

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
