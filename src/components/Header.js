import React, {useEffect, useReducer} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CssBaseline from '@material-ui/core/CssBaseline';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

import logo from './../assets/logo-new.svg';
import {headerReducer, initialHeaderState} from "../state/reducers/headerReducer";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    logo: {
        height: '7em'
    },
    tabsContainer: {
        marginLeft: 'auto'
    },
    toolBarMargin: {
        ...theme.mixins.toolbar,
        marginTop: "-2em"
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    btn: {
        ...theme.typography.headerBtn,
        borderRadius: "50px",
        textTransform: "none",
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    }
}));

function ScrollTop(props) {
    const {children, window} = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) anchor.scrollIntoView({behavior: 'smooth', block: 'center'});
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

export const Header = (props) => {
    const [state, dispatch] = useReducer(headerReducer, initialHeaderState);
    const classes = useStyles();

    useEffect(() => {
        if (window.location.pathname === '/' && state.linkValue !== 0) dispatch({type: 'SET_LINK_VALUE', payload: 0})
        else if (window.location.pathname === '/services' && state.linkValue !== 1) dispatch({type: 'SET_LINK_VALUE', payload: 1})
        else if (window.location.pathname === '/vision' && state.linkValue !== 2) dispatch({type: 'SET_LINK_VALUE', payload: 2})
        else if (window.location.pathname === '/about' && state.linkValue !== 3) dispatch({type: 'SET_LINK_VALUE', payload: 3})
        else if (window.location.pathname === '/contact' && state.linkValue !== 4) dispatch({type: 'SET_LINK_VALUE', payload: 4})
    }, [state.value])

    const onChangeHandle = (evt, value) => dispatch({type: 'SET_LINK_VALUE', payload: value});

    return (
        <>
            <CssBaseline/>
            <AppBar>
                <Toolbar disableGutters>
                    <Button
                        component={Link} to="/"
                        className={classes.logoContainer}
                        onClick={() => dispatch({type: 'SET_LINK_VALUE', payload: 0})}
                        disableRipple
                    >
                        <img src={logo} alt="company logo" className={classes.logo}/>
                    </Button>
                    <Tabs value={state.linkValue} onChange={onChangeHandle} className={classes.tabsContainer}>
                        <Tab className={classes.tab} component={Link} to="/" label="Home"/>
                        <Tab label="Services" component={Link} to="/services"/>
                        <Tab label="Vision" component={Link} to="/vision"/>
                        <Tab label="About us" component={Link} to="/about"/>
                        <Tab label="Contact us" component={Link} to="/contact"/>
                    </Tabs>
                    <Button className={classes.btn} variant='contained' color='secondary'>
                        Button
                    </Button>
                </Toolbar>
            </AppBar>
            <div className={classes.toolBarMargin}/>
            <Toolbar id="back-to-top-anchor"/>
            <Container>
                <Box my={2}>
                {/*   for content */}
                </Box>
            </Container>
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon/>
                </Fab>
            </ScrollTop>
        </>
    )
}
