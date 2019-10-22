import React, { Component } from 'react';
import SideBarStyles from './SideBarStyles';
import { withStyles } from '@material-ui/styles';
import { 
  Drawer,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

class SideBar extends Component {
    handleDrawerClose = () => {

    }

    handleDrawerOpen = () => {

    }
    render() {
        const { 
            classes,
        } = this.props;

        const direction = 'rtl';

        return (
            <div className={classes.root}>
              <Drawer
                variant="permanent"
                className={classes.drawerOpen}
                open={true}
              >
                <div className={classes.toolbar}>
                  <IconButton onClick={this.handleDrawerClose}>
                    {direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                  </IconButton>
                </div>
                <Divider />
                <List>
                  {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                      <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
                <Divider />
                <List>
                  {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                      <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
              <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                  facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                  gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                  donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                  adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                  Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                  imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                  arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                  donec massa sapien faucibus et molestie ac.
                </Typography>
              </main>
            </div>
        );
    }
}

export default withStyles(SideBarStyles)(SideBar);