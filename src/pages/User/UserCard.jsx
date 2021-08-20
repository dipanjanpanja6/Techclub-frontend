import React, { useEffect } from "react"
import PropType from "prop-types"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Avatar, Typography } from "@material-ui/core/"
import { makeStyles } from "@material-ui/core/styles"
import { getUserByUID } from "../../redux/actions/user"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"
import { useHistory, useLocation, useParams } from "react-router-dom"
import { connect } from "react-redux"
import { toast } from "react-toastify"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"

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
  "#f44336",
  "#e91e63",
  "#ffd600",
  "#ffea00",
  "#ff6f00",
  "#6d4c41",
  "#212121",
]
var rand = myArray[Math.floor(Math.random() * myArray.length)]
const style = makeStyles(theme => ({
  container: {
    paddingTop: 30,
    paddingLeft: 30,
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
      width: 600,
    },
  },
  MuiPostCard02: {
    borderRadius: 16, // 16px
    transition: "0.3s",
    // boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    width: "95%",
    position: "relative",
    maxWidth: 800,
    marginLeft: "auto",
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    alignItems: "center",
    padding: `16px 0`,
    "&:hover": {
      transform: "translateY(-3px)",
      // boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
    },
    "& .MuiCardMedia-root": {
      flexShrink: 0,
      width: "40%",
      paddingTop: "48%",
      transform: "translateX(-24%)",
      boxShadow: "4px 4px 50px 1px rgba(252, 56, 56, 0.6)",
      borderRadius: 16, // 16
      backgroundImage: 'url("https://soft-lik-chat-app.s3-us-west-2.amazonaws.com/user+(4).png")',
      backgroundColor: "#eee",
      overflow: "hidden",
      "&:after": {
        content: '" "',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        // backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
        borderRadius: 16, // 16
        // opacity: 0.5
      },
    },
    "& .MuiCardContent-root": {
      textAlign: "left",
      paddingLeft: 0,
      padding: 16,
    },
    "& .MuiTypography--heading": {
      fontWeight: "bold",
    },
    "& .MuiTypography--subheading": {
      marginBottom: 16,
    },
    "& .MuiButton--readMore": {
      backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
      boxShadow: "0px 4px 32px rgba(252, 56, 56, 0.4)",
      borderRadius: 100,
      paddingLeft: 12,
      paddingRight: 12,
      margin: 9,
      color: "#ffffff",
    },
  },
}))

function UserByUID(props) {
  const history = useHistory()
  const sty = style()
  // console.log(props);

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"))
  const state = props.state

  return (
    <div className={sty.root}>
      <Dialog
        style={{
          background: "transparent",
        }}
        PaperProps={{
          elevation: 0,
          style: { background: "none", margin: 0, marginRight: 9, justifyContent: "center" },
        }}
        fullScreen={fullScreen}
        maxWidth="sm"
        fullWidth
        open={props.open}
        onClose={props.switchCard}>
        {/* <DialogContent style={{ padding: 0 }}> */}
        <Grid className={sty.container} container justify="center" alignContent="center">
          <Card className={sty.MuiPostCard02}>
            <CardMedia className={"MuiCardMedia-root"} image={state.userImage} />
            <CardContent className={"MuiCardContent-root"}>
              <Typography className={"MuiTypography--date"} variant={"overline"}>
                {state.class}
              </Typography>

              <Typography className={"MuiTypography--heading"} variant={"h6"} gutterBottom>
                {state.name}
              </Typography>
              <Typography className={"MuiTypography--subheading"}>{state.email}</Typography>
              <Typography className={"MuiTypography--subheading"}>{state.clg}</Typography>
              <Button autoFocus className={"MuiButton--readMore"} onClick={props.switchCard} color="primary">
                Close
              </Button>
              <Button
                onClick={() => {
                  history.push(`/user/${state.uid}`)
                }}
                className={"MuiButton--readMore"}>
                More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Dialog>
    </div>
  )
}
UserByUID.propType = {
  getUserByUID: PropType.func.isRequired,
  admin: PropType.object.isRequired,
  uid: PropType.string.isRequired,
}

export default UserByUID
