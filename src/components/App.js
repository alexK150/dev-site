import React, { Component } from "react";
import {Header} from "./Header/Header";
import { ThemeProvider } from '@material-ui/styles';
import theme from "./../common/MUITheme";
import {BrowserRouter, Route, Switch} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <>
                        <Header/>
                        <Switch>
                            <Route exact path='/' component={() => <div>Home</div>} />
                            <Route exact path='/services' component={() => <div>services</div>} />
                            <Route exact path='/custom-software' component={() => <div>custom-software</div>} />
                            <Route exact path='/mobile-apps' component={() => <div>mobile-apps</div>} />
                            <Route exact path='/websites' component={() => <div>websites</div>} />
                            <Route exact path='/vision' component={() => <div>vision</div>} />
                            <Route exact path='/about' component={() => <div>about</div>} />
                            <Route exact path='/contact' component={() => <div>contact</div>} />
                            <Route exact path='/estimate' component={() => <div>estimate</div>} />
                        </Switch>
                    </>
                </BrowserRouter>
            </ThemeProvider>
        )
    }
}

export default App;
