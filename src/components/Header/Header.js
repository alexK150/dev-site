import React, {useEffect, useReducer} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CssBaseline from '@material-ui/core/CssBaseline';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import logo from '../../assets/logo-new.svg';
import {headerReducer, initialHeaderState} from "../../state/reducers/headerReducer";
import {CLOSE_MENU, MENU_ITEM_CLICK, OPEN_MENU, SET_LINK_VALUE} from "../../state/reducers/headerTypes";
import {ScrollTop, useStyles} from "./headerMuiStyles";

export const Header = (props) => {
    const [state, dispatch] = useReducer(headerReducer, initialHeaderState);
    const classes = useStyles();

    const handleSetLinkValue = (value) => dispatch({type: SET_LINK_VALUE, payload: value});
    const onChangeHandle = (evt, value) => handleSetLinkValue(value);
    const handleOpenMenu = (event) => dispatch({type: OPEN_MENU, payload: event.currentTarget});
    const handleCloseMenu = () => dispatch({type: CLOSE_MENU});

    useEffect(() => {
        if (window.location.pathname === '/' && state.linkValue !== 0) handleSetLinkValue(0)
        else if (window.location.pathname === '/services' && state.linkValue !== 1) handleSetLinkValue(1)
        else if (window.location.pathname === '/vision' && state.linkValue !== 2) handleSetLinkValue(2)
        else if (window.location.pathname === '/about' && state.linkValue !== 3) handleSetLinkValue(3)
        else if (window.location.pathname === '/contact' && state.linkValue !== 4) handleSetLinkValue(4)
    }, [state.value])

    const menuOptions = [
        {name: "Services", link: "/services"},
        {name: "Software Development", link: "/software"},
        {name: "Mobile Apps Development", link: "/mobile-dev"},
        {name: "Web Development", link: "/web-dev"},
    ]

    const handleMenuItemClick = (evt, idx) => {
        dispatch({type: MENU_ITEM_CLICK, payload: idx})
    }

    return (
        <>
            <CssBaseline/>
            <AppBar>
                <Toolbar disableGutters>
                    <Button
                        component={Link} to="/"
                        className={classes.logoContainer}
                        onClick={() => handleSetLinkValue(0)}
                        disableRipple
                    >
                        <img src={logo} alt="company logo" className={classes.logo}/>
                    </Button>
                    <Tabs value={state.linkValue} onChange={onChangeHandle} className={classes.tabsContainer}>
                        <Tab className={classes.tab} component={Link} to="/" label="Home"/>
                        <Tab
                            aria-owns={state.anchorEl ? "service-menu" : undefined}
                            aria-haspopup={state.anchorEl ? "true" : undefined}
                            onMouseOver={(e) => handleOpenMenu(e)}
                            label="Services"
                            component={Link}
                            to="/services"
                        />
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
            <Menu
                id="service-menu"
                anchorEl={state.anchorEl}
                keepMounted
                open={Boolean(state.anchorEl)}
                onClose={handleCloseMenu}
                MenuListProps={{onMouseLeave: handleCloseMenu}}
                classes={{paper: classes.menuPaper}}
                elevation={0}
            >
                {menuOptions.map((item, idx) => (
                    <MenuItem onClick={(e) => {handleMenuItemClick(e, idx);handleCloseMenu();handleSetLinkValue(1)}}
                              component={Link}
                              to={item.link}
                              classes={{root: classes.menuItemRoot}}
                              selected={idx===state.selectedMenuItemIndex && state.linkValue === 1}
                    >
                        {item.name}
                    </MenuItem>
                ))
                }
            </Menu>
        </>
    )
}
