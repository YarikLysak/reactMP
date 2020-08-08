import React from "react";
import ReactDOM from "react-dom";
import Grid from "@material-ui/core/Grid";
import { Header, Search, Footer } from "./Core";
import { CardList } from "./CardList";

const Main = () => (
  <>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Header />
        <Search />
      </Grid>
      <Grid item xs={12}>
        <CardList />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  </>
);

export default Main;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Main />, wrapper) : false;
