import * as React from "react"
import ActionAreaCard from "./membercard"
import { Grid, Typography, Fab } from "@material-ui/core"
//store all member data in member.json file and use map to render it using ActionAreaCard component
export default function Team() {
  const name = "Ayush Jha"
  const description = "President, Tech Club-GCECT"
  const imageSource = "./team-members/ayushjha.jpeg"
  const linkedIn = "https://www.linkedin.com/in/00-ayush-jha/"

  return (
    <div>
      <Typography style={{ padding: "10px 20px", textAlign: "center" }} variant="h5">
        Meet the Team
      </Typography>
      <Grid container spacing={3} style={{ margin: "3% 1.5% " }}>
        <ActionAreaCard name={name} description={description} imgSource={imageSource} link={linkedIn} />
      </Grid>
    </div>
  )
}
