import React, { Component } from 'react';
import { 
    AppBar,
    Toolbar,
    IconButton,
    Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/styles';
import TopBarStyles from './TopBarStyles';

class TopBar extends Component {

    render() {
        const {
            classes
        } = this.props;
        return (
            <AppBar
                position="fixed"
                className={classes.appBarShift}
            >
                <Toolbar>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.handleDrawerOpen}
                    edge="start"
                    className={classes.menuButton}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                    Mini variant drawer
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(TopBarStyles)(TopBar)