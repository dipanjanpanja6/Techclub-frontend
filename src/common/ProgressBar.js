import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { LinearProgress } from "@material-ui/core/"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",

    // height: '100vh',
    backdropFilter: "blur(0px) saturate(0%)",
    position: " absolute",
    zIndex: 9999,
  },
}))

export default function LinearIndeterminate() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {/* <LinearProgress /> */}
      <LinearProgress variant="query" color="secondary" />
      {/* <CircularProgress size={'20vw'} color='secondary'/> */}
    </div>
  )
}
