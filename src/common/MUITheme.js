import { createTheme } from '@material-ui/core/styles';
// https://colorhunt.co/palette/1f46903a5ba0ffa500ffe5b4

const mainBlue = "#1F4690";
const mainOrange = "#FFA500";

export default createTheme({
    palette: {
        common: {
            mainBlue,
            mainOrange,
        },
        primary: {
            main: mainBlue
        },
        secondary: {
            main: mainOrange,
        },
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
        }
    }
});
