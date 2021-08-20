import React from "react"
import { makeStyles, Chip, Grid } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import FavoriteIcon from "@material-ui/icons/Favorite"
import { useHistory } from "react-router-dom"
import { toast } from "react-toastify"
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "50px 0",
  },
  media: {
    height: 200,
  },
})

export default function MediaCard(props) {
  const classes = useStyles()
  const history = useHistory()
  const [fab, setFab] = React.useState(false)
  const fabSwitch = () => {
    setFab(true)
  }
  const addMe = () => {
    toast.warn("New member registration is disable right now. Stay tune or contact team")
  }
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={fabSwitch}>
        <Grid style={{ position: "absolute", top: 12, left: 12 }}>
          {props.new && <Chip style={{ marginRight: 7 }} color="secondary" label="NEW" size="small" />}
          {props.open && <Chip style={{ backgroundColor: "#ff0" }} label="Member Require" size="small" />}

          {!fab ? <FavoriteBorderIcon style={{ marginInlineStart: 7, color: "#FFF" }} /> : <FavoriteIcon style={{ marginInlineStart: 7 }} color="error" />}
        </Grid>
        <CardMedia className={classes.media} image={props.image} title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.Title}
          </Typography>
          <Typography gutterBottom variant="caption">
            {props.email}
          </Typography>
          <Typography style={{ maxHeight: 200, overflow: "hidden" }} variant="body2" color="textSecondary" component="p">
            {props.Details}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            if (props.auth == true) {
              addMe()
            } else {
              history.push("/auth")
            }
          }}
          color="secondary">
          Request interest
        </Button>
        <Button
          size="small"
          onClick={() => {
            navigator.clipboard.writeText(`${window.location.origin}/project/${props.id}`)
            toast.success("Link copied to clipboard")
          }}
          color="primary">
          Share
        </Button>
        <Button
          size="small"
          onClick={() => {
            history.push(`/project/${props.id}`)
          }}
          color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
