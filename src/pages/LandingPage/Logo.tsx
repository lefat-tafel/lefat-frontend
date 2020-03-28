import React from 'react';
import { useMediaQuery, makeStyles } from '@material-ui/core';
import { theme } from '../../theme';

const useStyles = makeStyles(_theme => ({
    logoContainer: {
      display: "flex"
    },
    logo: {
      height: "5rem",
      margin: "2rem 0 0 2rem"
    },
}));

export const Logo = () => {
    const classes = useStyles();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
    return (
      <div
        style={{
          justifyContent: isDesktop ? "flex-start" : "center"
        }}
        className={classes.logoContainer}
      >
        <img
          className={classes.logo}
          src={require("../assets/images/logo.png")}
          alt="Das Logo von Lefat"
        />
      </div>
    );
  };
  