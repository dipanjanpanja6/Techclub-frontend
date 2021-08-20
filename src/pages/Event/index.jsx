import React, { useState, useEffect } from "react"
import { Grid, Chip, Typography, List, ListItem, ListItemText, Paper, ListItemIcon, ListItemSecondaryAction, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import FavoriteIcon from "@material-ui/icons/Favorite"
import PlusOneIcon from "@material-ui/icons/PlusOne"
import { connect } from "react-redux"
import PropType from "prop-types"
import CircularProgress from "@material-ui/core/CircularProgress"
import EventIcon from "@material-ui/icons/Event"
import { toast } from "react-toastify"
import dateFormat from "dateformat"

import { getAllEvent } from "../../redux/actions/extra"

const style = makeStyles(theme => ({
  intro: {
    height: "50vh",
    textAlign: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "white",
    backgroundImage: `url(${require("../../assets/event.webp")})`,
  },
}))
const Event = props => {
  const sty = style()
  const [add, setAdd] = React.useState(false)
  const [addf, setAddf] = React.useState(false)
  const [projects, setProjects] = React.useState("")

  useEffect(() => {
    document.title = `Events - Tech Club - GCECT`
    props.getAllEvent()
  }, [])

  useEffect(() => {
    if (props.admin) {
      // console.log(props.admin)
      props.admin.success && setProjects(props.admin)
      props.admin.error && toast.error(props.admin.message)
    }
  }, [props.admin])
  const past = projects ? (
    projects.past.map(p => {
      return (
        <ListItem key={p.id}>
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary={p.title} secondary={dateFormat(p.time, "ddd, mmm dS, yyyy, h:MM TT")} />
        </ListItem>
      )
    })
  ) : (
    <CircularProgress />
  )
  const future = projects ? (
    projects.future.map(p => {
      return (
        <ListItem key={p.id} button alignItems="flex-start">
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              new Date(Date.parse(p.createdAt)) - new Date() <= 14 ? (
                <>
                  {p.title}
                  <Chip size="small" style={{ marginInlineStart: 12, backgroundColor: "#f00", color: "#fff", textAlign: "center" }} label="NEW" />
                </>
              ) : (
                ""
              )
            }
            secondary={
              <React.Fragment>
                <Typography component="span" variant="body2" className={sty.inline} color="textPrimary">
                  {dateFormat(p.time, "ddd, mmm dS, yy, h:MM TT")} {"-"}
                </Typography>
                {p.place} | {p.topic}
              </React.Fragment>
            }
          />
        </ListItem>
      )
    })
  ) : (
    <CircularProgress />
  )
  return (
    <Grid container>
      <Grid className={sty.intro} item xs={12}>
        <Typography style={{ marginTop: "25vh" }} variant="h3">
          Event List
        </Typography>
      </Grid>
      <Grid xs={12} item>
        <Paper style={{ padding: 20, margin: 20 }}>
          <Typography variant="h5">Upcoming event list</Typography>
          <br />
          <List>{future}</List>
        </Paper>
        <Paper style={{ padding: 20, margin: 20 }}>
          <Typography variant="h5">Ended event list</Typography>
          <br />
          <List>{past}</List>
        </Paper>
      </Grid>
    </Grid>
  )
}
Event.propType = {
  getAllEvent: PropType.func.isRequired,
  admin: PropType.object.isRequired,
}
const mapToState = state => ({
  admin: state.admin.allEvent,
})
const mapToProps = {
  getAllEvent,
}
export default connect(mapToState, mapToProps)(Event)
