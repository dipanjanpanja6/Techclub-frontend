import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, SvgIcon, Tab, Tabs, Link, Box } from "@material-ui/core"

import PersonPinIcon from "@material-ui/icons/PersonPin"

// import ThumbDown from '@material-ui/icons/ThumbDown';
// import ThumbUp from '@material-ui/icons/ThumbUp';
import EventAvailableIcon from "@material-ui/icons/EventAvailable"
import FolderSharedIcon from "@material-ui/icons/FolderShared"
// import InfoIcon from '@material-ui/icons/Info';
// import { connect } from 'react-redux';
import Events from "./UIDEvents"
import Project from "./UIDProject"
import { Link as RouterLink } from "react-router-dom"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div role="tabpanel" hidden={value !== index} id={`scrollable-prevent-tabpanel-${index}`} aria-labelledby={`scrollable-prevent-tab-${index}`} {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}))

function UserContent(props) {
  const uid = props.uid
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="off" aria-label="scrollable prevent tabs example">
          <Tab icon={<EventAvailableIcon />} aria-label="phone" {...a11yProps(0)} />
          <Tab icon={<FolderSharedIcon />} aria-label="favorite" {...a11yProps(1)} />
          <Tab icon={<PersonPinIcon />} aria-label="person" {...a11yProps(2)} />
          <Tab
            icon={
              <SvgIcon>
                <path
                  d="M18 2c-.9 0-2 1-2 2H8c0-1-1.1-2-2-2H2v9c0 1 1 2 2 2h2.2c.4 2 1.7 3.7 4.8 4v2.08C8 19.54 8 22 8 22h8s0-2.46-3-2.92V17c3.1-.3 4.4-2 4.8-4H20c1 0 2-1 2-2V2h-4M6 11H4V4h2v7m14 0h-2V4h2v7z"
                  fill="#FFDF00"
                />
              </SvgIcon>
            }
            aria-label="help"
            {...a11yProps(3)}
          />
          {/* <Tab icon={<InfoIcon />} aria-label="shopping" {...a11yProps(4)} />
          <Tab icon={<ThumbDown />} aria-label="up" {...a11yProps(5)} />
          <Tab icon={<ThumbUp />} aria-label="down" {...a11yProps(6)} /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Events uid={uid} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Project uid={uid} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        this tab is under development. Need class A member. If you are interest in this Project{" "}
        <Link component={RouterLink} to="/feedback">
          contact Team
        </Link>{" "}
        or{" "}
        <Link component={RouterLink} to="/feedback">
          {" "}
          share your opinion
        </Link>{" "}
        about this section.
      </TabPanel>
      <TabPanel value={value} index={3}>
        Trying to earn Trophy to showcase
      </TabPanel>
      <TabPanel value={value} index={4}>
        this tab is under development. Need class A member. If you are interest in this Project{" "}
        <Link component={RouterLink} to="/feedback">
          contact Team
        </Link>{" "}
        or{" "}
        <Link component={RouterLink} to="/feedback">
          {" "}
          share your opinion
        </Link>{" "}
        about this section.
      </TabPanel>
      <TabPanel value={value} index={5}>
        this tab is under development. Need class A member. If you are interest in this Project{" "}
        <Link component={RouterLink} to="/feedback">
          contact Team
        </Link>{" "}
        or{" "}
        <Link component={RouterLink} to="/feedback">
          {" "}
          share your opinion
        </Link>{" "}
        about this section.
      </TabPanel>
      <TabPanel value={value} index={6}>
        this tab is under development. Need class A member. If you are interest in this Project{" "}
        <Link component={RouterLink} to="/feedback">
          contact Team
        </Link>{" "}
        or{" "}
        <Link component={RouterLink} to="/feedback">
          {" "}
          share your opinion
        </Link>{" "}
        about this section.
      </TabPanel>
    </div>
  )
}
UserContent.propTypes = {
  uid: PropTypes.string.isRequired,
}

export default UserContent
