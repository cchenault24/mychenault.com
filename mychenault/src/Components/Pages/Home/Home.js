import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "theme";
import Galleries from "../Galleries/Galleries";
import About from "../About/About";

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
    },
});

class Home extends React.Component {
    constructor() {
        super();

        this.handleAboutClicked = this.handleAboutClicked.bind(this);
        this.handleGalleriesClicked = this.handleGalleriesClicked.bind(this);

        this.state = {
            selectedIndex: 0,
        };
    }

    handleAboutClicked = () => {
        this.setState({ selectedIndex: 1 });
    };
    handleGalleriesClicked = () => {
        this.setState({ selectedIndex: 0 });
    };

    render() {
        const { classes } = this.props;
        const { selectedIndex } = this.state;
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <CssBaseline />
                    <div className={classes.heroUnit}>
                        <div className={classes.heroContent}>
                            <Typography
                                className={classes.header}
                                component="h1"
                                variant="h1"
                                align="center"
                                color="primary"
                                gutterBottom
                            >
                                Study Abroad Europe
                            </Typography>
                            <div className={classes.heroSubcontent}>
                                <Typography
                                    className={classes.header}
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
                                {selectedIndex === 0 && (
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        size="medium"
                                        onClick={this.handleAboutClicked}
                                    >
                                        Learn More About The Trip
                                    </Button>
                                )}
                                {selectedIndex === 1 && (
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        size="medium"
                                        onClick={this.handleGalleriesClicked}
                                    >
                                        Back to Galleries
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                    {selectedIndex === 0 && <Galleries />}
                    {selectedIndex === 1 && <About />}
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
