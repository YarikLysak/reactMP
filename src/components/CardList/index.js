import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import CardListHead from "./CardListHead";
import CardItem from "./CardItem";
import { genres, sortBy, cardsList } from "../../assets/mockData";

const useStyles = makeStyles((theme) => ({
  cardsListWrapper: {
    width: "100%",
    maxWidth: "1400px",
    padding: "0 3em 3em",
    margin: "0.5em 0 0",
    backgroundColor: theme.darkGray,
  },
}));

const ClassList = () => {
  const { cardsListWrapper } = useStyles();

  return (
    <div className={cardsListWrapper}>
      <CardListHead count={cardsList.length} genres={genres} sortBy={sortBy} />
      <Grid container spacing={9}>
        {cardsList.map((card) => (
          <Grid item xs={4} key={card.id}>
            <CardItem {...card} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ClassList;
