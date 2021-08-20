import React from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListIcon from '@material-ui/icons/List';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeDrawer(props) {    
  const classes = useStyles();


  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.open( false)}
      onKeyDown={props.open(false)}
    >
      <List>
        {['List your Project', 'Recent requirement', 'Showcase', 'Message'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index === 1 ? <InboxIcon /> : <ListIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      
    </div>
  );

  return (
    <div>
     
        
          <SwipeableDrawer
            left='left'
            open={props.state}
            onClose={props.open( false)}
            onOpen={props.open(true)}
          >
            {list()}
          </SwipeableDrawer>
     
      
    </div>
  );
}
