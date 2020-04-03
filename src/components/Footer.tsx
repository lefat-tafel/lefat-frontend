import { Toolbar, AppBar, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  footerBar: {
    bottom: 0,
    top: "unset",
  },
});

export const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.footerBar} color="primary" position="fixed">
      <Toolbar />
    </AppBar>
  );
};
