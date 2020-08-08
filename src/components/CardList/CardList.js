import React from "react";
import { Grid } from "@material-ui/core";

import { CardListHead } from "./CardListHead";
import { CardItem } from "./CardItem";

const cardsList = [
  { id: "1", title: "a", description: "desc1", year: "2003" },
  { id: "2", title: "b", description: "desc2", year: "2004" },
  { id: "3", title: "c", description: "desc3", year: "1994" },
  { id: "4", title: "d", description: "desc4", year: "2004" },
  { id: "5", title: "e", description: "desc5", year: "2006" },
];

export default () => (
  <>
    <CardListHead count={cardsList.length} />
    <Grid container spacing={3}>
      {cardsList.map((card) => (
        <Grid item xs={4} key={card.id}>
          <CardItem {...card} />
        </Grid>
      ))}
    </Grid>
  </>
);
