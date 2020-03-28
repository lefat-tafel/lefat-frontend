import { Link as RouterLink } from "react-router-dom";
import React from "react";
import {
  Link,
  Typography,
  Toolbar,
  IconButton,
  makeStyles,
  AppBar,
  useMediaQuery
} from "@material-ui/core";
import { Menu, SentimentVerySatisfied } from "@material-ui/icons";
import { theme } from "../theme";

interface NavItemProps {
  url: string;
  label: string;
}

const useStyles = makeStyles(theme => ({
  toolbarButtons: {
    marginLeft: "auto"
  },
  navLinks: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    "& a": {
      marginRight: "2rem"
    }
  }
}));

const NavLinks = () => {
  const classes = useStyles();

  const links = [
    {
      url: "about",
      label: "Über Uns"
    },
    {
      url: "registration",
      label: "Registrieren"
    },
    {
      url: "donations",
      label: "Spenden"
    },
    {
      url: "contact",
      label: "Kontakt"
    }
  ];

  return (
    <div className={classes.navLinks}>
      {links.map(({ url, label }) => (
        <Link key={url} color="textSecondary" to={url} component={RouterLink}>
          <Typography variant="h5" component="span">
            {label}
          </Typography>
        </Link>
      ))}
      <Link color="textPrimary" to="login" component={RouterLink}>
        <Typography
          variant="h5"
          component="span"
          style={{ fontWeight: "bold" }}
        >
          Einloggen
        </Typography>
      </Link>
    </div>
  );
};

const MobileMenuButton = () => (
  <IconButton edge="end" component="span">
    <Menu color="secondary"></Menu>
  </IconButton>
);

export const Header = () => {
  const classes = useStyles();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        {isDesktop ? (
          <NavLinks />
        ) : (
          <Typography className={classes.toolbarButtons}>
            <MobileMenuButton />
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};
