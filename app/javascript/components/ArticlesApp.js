import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Provider } from "react-redux";

import store from "store";
import Articles from "./Articles";

export default function ArticlesApp({ user }) {
   return (
        <Provider store={store}>
            <Grid container spacing={2}>
                <Grid item xs></Grid>
                <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={12} className="articles-container">
                            <Articles user={user}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs></Grid>
            </Grid>
        </Provider>
  );
}

