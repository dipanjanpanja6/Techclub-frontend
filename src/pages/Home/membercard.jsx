import * as React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { CardActionArea, CardActions } from "@material-ui/core"
import { Link } from "react-router"
import "./cards.css"
//individual card components
export default function MultiActionAreaCard(props) {
  var cardStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "22vw",
    transitionDuration: "0.3s",
    borderRadius: "30px",
    height: "fit-content",
    maxHeight: "100vh",
    margin: "2% 1%",
  }

  var footer_style = {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 2%",
  }
  const linkedin = props.link
  const email = props.email

  return (
    <Card style={cardStyle} className="member-card">
      <CardActionArea>
        <CardMedia component="img" height="220" image={require(`${props.imgSource}`)} alt="green iguana" style={{ objectFit: "contain" }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={footer_style}>
        <a href={email}>
          <img src={require("../../assets/icon/185958-social-media-icons/png/email.png")} style={{ width: "40px", height: "40px" }} />
        </a>
        <a href={linkedin}>
          <img src={require("../../assets/icon/185958-social-media-icons/svg/linkedin.svg")} style={{ width: "50px", height: "50px" }} />
        </a>
      </CardActions>
    </Card>
  )
}
