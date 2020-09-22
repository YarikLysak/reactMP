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

  const genres = useSelector((state) => state.genres.list);
  const [form, setFormFieldsData] = useState({
    title: "",
    year: "",
    genres: [],
    description: "",
    runTime: "",
  });

  useEffect(() => {
    if (editedMovie) {
      setFormFieldsData({
        title: editedMovie.title,
        year: editedMovie.year,
        genres: [...editedMovie.genres],
        description: editedMovie.description,
        runTime: editedMovie.runTime,
      });
    }
  }, [editedMovie]);

  const handleChange = ({ target }) => {
    setFormFieldsData({ ...form, genres: target.value });
  };

  const onReset = () => {
    setFormFieldsData({
      title: "",
      year: "",
      genres: [],
      description: "",
      runTime: "",
    });
    setIsOpen(false);
  };

  const onSave = () => {
    const newMovieData = {
      ...form,
      genres: [...form.genres],
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

    onReset();
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
      value: form.title,
      inputProps: null,
      setData: (title) => setFormFieldsData({ ...form, title }),
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
      value: form.year,
      setData: (year) => setFormFieldsData({ ...form, year }),
    },
    {
      id: "manage-overview",
      title: "Overview",
      placeholder: "Overview here",
      value: form.description,
      inputProps: null,
      setData: (description) => setFormFieldsData({ ...form, description }),
    },
    {
      id: "manage-runtime",
      title: "Runtime",
      placeholder: "Runtime here",
      value: form.runTime,
      inputProps: null,
      setData: (runTime) => setFormFieldsData({ ...form, runTime }),
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
                value={form.genres}
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
                      checked={form.genres.indexOf(genre.code) > -1}
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
