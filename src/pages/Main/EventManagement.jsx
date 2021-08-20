import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import PropType from "prop-types"
import { getEvent } from "../../redux/actions/user"

import { url } from "../../config/requirements"
import { Link as RouterLink } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Grid, Fab, Divider, TextField, Link, ListItem, ListItemText, ListItemIcon, List } from "@material-ui/core"
import CircularProgress from "@material-ui/core/CircularProgress"
import EventIcon from "@material-ui/icons/Event"
import { toast } from "react-toastify"
import AddCircleIcon from "@material-ui/icons/AddCircle"
import dateFormat from "dateformat"

const useStyles = makeStyles(theme => ({
  inline: {
    display: "inline",
  },
  root: {
    flexDirection: "column",
    // backgroundColor: theme.palette.background.paper,
    display: "flex",
    paddingLeft: 12,
  },
  from: {
    display: "flex",
    flexFlow: "column",
  },
}))
function EventManagement(props) {
  const sty = useStyles()
  const [switchAdd, setSwitchAdd] = React.useState(false)
  const [submitting, setSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [list, listState] = React.useState({ title: "", topic: "", gitLink: "", desc: "", place: "", time: "" })
  const [state, setState] = React.useState({ title: "", topic: "", gitLink: "", desc: "", place: "", time: "" })
  const [projects, setProjects] = React.useState("")

  useEffect(() => {
    props.getEvent()
  }, [])

  useEffect(() => {
    if (props.admin.success) {
      console.log(props.admin)
      setProjects(props.admin)
    } else if (props.admin.error === true) {
      toast.error(props.admin.message)
    }
  }, [props.admin])

  const submit = e => {
    e.preventDefault()
    console.log(state)
    setSubmitted(false)
    setSubmitting(true)
    fetch(`${url}/addevent`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(state),
    })
      .then(res => {
        res.json().then(d => {
          console.log(d)
          setSubmitted(true)
          setSubmitting(false)
          props.getEvent()
        })
      })
      .catch(r => {
        setSubmitting(false)
        console.log(r)
        toast.error("Failed! Try again sometime later or contact team")
      })
  }
  const handelChange = e => {
    setState({ ...state, [e.target.id]: e.target.value })
  }
  const past = projects ? (
    projects.past.map(p => {
      return (
        <ListItem key={p.id}>
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary={p.title} secondary={dateFormat(p.time, "ddd, mmm dS, yy, h:MM TT")} />
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
            primary={p.title}
            secondary={
              <React.Fragment>
                <Typography component="span" variant="body2" className={sty.inline} color="textPrimary">
                  {dateFormat(p.time, "ddd, mmm dS, yy, h:MM TT")}
                </Typography>
                - {p.place} | {p.topic}
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
    <Grid item className={sty.root}>
      {props.class == "classA" || props.class == "classB" ? (
        <Grid>
          {!switchAdd && (
            <Fab color="primary" onClick={() => setSwitchAdd(true)}>
              <AddCircleIcon />
            </Fab>
          )}

          {switchAdd && (
            <form className={sty.from} onSubmit={submit}>
              <TextField required onChange={handelChange} id="title" value={state.title} label="Title" />
              <br />
              <TextField required onChange={handelChange} id="topic" value={state.topic} label="Event topic" />
              <br />
              <TextField onChange={handelChange} id="gitLink" value={state.gitLink} label="Git link" />
              <br />
              <TextField required onChange={handelChange} id="place" value={state.place} label="Event place" />
              <br />
              <TextField type="datetime-local" required onChange={handelChange} id="time" value={state.time} label="Event time" />
              <br />
              <TextField required onChange={handelChange} id="desc" value={state.desc} multiline rows={5} label="Description..." />
              <br />
              <Typography variant="caption">
                {" By click on Submit you are agree our "}
                <Link color="primary" component={RouterLink} to="/privacy">
                  Privacy Policy
                </Link>
                {" and "}
                <Link color="primary" component={RouterLink} to="/privacy">
                  Terms & Conditions
                </Link>
              </Typography>
              <Typography variant="caption">
                {"Know about how to deploy your projet in "}
                <Link color="primary" rel="external nofollow noopener noreferrer" target="_blank" href="https://firebase.google.com/products/hosting">
                  firebase
                </Link>
                {" hosting or "}
                <Link color="primary" rel="external nofollow noopener noreferrer" target="_blank" href="https://www.heroku.com">
                  heroku
                </Link>
                {" for free "}
              </Typography>
              <br />
              <Fab style={{ width: "fit-content" }} color="primary" type={"submit"} variant="extended">
                {submitting && <CircularProgress color="inherit" />}
                {!submitted ? " Submit for review" : "Done! wait for review"}
              </Fab>
            </form>
          )}
        </Grid>
      ) : (
        <Typography variant="caption">You can't create an event ! This feature is not for Class C member </Typography>
      )}
      <br />
      <Grid item xs={12}>
        <Typography variant="body2">Upcoming events details</Typography>
        <Divider style={{ width: "30vw" }} />
        <List>{future}</List>

        <Typography variant="body2">Previously attend events details</Typography>
        <Divider />
        <List>{past}</List>
      </Grid>
    </Grid>
  )
}
EventManagement.propType = {
  getEvent: PropType.func.isRequired,
  admin: PropType.object.isRequired,
}
const mapToState = state => ({
  admin: state.admin.events,
})
const mapToProps = {
  getEvent,
}
export default connect(mapToState, mapToProps)(EventManagement)
