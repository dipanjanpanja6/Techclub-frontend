import * as React from "react"
import ActionAreaCard from "./membercard"
import { Grid, Typography, Fab } from "@material-ui/core"
import memberData from "./member.json"
//store all member data in member.json file and use map to render it using ActionAreaCard component
export default function Team() {
  // const name = "Ayush Jha"
  // const description = "President, Tech Club-GCECT"
  // const imageSource = "./team-members/ayushjha.jpeg"
  // const linkedIn = "https://www.linkedin.com/in/00-ayush-jha/"

  return (
    <div>
      <Typography style={{ padding: "10px 20px", textAlign: "center", marginTop: "5%" }} variant="h3">
        Meet the Team
      </Typography>
      <div style={{ margin: "3% 1.5% ", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        {memberData.map(member => {
          const name = member.name
          const description = member.designation
          const imageSource = member.img
          const linkedIn = member.contact.Linkedin
          const mail = member.contact.email
          return <ActionAreaCard name={name} description={description} imgSource={imageSource} link={linkedIn} email={mail} />
        })}
      </div>
    </div>
  )
}
