import React, {useState} from 'react';
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
        ...theme.mixins.toolbar
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

        if (anchor) {
            anchor.scrollIntoView({behavior: 'smooth', block: 'center'});
        }
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
    const [value, setValue] = useState(0);
    const classes = useStyles();

    const onChangeHandle = (evt, value) => setValue(value);

    return (
        <>
            <CssBaseline/>
            <AppBar>
                <Toolbar disableGutters>
                    <img src={logo} alt="company logo" className={classes.logo}/>
                    <Tabs value={value} onChange={onChangeHandle} className={classes.tabsContainer}>
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


