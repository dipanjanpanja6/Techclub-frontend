import React, { useEffect } from 'react';
import { connect } from "react-redux";
import PropType from "prop-types";
import { getUser } from '../../redux/actions/user'

import ShoutBox from '../../common/ShoutBox'
import { makeStyles,withStyles, useTheme } from '@material-ui/core/styles';
import { Typography, Grid, Tab, Tabs, useMediaQuery, Badge, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Box, Divider, Avatar, } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People'; import AssignmentIcon from '@material-ui/icons/Assignment';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import { Link } from 'react-router-dom';
import UserList from './userList'
import ProjectSubmit from './projectSubmit'
import Event from './EventManagement'
import Skeleton from '@material-ui/lab/Skeleton';
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            // style={{width:'100%'}}
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}

            {...other}
        >
            {value === index && <Box p={1} >{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropType.node,
    index: PropType.any.isRequired,
    value: PropType.any.isRequired,
};

var myArray = ['#ff1744', '#ff6f00', '#37474f', '#ff3d00', "#dd2c00", "#33691e", "#558b2f", "#1b5e20", "#004d40", "#2e7d32", "#00695c", "#43a047", "#0091ea", "#0277bd", "#01579b", "#304ffe", "#1a237e", "#d500f9", "#651fff", "#4a148c", "#9c27b0", "#d50000", "#ff1744", "#f50057", "#f44336", "#e91e63", "#ffd600", "#ffea00", "#ff6f00", "#6d4c41", "#212121"]
var rand = myArray[Math.floor(Math.random() * myArray.length)];
// var rand ='#'+(Math.random()*0xFFFFFF<<0).toString(16)


const useStyles = makeStyles((theme) => ({
    intro: {
        [theme.breakpoints.down('xs')]: {
            padding: '60px 0 0',
            flexFlow: 'column',
            height: 330,
            textAlign:'center'
        },
        // [theme.breakpoints.up('md')]:{
        //     flexDirection:'inherit'
        // }

        height: 270,
        paddingLeft: 20,
        textAlign: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        background: '#48f',
        backgroundColor: rand
        // backgroundImage: 'url(https://www.marsdd.com/wp-content/uploads/2020/01/blog-tech-conferences.jpg)',
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        minHeight: '50vw',
    },
    tabs: {

        borderRight: `1px solid ${theme.palette.divider}`,
    },
    avatar: {
        height: '15vw', width: '15vw', marginRight: 25, maxHeight: 150, maxWidth: 150 ,minHeight:140,minWidth:140

    },
    detx:{
        [theme.breakpoints.down('xs')]: {
            textAlign:'center'
        },
        textAlign:'left'
    }
}));

function Main(props) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    const [state, setState] = React.useState('')
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        document.title = 'Dashboard | - Tech Club - GCECT';
        props.getUser()
    }, [])

    useEffect(() => {
        if (props.admin.data) {
            localStorage.setItem("shout_name", props.admin.data.name)
            setState(props.admin.data)
        }
    }, [props.admin.data])

    const sty = useStyles();
    const SmallAvatar = withStyles((theme) => ({
        root: {
          width: 30,
          height: 30,
          borderRadius:'50%',
          backgroundColor:theme.palette.background.paper,
          border: `2px solid ${theme.palette.background.paper}`,
        },
      }))(StarsRoundedIcon);
    //   const colorChng=()=>{
    //    state.class=='classA'?'#f00':state.class=='classB'?'#ff0':'#eee'
    //   }
    return (
        <div>
            <Grid className={sty.container} container justify='center' alignContent='center'>
                <Grid container alignItems="center" className={sty.intro} item xs={12}>
                    
                    {state ? <>
                        <Badge
                            overlap="circle"
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            badgeContent={<SmallAvatar style={{color:(state.class=='classA'?'#f00':state.class=='classB'?'#ff0':'#eee')}}
                             />}
                        >
                            <Avatar className={sty.avatar} alt={state.name} src={state.userImage}></Avatar>
                        </Badge>
                        <Grid className={sty.detx} >
                            <Typography variant='h5'>
                                Welcome {state.name}
                            </Typography>
                            <Typography variant='h6'>
                                {state.email}
                            </Typography>
                            <Typography variant='subtitle2'>
                                {state.clg}
                            </Typography>
                            {/* <Typography variant='subtitle2'>
                                {state.address}
                            </Typography> */}
                            <Typography variant='subtitle2'>
                                {state.Ph}
                            </Typography>
                            <Typography variant='subtitle2'>
                                {state.class}
                            </Typography>
                        </Grid>
                    </> : <>
                            <Skeleton variant='circle' className={sty.avatar} animation='pulse' />
                            <Grid style={{ textAlign: 'left' }}>
                                <Skeleton variant='text' width={200} />
                                <Skeleton variant='text' width={290} />
                                <Skeleton variant='text' width={230} />
                                <Skeleton variant='text' width={130} />
                            </Grid>
                        </>}
                </Grid>

                <Grid container justify='center' spacing={2}
                    style={{ margin: 12 }}
                >
                    <Grid item style={{
                        // minHeight: 800,
                        marginBottom: 'inherit'
                    }} md={8} xs={12}>

                        <div className={matches ? '' : sty.root}>
                            <Tabs
                                orientation={matches ? "horizontal" : "vertical"}
                                variant="scrollable"
                                value={value}
                                onChange={handleChange}
                                className={sty.tabs}
                            >
                                <Tab label="Project Submit" id='vertical-tab-0' />
                                <Tab label="Manage Event" id='vertical-tab-1' />
                                <Tab label="User Management" id='vertical-tab-2' />
                                <Tab label="Account Settings" id='vertical-tab-3' />

                            </Tabs>
                            <TabPanel value={value} index={0}>
                                <ProjectSubmit class={state.class}/>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <Event class={state.class} />
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <UserList />
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                <Typography variant='caption'>For now this features is disable. Contact team</Typography>
                            </TabPanel>

                        </div>

                    </Grid>

                    <Grid  item md={4} xs={12}>
                        <ShoutBox hight={'70vh'} uid={state.uid}/>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    );
}
Main.propType = {
    User: PropType.object.isRequired,
    getUser: PropType.func.isRequired,
    class:PropType.string.isRequired
}
const mapActions = {
    getUser
}
const mapState = (state) => ({
    admin: state.admin.user

})
export default connect(mapState, mapActions)(Main)