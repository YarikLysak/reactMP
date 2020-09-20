import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";

import Logo from "../../Core/Logo";
import { CardModalFormInput } from "./CardModalFormInput";
import { cardManageBodyStyles } from "./CardModalBody.styles";
import { theme } from "../../Main.styles";
import { addMovie, updateMovie } from "../../../store/actions/actionCreators";

const CardModalBody = ({ setIsOpen, editedMovie }) => {
  const classes = cardManageBodyStyles();
  const dispatch = useDispatch();
  const firstChange = false;

  const { genres } = useSelector((state) => state);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [description, setDescription] = useState("");
  const [runTime, setRunTime] = useState("");

  useEffect(() => {
    if (editedMovie) {
      setTitle(editedMovie.title);
      setYear(editedMovie.year);
      setSelectedGenres(editedMovie.genres);
      setDescription(editedMovie.description);
      setRunTime(editedMovie.runTime);
    }
  }, [editedMovie]);

  const handleChange = ({ target }) => {
    setSelectedGenres(target.value);
  };

  const onReset = () => {
    editedMovie = null;
    console.log("Reset");
    setIsOpen(false);
  };

  const onSave = () => {
    const newMovieData = {
      title,
      year,
      description,
      runTime,
      genres: [...selectedGenres],
    };

    if (editedMovie) {
      const updatedMovie = {
        ...editedMovie,
        ...newMovieData,
      };
      dispatch(updateMovie(updatedMovie));
    } else {
      newMovieData.photo = {
        link: "./src/assets/images/no-picture.svg",
        title: "No picture found",
      };
      newMovieData.rate = 0;
      dispatch(addMovie(newMovieData));
    }

    console.log("Save");
    setIsOpen(false);
  };

  const Props = {
    menu: {
      PaperProps: {
        style: {
          backgroundColor: theme.darkGray,
          color: theme.white,
          maxHeight: 48 * 4.5 + 8,
          width: 250,
        },
      },
    },
    selectDisplay: {
      style: {
        padding: theme.spacing(2, 1),
        backgroundColor: theme.gray,
        color: theme.white,
      },
    },
    selectInput: {
      name: "genres",
      id: "manage-genres",
      classes: {
        icon: classes.icon,
      },
    },
    selectCheckbox: {
      classes: {
        icon: { color: "red", backgroundColor: "white" },
      },
    },
  };

  const formInputs = [
    {
      id: "manage-title",
      title: "Title",
      placeholder: "Title here",
      value: title,
      inputProps: null,
      setData: setTitle,
    },
    {
      id: "manage-release-date",
      title: "Release Date",
      placeholder: "Select Date",
      type: "date",
      inputProps: {
        endAdornment: (
          <DateRangeOutlinedIcon className={classes.inputDateIcon} />
        ),
      },
      value: year,
      setData: setYear,
    },
    {
      id: "manage-overview",
      title: "Overview",
      placeholder: "Overview here",
      value: description,
      inputProps: null,
      setData: setDescription,
    },
    {
      id: "manage-runtime",
      title: "Runtime",
      placeholder: "Runtime here",
      value: runTime,
      inputProps: null,
      setData: setRunTime,
    },
  ];

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
          {editedMovie ? "Edit" : "Add"} movie
        </Typography>
        <form
          className={classes.cardModalBodyForm}
          autoComplete="off"
          noValidate
        >
          {formInputs.map((input, i) => {
            return (
              <CardModalFormInput
                key={"formInput" + i}
                changeKey={"formInput" + i}
                id={input.id}
                title={input.title}
                type={input.type}
                placeholder={input.placeholder}
                value={input.value}
                InputProps={input.inputProps}
                setData={input.setData}
              />
            );
          })}

          {/* Genres */}
          <div className={classes.formFieldWrapper}>
            <FormControl>
              <label htmlFor="manage-genres">Genres</label>
              <Select
                className={classes.cardMultiselect}
                value={selectedGenres}
                onChange={handleChange}
                multiple
                displayEmpty
                inputProps={Props.selectInput}
                SelectDisplayProps={Props.selectDisplay}
                MenuProps={Props.menu}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <span style={{ color: "rgb(147 147 147)" }}>
                        Select Genre
                      </span>
                    );
                  }
                  return selected
                    .map(
                      (value) => genres.find(({ code }) => value === code).title
                    )
                    .join(", ");
                }}
              >
                <MenuItem disabled value="">
                  <em>Select Genres</em>
                </MenuItem>
                {genres.map((genre) => (
                  <MenuItem key={genre.code} value={genre.code}>
                    <Checkbox
                      className={classes.cardMultiselectCheckbox}
                      checked={selectedGenres.indexOf(genre.code) > -1}
                    />
                    <ListItemText
                      className={classes.cardMultiselectItem}
                      primary={genre.title}
                    />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
