import React, { useEffect } from "react"
import PropType from "prop-types"
import { Button, Badge, DialogActions, DialogContent, Fab, Grid, Avatar, Typography } from "@material-ui/core/"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import { getUserByUID } from "../../redux/actions/user"
import { useTheme } from "@material-ui/core/styles"
import { useHistory, useLocation, useParams } from "react-router-dom"
import { connect } from "react-redux"
import UserContent from "./userContent"
import Skeleton from "@material-ui/lab/Skeleton"
import StarsRoundedIcon from "@material-ui/icons/StarsRounded"
import { Result } from "antd"

var myArray = [
  "#ff1744",
  "#ff6f00",
  "#37474f",
  "#ff3d00",
  "#dd2c00",
  "#33691e",
  "#558b2f",
  "#1b5e20",
  "#004d40",
  "#2e7d32",
  "#00695c",
  "#43a047",
  "#0091ea",
  "#0277bd",
  "#01579b",
  "#304ffe",
  "#1a237e",
  "#d500f9",
  "#651fff",
  "#4a148c",
  "#9c27b0",
  "#d50000",
  "#ff1744",
  "#f50057",
  "#e91e63",
  "#ffd600",
  "#ffea00",
  "#ff6f00",
  "#6d4c41",
  "#212121",
]
var rand = myArray[Math.floor(Math.random() * myArray.length)]
const style = makeStyles(theme => ({
  intro: {
    [theme.breakpoints.down("xs")]: {
      padding: "60px 0 0",
      flexFlow: "column",
      height: 350,
      textAlign: "center",
    },
    height: 270,
    paddingLeft: 20,
    textAlign: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "white",
    background: "#48f",
    backgroundColor: rand,
    // backgroundImage: 'url(https://www.marsdd.com/wp-content/uploads/2020/01/blog-tech-conferences.jpg)',
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    minHeight: "30vw",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  avatar: {
    height: "15vw",
    width: "15vw",
    marginRight: 25,
    maxHeight: 150,
    maxWidth: 150,
    minHeight: 140,
    minWidth: 140,
  },
  detail: {
    textAlign: "left",
    marginLeft: 25,
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      marginLeft: 0,
    },
  },
  F404: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
    paddingBottom: 100,
    // height: '100vh'
    background: `radial-gradient( transparent,${rand})`,
  },
  FF: {
    textAlign: "center",
  },
  container: {
    minHeight: 500,
    background: theme.palette.background.paper,
  },
  detx: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
    textAlign: "left",
  },
}))

function UserByUID(props) {
  const history = useHistory()
  const sty = style()
  const [state, setState] = React.useState("")
  const [err, setError] = React.useState("")

  const theme = useTheme()
  let from = history.location.state ? history.location.state.from.pathname : "/"
  const { uid } = useParams()
  useEffect(() => {
    props.getUserByUID(uid)
    return () => {
      // history.push(from)
    }
  }, [])
  // console.log(props.admin.data);
  useEffect(() => {
    document.title = props.admin.success ? `${props.admin.data.name} | Profile - Tech Club - GCECT` : `Profile - Tech Club - GCECT`

    props.admin.success && setState(props.admin.data)
    props.admin.error && setError(props.admin)
    // props.admin.error && toast.error(props.admin.message)
  }, [props.admin])
  const handleClose = () => {
    history.goBack()
  }
  const SmallAvatar = withStyles(theme => ({
    root: {
      width: 30,
      height: 30,
      borderRadius: "50%",
      backgroundColor: theme.palette.background.paper,
      border: `2px solid ${theme.palette.background.paper}`,
    },
  }))(StarsRoundedIcon)

  return (
    <Grid>
      {!err && (
        <>
          <DialogContent className={sty.container} style={{ padding: 0 }}>
            <Grid container justify="center" alignContent="center">
              <Grid container alignItems="center" className={sty.intro} item xs={12}>
                {state ? (
                  <>
                    <Badge
                      overlap="circle"
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      badgeContent={<SmallAvatar style={{ color: state.class == "classA" ? "#f00" : state.class == "classB" ? "#ff0" : "#eee" }} />}>
                      <Avatar className={sty.avatar} alt={state.name} src={state.userImage}></Avatar>
                    </Badge>
                    <Grid className={sty.detx}>
                      <Typography variant="h5">{state.name}</Typography>
                      <Typography variant="h6">{state.email}</Typography>
                      <Typography variant="subtitle2">{state.clg}</Typography>
                      {/* <Typography variant='subtitle2'>
                                {state.address}
                            </Typography> */}
                      <Typography variant="subtitle2">{state.Ph}</Typography>
                      <Typography variant="subtitle2">{state.class}</Typography>
                    </Grid>
                  </>
                ) : (
                  <>
                    <Skeleton variant="circle" className={sty.avatar} animation="pulse" />
                    <Grid style={{ textAlign: "left" }}>
                      <Skeleton variant="text" width={200} />
                      <Skeleton variant="text" width={290} />
                      <Skeleton variant="text" width={230} />
                      <Skeleton variant="text" width={130} />
                    </Grid>
                  </>
                )}
              </Grid>
              <UserContent uid={uid} />
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button disabled onClick={handleClose} color="primary">
              Message
            </Button>
          </DialogActions>
        </>
      )}
      {err && (
        <Grid container justify="center" alignItems="center" className={sty.F404}>
          <Result
            className={sty.FF}
            status="404"
            title="400"
            subTitle="Sorry, User does not exist or you misspell something."
            extra={
              <Fab
                style={{ marginTop: 20 }}
                size="small"
                variant="extended"
                onClick={() => {
                  history.push(`/`)
                }}
                color="primary">
                Home Back
              </Fab>
            }
          />
        </Grid>
      )}
    </Grid>
  )
}
UserByUID.propType = {
  getUserByUID: PropType.func.isRequired,
  admin: PropType.object.isRequired,
}
const mapToState = state => ({
  admin: state.admin.userByUID,
})
const mapToProps = {
  getUserByUID,
}
export default connect(mapToState, mapToProps)(UserByUID)
