import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { CssBaseline } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "theme";
import IrelandGallery from "../Galleries/IrelandGallery/IrelandGallery";
import ItalyGallery from "../Galleries/ItalyGallery/ItalyGallery";
import GermanyGallery from "../Galleries/GermanyGallery/GermanyGallery";
import FranceGallery from "../Galleries/FranceGallery/FranceGallery";
import AmsterdamGallery from "../Galleries/AmsterdamGallery/AmsterdamGallery";
import LuxembourgGallery from "../Galleries/LuxembourgGallery/LuxembourgGallery";
import KPMGGallery from "../Galleries/KPMGGallery/KPMGGallery";
import SAPGallery from "../Galleries/SAPGallery/SAPGallery";
import Galleries from "../Galleries/GalleriesHome/GalleriesHome";
import About from "../About/About";

const styles = (theme) => ({
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
});

class ContentHolder extends React.Component {
    constructor() {
        super();
        // this.handleClick = this.handleClick.bind(this);
        this.handleGalleryClick = this.handleGalleryClick.bind(this);

        this.state = {
            pageToShow: "galleries",
        };
    }

    handleGalleryClick = (event, country) => {
        const { homeButtonCallback } = this.props;
        event.preventDefault();
        let countrySelected;

        switch (country) {
            case "Ireland":
                countrySelected = 1;
                break;
            case "Italy":
                countrySelected = 2;
                break;
            case "Germany":
                countrySelected = 3;
                break;
            case "France":
                countrySelected = 4;
                break;
            case "Amsterdam":
                countrySelected = 5;
                break;
            case "Luxembourg":
                countrySelected = 6;
                break;
            case "KPMG":
                countrySelected = 7;
                break;
            case "SAP":
                countrySelected = 8;
                break;
            default:
                break;
        }
        homeButtonCallback(countrySelected);
    };

    // handleClick = (event, page) => {
    //     const { homeButtonCallback } = this.props;
    //     event.preventDefault();
    //     const homeButton = page !== "about" ? 0 : 1;
    //     homeButtonCallback(homeButton);
    // };

    render() {
        const { classes, pageToShow, handleSwitchPageCallback } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <CssBaseline />
                    <div className={classNames(classes.layout)}>
                        {pageToShow === "Galleries" && (
                            <Galleries handleSwitchPageCallback={handleSwitchPageCallback} />
                        )}
                        {pageToShow === "About" && <About />}
                        {pageToShow === "Ireland" && <IrelandGallery />}
                        {pageToShow === "Italy" && <ItalyGallery />}
                        {pageToShow === "Germany" && <GermanyGallery />}
                        {pageToShow === "France" && <FranceGallery />}
                        {pageToShow === "Amsterdam" && <AmsterdamGallery />}
                        {pageToShow === "Luxembourg" && <LuxembourgGallery />}
                        {pageToShow === "KPMG" && <KPMGGallery />}
                        {pageToShow === "SAP" && <SAPGallery />}
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

ContentHolder.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentHolder);
