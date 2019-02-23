import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
    palette: {
        typography: {
            useNextVariants: true,
        },
        common: { black: "#000", white: "#fff" },
        background: { paper: "#fff", default: "#fcfcfc" },
        primary: {
            light: "rgba(76, 140, 74, 1)",
            main: "rgba(27, 94, 32, 1)",
            dark: "rgba(0, 51, 0, 1)",
            contrastText: "#fff",
        },
        secondary: {
            light: "rgba(164, 164, 164, 1)",
            main: "rgba(117, 117, 117, 1)",
            dark: "rgba(73, 73, 73, 1)",
            contrastText: "#fff",
        },
        error: { light: "#e57373", main: "#f44336", dark: "#d32f2f", contrastText: "#fff" },
        text: {
            primary: "rgba(105, 105, 105, 1)",
            secondary: "rgba(128, 128, 128, 1)",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)",
        },
    },
});
