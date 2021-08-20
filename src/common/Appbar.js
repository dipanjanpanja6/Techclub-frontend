import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { AppBar, Toolbar, useScrollTrigger, Button, Link, Grid, Fab } from "@material-ui/core"
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
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  //   window: PropTypes.func,
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
}))

function HAppBar(props) {
  // console.log(props);

  const classes = useStyles()
  const history = useHistory()
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
    script.async = true
    document.body.appendChild(script)
  }, [])
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                             <MenuIcon /> 
                        </IconButton> */}

            <Grid className={classes.title}>
              <Link to="/" underline="none" component={RouterLink} variant="h6" className={classes.title}>
                GCECT Tech club
              </Link>
            </Grid>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark ">
              <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
                  <li className="nav-item active">
                    <NavLink exact strict to="/" className="nav-link">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact strict to="/event" className="nav-link">
                      Events
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/showcase" exact strict className="nav-link">
                      Projects
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact strict to="/FAQ" className="nav-link">
                      FAQ
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="Inline login ml-auto ">
                {!props.auth && (
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => {
                      history.push("/auth")
                    }}>
                    Login
                  </Button>
                )}
                {props.auth && (
                  <>
                    <Fab style={{ background: "transparent" }} size="small" onClick={props.out}>
                      <PowerSettingsNewIcon style={{ color: "#fff" }} />
                    </Fab>
                    <Fab
                      style={{ background: "transparent", marginInlineStart: 12 }}
                      size="small"
                      onClick={() => {
                        history.push("/home")
                      }}>
                      <PersonPinIcon style={{ color: "#fff" }} />
                    </Fab>
                  </>
                )}

                <Button
                  style={{ marginLeft: 12 }}
                  variant="outlined"
                  color="secondary"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbarTogglerDemo02"
                  aria-controls="navbarTogglerDemo02"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  {/* <span className="navbar-toggler-icon"></span> */}
                  <MenuIcon />
                </Button>
              </div>
            </nav>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  )
}
export default HAppBar
