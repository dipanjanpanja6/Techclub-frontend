import * as React from "react"
import ActionAreaCard from "./membercard"
import { Grid, Typography, Fab } from "@material-ui/core"
//store all member data in member.json file and use map to render it using ActionAreaCard component
export default function Team() {
  return (
    <div>
      <Typography style={{ padding: "10px 20px", textAlign: "center" }} variant="h5">
        Meet the Team
      </Typography>
      <Grid container spacing={3} style={{ margin: "3% 5%" }}>
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
      </Grid>
    </div>
  )
}
