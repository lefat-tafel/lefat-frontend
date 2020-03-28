import React from "react";
import {
  Typography,
  Button,
  Container,
  makeStyles,
  useMediaQuery
} from "@material-ui/core";
import { theme } from "../../theme";
import {
  CheckCircleOutline,
  Place,
  House,
  MailOutline,
  Favorite
} from "@material-ui/icons";
import { IconStep, IconSteps } from "./IconSteps";
import { Logo } from "./Logo";

const useStyles = makeStyles(_theme => ({
  title: {
    textAlign: "center",
    marginTop: "2rem"
  },
  subTitle: {
    textAlign: "center",
    marginTop: "0.5rem"
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1.5rem"
  },
  clippedBackground: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    backgroundImage: `url(${require("../assets/images/landing1-min.jpg")})`,
    clipPath: "polygon(0 60%, 100% 45%, 100% 100%, 0 100%)"
  },
  textSection: {
    backgroundColor: "white",
    padding: "3rem"
  },
  actionSection: {
    backgroundColor: "white",
    padding: "4rem 3rem"
  },
  centeredText: {
    textAlign: "center"
  }
}));

const Title = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.title} variant="h2" component="h1">
      Die Tafel kommt zu dir!
    </Typography>
  );
};

const SubTitle = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.subTitle} variant="h4" component="h2">
      Melde dich jetzt an &amp; bekomme Lebensmittel nach Hause geliefert
    </Typography>
  );
};

const CtaButton = () => {
  const classes = useStyles();
  return (
    <div className={classes.buttonContainer}>
      <Button variant="contained" color="primary">
        <Typography variant="h5" component="span">
          Ich brauche Hilfe
        </Typography>
      </Button>
    </div>
  );
};

const recipientSteps: IconStep[] = [
  {
    icon: CheckCircleOutline,
    title: "Registriere dich",
    description: "Registriere dich auf der Seite, um Lebensmittel zu erhalten"
  },
  {
    icon: Place,
    title: "Route erstellen",
    description: "Wir erstellen die Route für die Lieferungen"
  },
  {
    icon: House,
    title: "Lebensmittel erhalten",
    description: "Du erhältst die Lebensmittel direkt nach Hause geliefert"
  }
];

const donorSteps: IconStep[] = [
  {
    icon: CheckCircleOutline,
    title: "Registriere dich",
    description: "Registriere dich als Helfer"
  },
  {
    icon: MailOutline,
    title: "Wir kontaktieren dich",
    description: "Wir kontaktieren dich und erklären dir die weiteren Schritte"
  },
  {
    icon: Favorite,
    title: "Helfen",
    description: "Du hast es geschafft und hilfst mit"
  }
];

export const LandingPage = () => {
  const classes = useStyles();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <main>
      <section
        style={{
          height: isDesktop ? "100vh" : "unset",
          minHeight: isDesktop ? "500px" : "unset",
          paddingBottom: isDesktop ? "0" : "3rem",
          position: "relative"
        }}
      >
        <Logo />
        <Container>
          <Title />
          <SubTitle />
          <CtaButton />
        </Container>
        {isDesktop && <div className={classes.clippedBackground} />}
      </section>
      <section className={classes.textSection}>
        <Container>
          <Typography
            variant="h4"
            component="h3"
            color="textPrimary"
            className={classes.centeredText}
          >
            LEFAT bringt die Lebensmittel zu dir nach Hause.
            <br />
            Ganz unkompliziert.
          </Typography>
        </Container>
      </section>
      <section>
        <IconSteps steps={recipientSteps} />
      </section>
      <section className={classes.actionSection}>
        <Container>
          <Typography
            variant="h3"
            component="h3"
            color="textPrimary"
            className={classes.centeredText}
          >
            Du möchtest helfen?
          </Typography>
          <Typography variant="h6" className={classes.centeredText}>
            Perfekt! Wir suchen Mitmacher.
          </Typography>
          <div className={classes.buttonContainer}>
            <Button variant="contained" color="primary">
              <Typography variant="h6">Ich möchte mitmachen</Typography>
            </Button>
          </div>
        </Container>
      </section>
      <section>
        <IconSteps steps={donorSteps} />
      </section>
      <section className={classes.actionSection}>
        <Container>
          <Typography
            variant="h3"
            component="h3"
            color="textPrimary"
            className={classes.centeredText}
          >
            Tafel registrieren!
          </Typography>
          <div className={classes.buttonContainer}>
            <Button variant="contained" color="primary">
              <Typography variant="h6">Tafel registrieren</Typography>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
};
