import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import PropType from "prop-types"
import { getEventByUID } from "../../redux/actions/user"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Grid, Divider, ListItem, ListItemText, ListItemIcon, List } from "@material-ui/core"
import CircularProgress from "@material-ui/core/CircularProgress"
import EventIcon from "@material-ui/icons/Event"
import { toast } from "react-toastify"

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
  const [projects, setProjects] = React.useState("")

  useEffect(() => {
    props.getEventByUID(props.uid)
  }, [])

  useEffect(() => {
    if (props.admin.success) {
      // console.log(props.admin.data)
      setProjects(props.admin.data)
    } else if (props.admin.error === true) {
      toast.error(props.admin.message)
    }
  }, [props.admin])

  const events = projects ? (
    projects.map(p => {
      return (
        <ListItem key={p.id}>
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary={p.title} secondary={p.time} />
        </ListItem>
      )
    })
  ) : (
    <CircularProgress />
  )

  return (
    <Grid item className={sty.root}>
      <Grid item xs={12}>
        <Typography variant="body2">Attended events details</Typography>
        <Divider style={{ width: "30vw" }} />
        <List>{events}</List>
      </Grid>
    </Grid>
  )
}
EventManagement.propType = {
  getEventByUID: PropType.func.isRequired,
  admin: PropType.object.isRequired,
  uid: PropType.string.isRequired,
}
const mapToState = state => ({
  admin: state.admin.eventByUID,
})
const mapToProps = {
  getEventByUID,
}
export default connect(mapToState, mapToProps)(EventManagement)
