import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Gallery from "react-photo-gallery";
import theme from "theme";
import { Typography } from "@material-ui/core";

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

const photos = [
    {
        src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
        width: 4,
        height: 3,
    },
    {
        src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
        width: 1,
        height: 1,
    },
    {
        src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
        width: 3,
        height: 4,
    },
    {
        src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
        width: 3,
        height: 4,
    },
    {
        src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
        width: 3,
        height: 4,
    },
    {
        src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
        width: 4,
        height: 3,
    },
    {
        src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
        width: 3,
        height: 4,
    },
    {
        src: "https://source.unsplash.com/PpOHJezOalU/800x599",
        width: 4,
        height: 3,
    },
    {
        src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
        width: 4,
        height: 3,
    },
];

class LuxembourgGallery extends React.Component {
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
                            Luxembourg
                        </Typography>
                        <Gallery photos={photos} />
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

LuxembourgGallery.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LuxembourgGallery);
