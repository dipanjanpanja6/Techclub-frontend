import React, { useEffect } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import ShareIcon from "@material-ui/icons/Share"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import FolderSharedIcon from "@material-ui/icons/FolderShared"
import CircularProgress from "@material-ui/core/CircularProgress"
import { Grid, makeStyles, Typography, Divider, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, ListItemIcon } from "@material-ui/core"
import { toast } from "react-toastify"
import { useHistory } from "react-router-dom"

import ShowCard from "../../common/Card"
import { getAllProject, getTopProject } from "../../redux/actions/extra"

const style = makeStyles(theme => ({
  intro: {
    height: "50vh",
    textAlign: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    //    background: 'url(https://source.unsplash.com/random/?tech)',
    color: "white",
    backgroundImage: `url(${require("../../assets/showcase.webp")})`,
  },
  inline: {
    display: "inline",
  },
  typo: {
    maxWidth: "calc(90vw - 100px)",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "calc(80vw - 100px)",
      fontSize: 12,
    },
  },
}))
const ShowCase = props => {
  const history = useHistory()
  const sty = style()
  const [top, setTop] = React.useState("")
  const [state, setState] = React.useState("")
  useEffect(() => {
    document.title = "Showcase | Project - Tech Club - GCECT"
    props.getAllProject()
    props.getTopProject()
  }, [])

  useEffect(() => {
    props.top.success && setTop(props.top.data)
    props.top.error && console.log(props.top)
    props.top.error && toast.error(props.top.message)
  }, [props.top])
  useEffect(() => {
    props.admin.success && setState(props.admin.data)
    props.admin.error && console.log(props.admin)
    props.admin.error && toast.error(props.admin.message)
  }, [props.admin])

  // const upcomingProject = state ? state.upcoming.map(p => {
  //     return (
  //         <ShowCard key={p.id} />
  //     )
  // }) : ''
  const allProject = state ? (
    state.map(p => {
      return (
        <div key={p.id}>
          <ListItem dense>
            <ListItemIcon>
              <FolderSharedIcon />
            </ListItemIcon>
            <ListItemText
              primary={p.title}
              disableTypography
              secondary={
                // <React.Fragment>
                <div>
                  <Typography component="span" variant="body2" className={sty.inline} color="textPrimary">
                    {p.email}
                  </Typography>
                  <br />
                  <Typography variant="body2" className={sty.typo} color="textSecondary" noWrap>
                    {p.desc}
                  </Typography>
                </div>
                // </React.Fragment>
              }
              secondaryTypographyProps={{ noWrap: true }}
            />
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => {
                  navigator.clipboard.writeText(`${window.location.origin}/project/${p.id}`)
                  toast.success("Link copied to clipboard")
                }}>
                <ShareIcon color="primary" />
              </IconButton>
              <IconButton
                onClick={() => {
                  history.push(`/project/${p.id}`)
                }}>
                <MoreVertIcon color="primary" />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider variant="inset" />
        </div>
      )
    })
  ) : (
    <CircularProgress style={{ margin: 12 }} />
  )
  const topProject = top ? (
    top.map(p => {
      return (
        <ShowCard
          auth={props.auth}
          key={p.id}
          id={p.id}
          email={p.email}
          open={p.status}
          Title={p.title}
          image={p.imageUri}
          new={new Date(Date.parse(p.createdAt)) - new Date() <= 14 ? true : false}
          Details={p.desc}
        />
      )
    })
  ) : (
    <CircularProgress style={{ margin: 12 }} />
  )

  return (
    <div>
      <Grid className={sty.intro} item xs={12}>
        <Typography style={{ paddingTop: "25vh" }} variant="h3">
          Showcase Projects
        </Typography>
      </Grid>
      <Grid
        style={{
          paddingTop: 12,
          paddingBottom: 12,
        }}>
        <Grid item sm={12}>
          <Typography style={{ padding: "0 20px" }} variant="h5">
            Top 3 Project Details
          </Typography>
          <Divider />
          <Grid container justify="space-around">
            {topProject}
          </Grid>
        </Grid>
        <Grid item sm={12}>
          <Typography style={{ padding: "0 20px" }} variant="h5">
            All Project Details
          </Typography>
          <Divider />
          <List dense>{allProject}</List>
        </Grid>
      </Grid>
    </div>
  )
}
ShowCase.propType = {
  getTopProject: PropTypes.func.isRequire,
  top: PropTypes.object.isRequired,
  getAllProject: PropTypes.func.isRequire,
  admin: PropTypes.object.isRequired,
  auth: PropTypes.bool.isRequired,
}
const mapToState = state => ({
  admin: state.admin.allProject,
  top: state.admin.topProject,
})
const mapToProps = {
  getAllProject,
  getTopProject,
}
export default connect(mapToState, mapToProps)(ShowCase)
