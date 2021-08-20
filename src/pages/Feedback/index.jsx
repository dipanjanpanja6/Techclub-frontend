import React, { useState, useEffect } from "react"
import { Typography, Divider, TextField, Fab, Grid, CardMedia } from "@material-ui/core"
import { Link } from "react-router-dom"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import { makeStyles } from "@material-ui/core/styles"
import { toast } from "react-toastify"
import { url } from "../../config/requirements"
import clsx from "clsx"
import CircularProgress from "@material-ui/core/CircularProgress"

const style = makeStyles(theme => ({
  image: {
    height: "100vh",
    width: "inherit",
    minHeight: 510,
    [theme.breakpoints.down("xs")]: {
      height: "30vh",
      minHeight: "auto",
    },
  },
  paper: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "12px",
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      minHeight: "70vh",
    },
  },
  roo: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
    margin: "20px",
  },
  inputs: {
    display: "flex",
    flexDirection: "column",
    marginRight: 30,
  },
  butto: {
    backgroundColor: "#0a0",
    margin: "12px",
    marginBottom: 0,
    "&:hover": {
      backgroundColor: "#0a5",
    },
  },
}))
const Feedback = () => {
  const classes = style()
  const [state, setState] = useState({ name: "", email: "", msg: "", time: new Date().toLocaleString() })
  const [success, setSuccess] = useState(false)
  const [request, setRequest] = useState(false)
  useEffect(() => {
    document.title = `Feedback - Tech Club - GCECT`
  }, [])
  const submit = e => {
    e.preventDefault()
    setRequest(true)
    console.log(state)
    fetch(`${url}/feedback`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(state),
    }).then(res => {
      res.json().then(d => {
        console.log(d)
        if (d.success) {
          setRequest(false)
          setSuccess(true)
          toast.success("Thank you for supporting")
        } else {
          toast.error("Send Failed! please try again,Thank you for supporting")
        }
      })
    })
  }
  const handleChange = e => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    })
  }
  return (
    <Grid container>
      <Grid className={classes.image} item sm={7}>
        <CardMedia className={classes.image} image={require("../../assets/feedback.webp")}></CardMedia>
      </Grid>
      <Grid item className={classes.paper} sm={5}>
        <Typography style={{ paddingBottom: "20px" }} variant="h5">
          Send us your Feedback
        </Typography>
        <Typography style={{ paddingBottom: "20px" }} variant="body2">
          We would like your Feedback to improve your webapp
        </Typography>
        <Divider />
        <form className={classes.roo} onSubmit={submit} autoComplete="off">
          <div className={classes.inputs}>
            <TextField required label="Full Name" id="name" value={state.name} onChange={handleChange} />
            <TextField required label="Email" type="email" id="email" value={state.email} onChange={handleChange} />
            <TextField id="msg" required label="Explain briefly" value={state.msg} onChange={handleChange} multiline rowsMax={6} />
          </div>
          <Fab variant="extended" required color="primary" className={clsx({ [classes.butto]: success })} type="submit">
            {success ? <CheckCircleIcon /> : request && <CircularProgress color="secondary" />}
            {success ? "Done" : "Send"}
          </Fab>
        </form>
        <Typography variant="caption">
          {" By click on Send you are agree our "}
          <Link to="/privacy">Privacy Policy</Link>
          {" and "}
          <Link to="/privacy">Terms & Conditions</Link>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Feedback
