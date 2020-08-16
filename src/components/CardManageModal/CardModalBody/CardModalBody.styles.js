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
    color: theme.white,
    backgroundColor: theme.lightGray,

    "& input": {
      color: theme.white,
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

    "&:not([multiple]) select": {
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
  icon: {
    fill: theme.pink,
  },
}));
