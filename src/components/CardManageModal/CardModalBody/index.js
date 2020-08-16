import React from "react";
import {
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";

import { cardManageBodyStyles } from "./CardModalBody.styles";
import { genres } from "../../../assets/mockData";
import { useState } from "react";
import Logo from "../../Core/Logo";

const CardModalBody = () => {
  const [genre, setGenre] = useState("");
  const {
    cardModalBody,
    cardModalBodyIcon,
    cardModalBodyForm,
    formFieldWrapper,
    cardModalInput,
    inputDateIcon,
    cardModalBtnBlock,
    icon,
  } = cardManageBodyStyles();

  const osSetGenre = (genre) => {
    console.log("genre", genre.target.value);
    setGenre(event.target.value);
  };

  const onSubmit = () => {
    console.log("Submit");
  };

  return (
    <>
      <Logo />
      <div className={cardModalBody}>
        <CloseIcon className={cardModalBodyIcon} fontSize="large" />
        <Typography variant="h4" gutterBottom>
          Edit movie
        </Typography>
        <form onSubmit={onSubmit} className={cardModalBodyForm}>
          <div className={formFieldWrapper}>
            <label for="manage-title">Title</label>
            <TextField
              id="manage-title"
              className={cardModalInput}
              variant="outlined"
              placeholder="Title here"
              fullWidth
            />
          </div>
          <div className={formFieldWrapper}>
            <label for="manage-release-date">Release Date</label>
            <TextField
              id="manage-release-date"
              className={cardModalInput}
              variant="outlined"
              type="date"
              placeholder="Select Date"
              fullWidth
              InputProps={{
                endAdornment: (
                  <DateRangeOutlinedIcon className={inputDateIcon} />
                ),
              }}
            />
          </div>
          <div className={formFieldWrapper}>
            <label for="manage-movie-url">Movie URL</label>
            <TextField
              id="manage-movie-url"
              className={cardModalInput}
              variant="outlined"
              placeholder="Movie URL here"
              fullWidth
            />
          </div>
          <div className={formFieldWrapper}>
            <FormControl variant="outlined">
              <label for="manage-genres">Genres</label>
              <Select
                className={cardModalInput}
                value={genre}
                onChange={osSetGenre}
                displayEmpty={false}
                native
                inputProps={{
                  name: "genres",
                  id: "manage-genres",
                  classes: {
                    icon: icon,
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
          <div className={formFieldWrapper}>
            <label for="manage-overview">Overview</label>
            <TextField
              id="manage-overview"
              className={cardModalInput}
              variant="outlined"
              placeholder="Overview here"
              fullWidth
            />
          </div>
          <div className={formFieldWrapper}>
            <label for="manage-runtime">Runtime</label>
            <TextField
              id="manage-runtime"
              className={cardModalInput}
              variant="outlined"
              placeholder="Runtime here"
              fullWidth
            />
          </div>
          {/* <div className={formFieldWrapper}></div> */}

          <div className={cardModalBtnBlock}>
            <Button variant="outlined" color="secondary" fullWidth>
              Reset
            </Button>
            <Button variant="contained" color="secondary" fullWidth>
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
export default CardModalBody;
