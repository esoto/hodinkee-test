import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useSelector } from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import Article from "./Article";
import {
    selectArticles,
    selectRemoteArticles,
    selectIsLoading
} from "store/articles/slice";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Articles({ user }) {
  const articles = useSelector(selectArticles)
  const remoteArticles = useSelector(selectRemoteArticles)
  const loading = useSelector(selectIsLoading);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const articlesComp = articles.map((article) => {
    return <Article article={article} key={article.id} />;
  });

  const remoteArticlesComp = remoteArticles.map((article) => {
    return <Article article={article} key={article.id} />;
  });

    return (
        <div>
            <Typography variant="h2" gutterBottom>
                Articles
            </Typography>
            {!loading && (
                <>
                  <AppBar position="static">
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="simple tabs example"
                      centered
                    >
                      <Tab label="Articles" {...a11yProps(0)} />
                      <Tab label="Remote Articles" {...a11yProps(1)} />
                    </Tabs>
                  </AppBar>
                  <TabPanel value={value} index={0}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Button variant="contained" onClick={() => window.location = "/articles/new"}>Create Article</Button>
                      </Grid>
                      <Grid item xs={12}>
                        {loading && (<p>Loading</p>)}
                        {articlesComp}
                      </Grid>
                    </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    {remoteArticlesComp}
                  </TabPanel>
                </>
            )}
        </div>
    );
}
