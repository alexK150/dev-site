import React, { Component } from "react";
import {Header} from "./Header";
import { ThemeProvider } from '@material-ui/styles';
import theme from "./../common/MUITheme";

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Header/>
            </ThemeProvider>
        )
    }
}

export default App;
