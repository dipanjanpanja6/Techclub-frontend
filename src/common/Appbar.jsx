import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { AppBar, Toolbar, useScrollTrigger, Button, Link, Grid, Fab, Menu, MenuItem, IconButton, Box, ListItemIcon } from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from "@material-ui/core/styles"
import { Link as RouterLink } from "react-router-dom"
import { useHistory, NavLink } from "react-router-dom"
import MenuIcon from "@material-ui/icons/Menu"
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew"
import PersonPinIcon from "@material-ui/icons/PersonPin"

function HideOnScroll(props) {
  const { children } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ threshold: 100, disableHysteresis: true })
  return React.cloneElement(children, {
    elevation: trigger ? 10 : 0,
    color: trigger ? "primary" : "transparent",
  })

  // <Slide appear={false} direction="down" in={!trigger}>
  //   {children}
  // </Slide>
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    color: "white",
    "&:hover": {
      color: "white",
      textDecoration: "none",
    },
  },
  btn: {
    marginLeft: 12,
  },
  sectionMobile: {
    display: "flex",
    alignItems: "center",
    color: "#fff",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      color: "#fff",
    },
  },
}))

function HAppBar(props) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const history = useHistory()
  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Grid className={classes.title}>
              <Link to="/" underline="none" component={RouterLink} variant="h6" className={classes.title}>
                BYTEMONK
              </Link>
            </Grid>
            <Box flex={1} />
            <div className={classes.sectionDesktop}>
              <Button size="small" variant="text" color="inherit" component={NavLink} exact strict to="/">
                Home
              </Button>
              <Button size="small" variant="text" color="inherit" component={NavLink} exact strict to="/event">
                Events
              </Button>
              <Button size="small" variant="text" color="inherit" component={NavLink} to="/showcase" exact strict>
                Projects
              </Button>
              <Button size="small" variant="text" color="inherit" component={NavLink} exact strict to="/FAQ">
                FAQ
              </Button>
              {!props.auth ? (
                <Button size="small" variant="outlined" color="secondary" component={NavLink} exact strict to="/auth">
                  Login
                </Button>
              ) : (
                <>
                  <Fab
                    style={{ background: "transparent" }}
                    size="small"
                    onClick={() => {
                      history.push("/home")
                    }}>
                    <PersonPinIcon style={{ color: "#fff" }} />
                  </Fab>
                  <Fab style={{ background: "transparent", marginInlineStart: 12 }} size="small" onClick={props.out}>
                    <PowerSettingsNewIcon style={{ color: "#fff" }} />
                  </Fab>
                </>
              )}
            </div>
            <div className={classes.sectionMobile}>
              <IconButton onClick={handleMenu} edge="end" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </div>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}>
              <MenuItem onClick={handleClose} component={NavLink} exact strict to="/">
                Home
              </MenuItem>
              <MenuItem onClick={handleClose} component={NavLink} exact strict to="/event">
                Events
              </MenuItem>
              <MenuItem onClick={handleClose} component={NavLink} to="/showcase" exact strict>
                Projects
              </MenuItem>
              <MenuItem onClick={handleClose} component={NavLink} exact strict to="/FAQ">
                FAQ
              </MenuItem>
              {!props.auth ? (
                <MenuItem component={NavLink} exact strict to="/auth" onClick={handleClose}>
                  Login
                </MenuItem>
              ) : (
                [
                  <MenuItem component={NavLink} exact strict to="/home" onClick={handleClose}>
                    <ListItemIcon>
                      <PersonPinIcon />
                    </ListItemIcon>
                    Dashboard
                  </MenuItem>,
                  <MenuItem onClick={props.out}>
                    <ListItemIcon>
                      <PowerSettingsNewIcon />
                    </ListItemIcon>
                    Logout
                  </MenuItem>,
                ]
              )}
            </Menu>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  )
}
export default HAppBar
