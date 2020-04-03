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
import { Menu } from "@material-ui/icons";
import { theme } from "../theme";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("header");

  const links = [
    {
      url: "about",
      translateKey: "about"
    },
    {
      url: "registration",
      translateKey: "register"
    },
    {
      url: "donations",
      translateKey: "donate"
    },
    {
      url: "contact",
      translateKey: "contact"
    }
  ];

  return (
    <div className={classes.navLinks}>
      {links.map(({ url, translateKey }) => (
        <Link key={url} color="textSecondary" to={url} component={RouterLink}>
          <Typography variant="h5" component="span">
            {t(translateKey)}
          </Typography>
        </Link>
      ))}
      <Link color="textPrimary" to="login" component={RouterLink}>
        <Typography
          variant="h5"
          component="span"
          style={{ fontWeight: "bold" }}
        >
          {t("login")}
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
