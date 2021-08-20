import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles ,useTheme} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { List, ListItemText, ListItemSecondaryAction, Avatar, ListItem, ListItemAvatar, IconButton } from '@material-ui/core';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { getUserList } from '../redux/actions/user'
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { useHistory,useLocation } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import UserCard from '../user/UserCard'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <List dense>

          {children}
          </List>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  rootL:{
    display: 'flex',
    // minHeight: '30vw',
  }
}));
UserList.propTypes = {
  getUserList: PropTypes.func.isRequired,
  userList: PropTypes.object.isRequired
}
const mapToState = (state) => ({
  userList: state.admin.userList
})
const mapToProps = {
  getUserList
}


function UserList(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  const location=useLocation()
  const history = useHistory()
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [state, setState] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [uid, setUid] = React.useState({});

  useEffect(() => {
    props.getUserList()
  }, [])
  useEffect(() => {
    if (props.userList.success === true) {
      setState(props.userList)
    } else if (props.userList.error === true) {
      toast.error(props.userList.message)
    }

  }, [props.userList])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const redirectUserPage = (uid) => {
    // console.log(uid);
    setUid(uid)
    setOpen(true)
  }
  const switchCard = () => {
    setOpen(!open)
  }
  const class_a = state ? state.classA.map(p => {
    return (
      <ListItem button onClick={()=>redirectUserPage(p)} key={p.uid}>
        <ListItemAvatar  ><Avatar src={p.userImage} /></ListItemAvatar>
        <ListItemText primary={p.name} secondary={p.email} />
        {/* <ListItemSecondaryAction>
          <IconButton>
            <ThumbDownIcon />
          </IconButton>
          <IconButton>
            <ThumbUpIcon />
          </IconButton>
        </ListItemSecondaryAction> */}
      </ListItem>
    )
  }) : <CircularProgress />
  const class_b = state ? state.classB.map(p => {
    return (
      <ListItem button onClick={() => redirectUserPage(p)} key={p.uid}>
        <ListItemAvatar ><Avatar src={p.userImage} /></ListItemAvatar>
        <ListItemText primary={p.name} secondary={p.email} />
        {/* <ListItemSecondaryAction>
          <IconButton>
            <ThumbDownIcon />
          </IconButton>
          <IconButton>
            <ThumbUpIcon />
          </IconButton>
        </ListItemSecondaryAction> */}
      </ListItem>
    )
  }) : <CircularProgress />
  const class_c = state ? state.classC.map(p => {
    return (
      <ListItem button onClick={() => redirectUserPage(p)} key={p.uid}>
        <ListItemAvatar ><Avatar src={p.userImage} /></ListItemAvatar>
        <ListItemText primary={p.name} secondary={p.email} />
        {/* <ListItemSecondaryAction>
          <IconButton>
            <ThumbDownIcon />
          </IconButton>
          <IconButton>
            <ThumbUpIcon />
          </IconButton>
        </ListItemSecondaryAction> */}
      </ListItem>
    )
  }) : <CircularProgress />
  return (
    <div className={matches? classes.rootL:classes.root}>

      <Tabs orientation={matches?"vertical":'horizontal'} value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="ClassC" {...a11yProps(0)} />
        <Tab label="ClassB" {...a11yProps(1)} />
        <Tab label="Pro" {...a11yProps(2)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        {/* <List dense> */}
          {class_c}
        {/* </List> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <List dense>
          {class_b}
        </List>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <List dense>
          {class_a}
        </List>
      </TabPanel>
      <UserCard open ={open} switchCard={switchCard} state={uid}/>
    </div>
  );
}

export default connect(mapToState, mapToProps)(UserList)