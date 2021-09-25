import * as React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { Button, CardActionArea, CardActions } from "@material-ui/core"
import "./cards.css"
//individual card components
export default function MultiActionAreaCard({ memberData }) {
  var cardStyle = {
    display: "block",
    width: "15vw",
    transitionDuration: "0.3s",
    height: "20vw",
    margin: "0 1%",
  }
  return (
    <Card style={cardStyle} className="member-card">
      <CardActionArea>
        <CardMedia component="img" height="140" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  )
}
