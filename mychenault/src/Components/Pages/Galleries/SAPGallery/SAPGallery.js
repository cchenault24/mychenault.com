import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import theme from "theme";
import { Typography } from "@material-ui/core";
import * as ImageCache from "../../../ImageCaches/ImageCache";

const styles = (theme) => ({
    layout: {
        width: "auto",
        margin: "56px auto ",
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: "auto",
            marginRight: "auto",
        },
    },
    paragraph: {
        textIndent: "50px",
    },
    mainHeader: {
        margin: "25px 0 5px",
    },
    header: {
        margin: "20px 0 5px",
    },
});

const photos = ImageCache.sapImagesList.loadImages();

class SAPGallery extends React.Component {
    constructor() {
        super();
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }

    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <CssBaseline />
                    <div className={classNames(classes.layout)}>
                        <Typography
                            className={classes.subheader}
                            variant="h4"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                        >
                            SAP
                        </Typography>
                        <Gallery photos={photos} onClick={this.openLightbox} />
                        <Lightbox
                            images={photos}
                            onClose={this.closeLightbox}
                            onClickPrev={this.gotoPrevious}
                            onClickNext={this.gotoNext}
                            currentImage={this.state.currentImage}
                            isOpen={this.state.lightboxIsOpen}
                        />
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

SAPGallery.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SAPGallery);
