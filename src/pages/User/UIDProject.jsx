import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useHistory, useLocation } from "react-router-dom"
import PropType from "prop-types"
import { getProjectByUID } from "../../redux/actions/user"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Grid, Fab, Divider, ListItem, ListItemText, List } from "@material-ui/core"
import CircularProgress from "@material-ui/core/CircularProgress"
import { toast } from "react-toastify"

const useStyles = makeStyles(theme => ({
  intro: {
    [theme.breakpoints.down("xs")]: {
      paddingTop: 60,
      paddingLeft: 0,
      flexDirection: "column",
    },
    height: 270,
    paddingLeft: 20,
    textAlign: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "white",
    backgroundImage: "url(https://www.marsdd.com/wp-content/uploads/2020/01/blog-tech-conferences.jpg)",
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
function ProjectSubmit(props) {
  const sty = useStyles()
  const location = useLocation()
  const history = useHistory()
  const [projects, setProjects] = React.useState("")

  useEffect(() => {
    props.getProjectByUID(props.uid)
  }, [])

  useEffect(() => {
    if (props.admin.success === true) {
      console.log(Object.values(props.admin.data))
      setProjects(Object.values(props.admin.data))
    } else if (props.admin.error === true) {
      toast.error(props.admin.message)
    }
  }, [props.admin])
  const redirectProjectPage = id => {
    console.log(id)
    history.push(`/project/${id}`)
  }

  const Prj = projects ? (
    projects.map(p => {
      return (
        <ListItem
          disabled={!p.active}
          key={p.id}
          button
          onClick={() => {
            redirectProjectPage(p.id)
          }}>
          <ListItemText primary={p.title} secondary={p.liveLink} />
        </ListItem>
      )
    })
  ) : (
    <CircularProgress />
  )

  return (
    <Grid item className={sty.root}>
      <Grid item xs={12}>
        <Typography variant="body2">Added Project List</Typography>
        <Divider />
        <List>{Prj}</List>
      </Grid>
    </Grid>
  )
}
ProjectSubmit.prototype = {
  getProjectByUID: PropType.func.isRequired,
  admin: PropType.object.isRequired,
  uid: PropType.string.isRequired,
}
const mapToState = state => ({
  admin: state.admin.projectByUID,
})
const mapToProps = {
  getProjectByUID,
}
export default connect(mapToState, mapToProps)(ProjectSubmit)
