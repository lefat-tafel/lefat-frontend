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
import { IconSteps } from "./IconSteps";
import { Logo } from "./Logo";
import { useTranslation } from "react-i18next";

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
    backgroundImage: `url(${require("../../assets/images/landing1-min.jpg")})`,
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

const DonorSteps = () => {
  const { t } =useTranslation('landingPage');
  const steps = [
    {
      icon: CheckCircleOutline,
      title: t('donorSteps.registration.title'),
      description: t('donorSteps.registration.description'),
    },
    {
      icon: MailOutline,
      title: t('donorSteps.contact.title'),
      description: t('donorSteps.contact.description'),
    },
    {
      icon: Favorite,
      title: t('donorSteps.help.title'),
      description: t('donorSteps.help.description'),
    }
  ];
  return (
    <IconSteps steps={steps} />
  );
}

const RecipientSteps = () => {
  const { t } =useTranslation('landingPage');
  const steps = [
    {
      icon: CheckCircleOutline,
      title: t('recipientSteps.registration.title'),
      description: t('recipientSteps.registration.description'),
    },
    {
      icon: Place,
      title: t('recipientSteps.route.title'),
      description: t('recipientSteps.route.description'),
    },
    {
      icon: House,
      title: t('recipientSteps.delivery.title'),
      description: t('recipientSteps.delivery.description'),
    }
  ];

  return (
    <IconSteps steps={steps} />
  )
}


export const LandingPage = () => {
  const classes = useStyles();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation('landingPage');

  const Title = () => (
    <Typography className={classes.title} variant="h2" component="h1">
      {t('title')}
    </Typography>
  );

  const SubTitle = () => (
    <Typography className={classes.subTitle} variant="h4" component="h2">
      {t('subTitle')}
    </Typography>
  );

  const CtaButton = () => (
    <div className={classes.buttonContainer}>
      <Button variant="contained" color="primary">
        <Typography variant="h5" component="span">
          {t('mainCta')}
        </Typography>
      </Button>
    </div>
  );

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
            {t('summaryTitle')}
            <br />
            {t('summarySubTitle')}
          </Typography>
        </Container>
      </section>
      <section>
        <RecipientSteps />
      </section>
      <section className={classes.actionSection}>
        <Container>
          <Typography
            variant="h3"
            component="h3"
            color="textPrimary"
            className={classes.centeredText}
          >
            {t('volunteerQuestion')}
          </Typography>
          <Typography variant="h6" className={classes.centeredText}>
            {t('volunteerAnswer')}
          </Typography>
          <div className={classes.buttonContainer}>
            <Button variant="contained" color="primary">
              <Typography variant="h6">
                {t('volunteerAction')}
                </Typography>
            </Button>
          </div>
        </Container>
      </section>
      <section>
        <DonorSteps />
      </section>
      <section className={classes.actionSection}>
        <Container>
          <Typography
            variant="h3"
            component="h3"
            color="textPrimary"
            className={classes.centeredText}
          >
            {t('registerFoodbankCallout')}
          </Typography>
          <div className={classes.buttonContainer}>
            <Button variant="contained" color="primary">
              <Typography variant="h6">
                {t('registerFoodbank')}
              </Typography>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
};
