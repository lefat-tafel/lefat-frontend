import {
  Grid,
  useMediaQuery,
  Typography,
  SvgIconTypeMap,
  makeStyles
} from "@material-ui/core";
import { theme } from "../../theme";
import React from "react";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export interface IconStep {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  description: string;
}

interface Props {
  steps: IconStep[];
}

const useStyles = makeStyles(_theme => ({
  gridContainer: {
    display: "flex",
    justifyContent: "center"
  },
  iconStepItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    wordBreak: "break-word"
  },
  text: {
    color: "black",
    textAlign: "center"
  }
}));

export const IconSteps = ({ steps }: Props) => {
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const classes = useStyles();
  return (
    <Grid container>
      {steps.map(({ title, icon: Icon, description }) => (
        <Grid key={title} item xs={12} lg={4} className={classes.gridContainer}>
          <div
            style={{
              padding: isDesktop ? "4rem 8rem" : "2rem"
            }}
            className={classes.iconStepItem}
          >
            <Icon
              color="secondary"
              style={{
                fontSize: isDesktop ? "6rem" : "4rem",
                marginBottom: isDesktop ? "3rem" : "1.5rem"
              }}
            />
            <Typography variant="h4" className={classes.text}>
              {title}
            </Typography>
            <Typography variant="body1" className={classes.text}>
              {description}
            </Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};
