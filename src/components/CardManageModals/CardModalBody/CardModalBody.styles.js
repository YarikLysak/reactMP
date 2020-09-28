import { makeStyles } from "@material-ui/core";

export const cardManageBodyStyles = makeStyles((theme) => ({
  cardModalBody: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    width: "60%",
    backgroundColor: theme.darkGray,
    padding: theme.spacing(2, 10, 4),
    color: theme.white,
    textTransform: "uppercase",
    fontWeight: "initial",
  },
  cardModalBodyIcon: {
    alignSelf: "flex-end",
    cursor: "pointer",
  },
  cardModalBodyForm: {
    display: "flex",
    flexDirection: "column",
    "& label": {
      color: theme.pink,
      marginBottom: theme.spacing(1),
    },
  },
  formFieldWrapper: {
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(2, 0),
  },
  cardModalInput: {
    "& .MuiInputBase-root": {
      color: theme.white,
      backgroundColor: theme.gray,

      "&::placeholder": {
        color: theme.white,
      },
    },

    "& input[type='date']": {
      "&::-webkit-calendar-picker-indicator": {
        position: "absolute",
        right: "14px",
        background: "none",
      },
    },

    "& select": {
      textTransform: "capitalize",
      "& option": {
        backgroundColor: theme.lightGray,
      },
    },
  },
  inputDateIcon: {
    color: theme.pink,
  },
  cardModalBtnBlock: {
    display: "flex",
    alignSelf: "flex-end",
    width: "45%",
    "& button": {
      marginLeft: theme.spacing(1),
    },
  },
  cardMultiselect: {
    textTransform: "capitalize",
    "label + &": {
      marginTop: 0,
    },
  },
  cardMultiselectCheckbox: {
    "& .MuiIconButton-label": {
      color: theme.pink,
    },
  },
  cardMultiselectItem: {
    textTransform: "capitalize",
  },
  icon: {
    fill: theme.pink,
  },
}));
