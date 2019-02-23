import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "theme";
import ContentHolder from "../ContentHolder/ContentHolder";

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
    footer: {
        position: "fixed",
        bottom: "0",
        width: "100%",
        backgroundColor: theme.palette.background.paper,
        padding: "3px 0",
    },
    header: {
        pointerEvent: "none",
        fontWeight: "500",
    },
    subheader: {
        pointerEvent: "none",
    },
});

class Home extends React.Component {
    constructor() {
        super();

        this.handleSwitchPage = this.handleSwitchPage.bind(this);

        this.state = {
            currentPage: "Galleries",
            inGallery: false,
        };
    }

    handleSwitchPage = (event, pageToSwitchTo) => {
        event.preventDefault();
        const { currentPage } = this.state;
        const inGallery = currentPage !== "Galleries" && currentPage !== "About" ? true : false;
        this.setState({ currentPage: pageToSwitchTo, inGallery });
    };

    render() {
        const { classes } = this.props;
        const { currentPage } = this.state;
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <CssBaseline />
                    <div className={classes.heroUnit}>
                        <div className={classes.heroContent}>
                            <Typography
                                className={classes.header}
                                variant="h2"
                                align="center"
                                color="primary"
                                gutterBottom
                            >
                                Study Abroad 2017
                            </Typography>
                            <div className={classes.heroSubcontent}>
                                <Typography
                                    className={classes.subheader}
                                    variant="h4"
                                    align="center"
                                    color="textPrimary"
                                    gutterBottom
                                >
                                    Web Design - Europe
                                </Typography>
                            </div>
                            <div className={classes.heroAboutMe}>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    size="medium"
                                    onClick={(event) => {
                                        currentPage !== "Galleries"
                                            ? this.handleSwitchPage(event, "Galleries")
                                            : this.handleSwitchPage(event, "About");
                                    }}
                                >
                                    {currentPage !== "Galleries"
                                        ? "Back to Galleries"
                                        : "Learn More About The Trip"}
                                </Button>
                            </div>
                        </div>
                    </div>
                    <ContentHolder
                        pageToShow={currentPage}
                        handleSwitchPageCallback={this.handleSwitchPage}
                    />
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
    homeButtonCallback: PropTypes.func,
};

export default withStyles(styles)(Home);
