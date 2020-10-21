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
  FormHelperText,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import { useFormik } from "formik";

import Logo from "../../Core/Logo";
import { CardModalFormInput } from "./CardModalFormInput";
import { cardManageBodyStyles } from "./CardModalBody.styles";
import { theme } from "../../Main.styles";
import {
  updateMovie,
  addMovie,
} from "../../../store/actions/moviesActionCreators";
import { fetchGenres } from "../../../store/actions/actionCreators";
import { useGenresListState } from "../../../store/selectors/moviesStateSelector";

const CardModalBody = ({ setIsOpen, editedMovie }) => {
  const classes = cardManageBodyStyles();
  const dispatch = useDispatch();

  const genres = useSelector(useGenresListState);
  const [form, setFormFieldsData] = useState({
    title: "",
    year: "",
    genres: [],
    description: "",
    runTime: "",
  });

  useEffect(() => {
    if(!genres.length) {
      dispatch(fetchGenres())
    }
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

  const onReset = () => {
    setFormFieldsData({
      title: "",
      year: "",
      genres: [],
      description: "",
      runTime: "",
    });
    manageForm.resetForm();
    setIsOpen(false);
  };

  const onSave = (formValues) => {
    const newGenres = formValues.genres.includes("0")
      ? [...genres].map(({ code }) => code)
      : [...formValues.genres];
    const newMovieData = {
      ...formValues,
      genres: newGenres,
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
      id: "title",
      title: "Title",
      placeholder: "Title here",
      value: form.title,
      inputProps: null,
    },
    {
      id: "year",
      title: "Release Date",
      placeholder: "Select Date",
      type: "date",
      inputProps: {
        endAdornment: (
          <DateRangeOutlinedIcon className={classes.inputDateIcon} />
        ),
      },
      value: form.year,
    },
    {
      id: "description",
      title: "Overview",
      placeholder: "Overview here",
      value: form.description,
      inputProps: null,
    },
    {
      id: "runTime",
      title: "Runtime",
      placeholder: "Runtime here",
      value: form.runTime,
      inputProps: null,
    },
  ];

  const manageForm = useFormik({
    initialValues: form,
    validate: ({ title, genres }) => {
      const errors = {};
      if (!title) {
        errors.title = "Required";
      }
      if (!genres.length) {
        errors.genres = "Required";
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(false);
      onSave(values);
    },
  });

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
          onSubmit={manageForm.handleSubmit}
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
                value={manageForm.values[input.id]}
                InputProps={input.inputProps}
                error={!!manageForm.errors[input.id]}
                helperText={manageForm.errors[input.id]}
                onChange={manageForm.handleChange}
                onBlur={manageForm.handleBlur}
              />
            );
          })}

          {/* Genres */}
          <div className={classes.formFieldWrapper}>
            <FormControl error={!!manageForm.errors.genres}>
              <label htmlFor="manage-genres">Genres</label>
              <Select
                className={classes.cardMultiselect}
                value={manageForm.values.genres}
                onChange={manageForm.handleChange}
                onBlur={manageForm.handleBlur}
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
                  } else if (selected.includes("0")) {
                    return genres.map((item) => item.title).join(", ");
                  }
                  return selected
                    .map((val) => genres.find(({ code }) => val === code).title)
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
                      checked={(() => {
                        let list = manageForm.values.genres;
                        return (
                          list.includes("0") || list.indexOf(genre.code) > -1
                        );
                      })()}
                    />
                    <ListItemText
                      className={classes.cardMultiselectItem}
                      primary={genre.title}
                    />
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>{manageForm.errors.genres}</FormHelperText>
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
              type="submit"
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
