import { Grid, Link, Paper, Typography, Divider } from "@material-ui/core"
import Copyright from "../common/copyright"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link as RouterLink } from "react-router-dom"

const sty = makeStyles(theme => ({
  footer: {
    width: "100%",
    // color: 'white',
    background: "transparent",
    display: "block",
    position: "relative",
    "&:after": {
      content: '""',
      background: "linear-gradient( rgb(255, 255, 255), rgb(75, 168, 255))",
      background: `url(${require("../assets/footer.webp")})`,
      opacity: "0.8",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      position: "absolute",
      zIndex: -1,
    },
  },
  rows: {
    display: "flex",
    flexFlow: "column",
    paddingLeft: 20,
  },
}))

const Footer = () => {
  const style = sty() 
  return (
    <Paper elevation={10} className={style.footer}>
      <Grid container style={{ marginBottom: 20 }}>
        <Grid item container className={style.rows} xs={12} sm={4}>
          <Typography gutterBottom variant="h5" bold="true" style={{ padding: "20px 0px" }}>
            Quick Links
          </Typography>
          <Grid style={{ display: "flex", flexFlow: "column", textAlign: "left" }}>
            <Link gutterBottom underline="none" variant="inherit" color="inherit" rel="noreferrer" target="_blank" href="http://gcect.ac.in">
              Academic Calender
            </Link>
            <Link gutterBottom color="inherit" rel="noreferrer" target="_blank" href="http://gcect.ac.in">
              Central Library
            </Link>
            <Link gutterBottom color="inherit" rel="noreferrer" target="_blank" href="http://gcect.ac.in">
              Internal Website
            </Link>
          </Grid>
        </Grid>
        <Grid item container className={style.rows} xs={12} sm={4}>
          <Typography gutterBottom variant="h5" bold="true" style={{ padding: "20px 0px" }}>
            Events
          </Typography>
          <Grid style={{ display: "flex", flexFlow: "column", textAlign: "left" }}>
            <Link gutterBottom component={RouterLink} color="inherit" to="/event/coding">
              Coding challenge
            </Link>
            <Link gutterBottom component={RouterLink} color="inherit" to="/required">
              Require Class B member
            </Link>
            <Link gutterBottom component={RouterLink} color="inherit" to="/showcase">
              Showcase
            </Link>
          </Grid>
        </Grid>
        <Grid item container className={style.rows} xs={12} sm={4}>
          <Typography gutterBottom variant="h5" bold="true" style={{ padding: "20px 0px" }}>
            Get Helped
          </Typography>
          <Grid style={{ display: "flex", flexFlow: "column", textAlign: "left" }}>
            <Link gutterBottom component={RouterLink} color="inherit" to="/privacy">
              Accessibility
            </Link>
            <Link gutterBottom component={RouterLink} color="inherit" to="/privacy">
              Privacy Policy
            </Link>
            <Link gutterBottom component={RouterLink} color="inherit" to="/feedback">
              Get Helped with this Website
            </Link>
            <Link gutterBottom component={RouterLink} color="inherit" to="/feedback">
              Send Website Corrections
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <Copyright /> 
    </Paper>
  )
}
export default Footer
