import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import PropType from "prop-types"
import { getUserProject } from "../../redux/actions/user"

import { url } from "../../config/requirements"
import { Link as RouterLink, useHistory } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import {
  Typography,
  Grid,
  Fab,
  Divider,
  TextField,
  InputAdornment,
  ListItemSecondaryAction,
  Link,
  ListItem,
  ListItemText,
  List,
  ListItemIcon,
  Switch,
  Chip,
  IconButton,
} from "@material-ui/core"
import CircularProgress from "@material-ui/core/CircularProgress"
import FolderSharedIcon from "@material-ui/icons/FolderShared"
import DeleteForeverIcon from "@material-ui/icons/DeleteForever"
import BlockIcon from "@material-ui/icons/Block"
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
  const history = useHistory()
  const sty = useStyles()
  const [submitting, setSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [state, setState] = React.useState({ active: false, title: "", imageUri: "", gitLink: "", desc: "", liveLink: "", status: false, tag: [] })
  const [projects, setProjects] = React.useState("")
  const [Stag, StagS] = React.useState([])

  useEffect(() => {
    props.getUserProject()
  }, [])

  useEffect(() => {
    // console.log('getUserProject', props.admin)
    if (props.class == "classA" || props.class == "classB") {
      setState({ ...state, active: true })
    }
    if (props.admin.success === true) {
      setProjects(props.admin.data)
    }
    if (props.admin.error === true) {
      toast.error(props.admin.message)
    }
  }, [props])

  const submit = e => {
    e.preventDefault()
    console.log(state)
    // setSubmitted(false)
    setSubmitting(true)

    fetch(`${url}/projectsubmit`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(state),
    })
      .then(res => {
        res.json().then(d => {
          setSubmitted(true)
          setSubmitting(false)
          props.getUserProject()
          console.log(d)
          setState({ active: false, title: "", imageUri: "", gitLink: "", desc: "", liveLink: "", status: false, tag: [] })
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
  const handleCheck = event => {
    setState({ ...state, status: event.target.checked })
  }
  const handelChangeS = e => {
    StagS(e.target.value)
  }
  const disableRequest = () => {
    toast.warn("Delete can not be done now! ")
  }
  const Prj = projects ? (
    projects.map(p => {
      return (
        <ListItem
          key={p.id}
          disabled={!p.active}
          button
          onClick={() => {
            history.push(`/project/${p.id}`)
          }}>
          <ListItemIcon>
            <FolderSharedIcon />
          </ListItemIcon>
          <ListItemText primary={p.title} secondary={p.liveLink} />
          <ListItemSecondaryAction>
            <IconButton onClick={disableRequest}>
              <BlockIcon color="error" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )
    })
  ) : (
    <CircularProgress />
  )
  const tag = state.tag.map((p, i) => {
    return (
      <Chip
        style={{ margin: "0 1px" }}
        size="small"
        key={i}
        label={p}
        onDelete={() => {
          console.log("dlt")
          setState({
            ...state,
            tag: state.tag.filter(i => i !== p),
          })
        }}
        color="primary"
      />
    )
  })

  return (
    <Grid item className={sty.root}>
      <Typography variant="subtitle1">Fill up this from</Typography>
      <Divider style={{ width: "30vw" }} />
      <br />

      <form
        onKeyPress={e => {
          if (e.keyCode === 13 || e.which === 13) {
            e.preventDefault()
            return false
          }
        }}
        className={sty.from}
        onSubmit={submit}>
        <TextField required onChange={handelChange} id="title" value={state.title} label="Title" />
        <br />
        <TextField required onChange={handelChange} id="imageUri" value={state.imageUri} label="Image URI" />
        <br />
        <TextField required helperText="https://github.com/.." onChange={handelChange} id="gitLink" value={state.gitLink} label="Git link" />
        <br />
        <TextField required onChange={handelChange} id="liveLink" value={state.liveLink} label="Live link" />
        <br />
        <TextField required onChange={handelChange} id="desc" value={state.desc} multiline rows={5} label="Description..." />
        <br />
        <TextField
          onKeyDown={e => {
            if (e.keyCode == 13 && Stag !== "" && state.tag.length < 3) {
              setState({ ...state, tag: [...state.tag, Stag] })
              StagS("")
            }
          }}
          onChange={handelChangeS}
          value={Stag}
          label="Tag for your project"
          helperText="Maximum 3 tag or your project will not approve"
          InputProps={{
            startAdornment: <InputAdornment position="start">{tag}</InputAdornment>,
          }}
        />
        <br />
        <Grid style={{ display: "inline-block" }}>
          <Switch checked={state.status} onChange={handleCheck} />
          <Typography variant="caption">Project is in initial stage. Member require ?</Typography>
        </Grid>
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
      <br />

      <Grid item xs={12}>
        <Divider />
        <Typography>Your Project List</Typography>
        <List>{Prj}</List>
      </Grid>
    </Grid>
  )
}
ProjectSubmit.prototype = {
  getUserProject: PropType.func.isRequired,
  admin: PropType.object.isRequired,
  class: PropType.string.isRequired,
}
const mapToState = state => ({
  admin: state.admin.projects,
})
const mapToProps = {
  getUserProject,
}
export default connect(mapToState, mapToProps)(ProjectSubmit)
