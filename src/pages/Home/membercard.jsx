import * as React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { Button, CardActionArea, CardActions } from "@material-ui/core"
import { Link } from "react-router"
import "./cards.css"
//individual card components
export default function MultiActionAreaCard(props) {
  var cardStyle = {
    display: "block",
    width: "22vw",
    transitionDuration: "0.3s",
    height: "25vw",
    margin: "0 1%",
  }

  var iconStyle = {
    marginLeft: "62%",
  }

  const linkedin = props.link

  return (
    <Card style={cardStyle} className="member-card">
      <CardActionArea>
        <CardMedia component="img" height="220" image={require(`${props.imgSource}`)} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          email
        </Button>
        <a href={linkedin} style={iconStyle}>
          <img src={require("../../assets/icon/185958-social-media-icons/svg/linkedin.svg")} />
          LinkedIn
        </a>
      </CardActions>
    </Card>
  )
}
