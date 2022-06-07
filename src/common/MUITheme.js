import { createTheme } from '@material-ui/core/styles';

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
});
