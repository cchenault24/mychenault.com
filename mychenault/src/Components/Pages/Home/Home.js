import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "theme";
import FranceImg from "Images/Home/France.jpg";
import GermanyImg from "Images/Home/Germany.jpg";
import ItalyImg from "Images/Home/Italy.jpg";
import IrelandImg from "Images/Home/Ireland.jpg";
import KPMGImg from "Images/Home/KPMG.jpg";
import SAPImg from "Images/Home/SAP.jpg";
import LuxembourgImg from "Images/Home/Luxembourg.jpg";
import AmsterdamImg from "Images/Home/Amsterdam.jpg";

const styles = (theme) => ({
    appBar: {
        position: "relative",
        maxHeight: "64px",
    },
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: "60vw",
        margin: "0 auto",
        padding: "30px 0px 20px",
    },
    heroSubcontent: {
        maxWidth: "40vw",
        margin: "0 auto",
    },
    heroAboutMe: {
        textAlign: "center",
        margin: "30px 0 0",
    },
    layout: {
        width: "auto",
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: "auto",
            marginRight: "auto",
        },
    },
    cardGrid: {
        margin: "24px auto",
        padding: `32px 28px`,
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    cardMedia: {
        paddingTop: "56.25%", // 16:9
    },
    cardActions: {
        flexGrow: 1,
        justifyContent: "center",
    },
    cardContent: {
        flexGrow: 1,
        paddingBottom: "0",
    },
    footer: {
        position: "fixed",
        bottom: "0",
        width: "100%",
        backgroundColor: theme.palette.background.paper,
        padding: "3px 0",
    },
});

const cards = [
    { key: "1", Country: "Ireland", Image: IrelandImg },
    { key: "2", Country: "Italy", Image: ItalyImg },
    { key: "3", Country: "Germany", Image: GermanyImg },
    { key: "4", Country: "France", Image: FranceImg },
    { key: "5", Country: "Amsterdam", Image: AmsterdamImg },
    { key: "6", Country: "Luxembourg", Image: LuxembourgImg },
    { key: "7", Country: "KPMG", Image: KPMGImg },
    { key: "8", Country: "SAP", Image: SAPImg },
];

class Home extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <CssBaseline />

                    <div className={classes.heroUnit}>
                        <div className={classes.heroContent}>
                            <Typography
                                component="h1"
                                variant="h1"
                                align="center"
                                color="textPrimary"
                                gutterBottom
                            >
                                Study Abroad Europe
                            </Typography>
                            <div className={classes.heroSubcontent}>
                                <Typography
                                    component="h2"
                                    variant="h2"
                                    align="center"
                                    color="textPrimary"
                                    gutterBottom
                                >
                                    Web Design
                                </Typography>
                            </div>
                            <div className={classes.heroAboutMe}>
                                <Button variant="outlined" size="medium">
                                    Learn More About The Trip
                                </Button>
                            </div>
                        </div>
                    </div>
                    <main>
                        <div className={classNames(classes.layout, classes.cardGrid)}>
                            <Grid container spacing={40}>
                                {cards.map((card, index) => (
                                    <Grid item key={index} sm={6} md={4} lg={3}>
                                        <Card className={classes.card}>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image={card.Image} // eslint-disable-line max-len
                                                title="Image title"
                                            />
                                            <CardContent className={classes.cardContent}>
                                                <Typography
                                                    variant="h6"
                                                    component="h6"
                                                    align="center"
                                                >
                                                    {card.Country}
                                                </Typography>
                                            </CardContent>
                                            <CardActions className={classes.cardActions}>
                                                <Button size="small" color="primary">
                                                    View
                                                </Button>
                                                <Button size="small" color="primary">
                                                    Download
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    </main>
                    <footer className={classes.footer}>
                        <Typography
                            variant="caption"
                            align="center"
                            color="textSecondary"
                            component="p"
                        >
                            Copyright © mychenault.com - 2017 Study Abroad Europe: Web Design
                        </Typography>
                    </footer>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
