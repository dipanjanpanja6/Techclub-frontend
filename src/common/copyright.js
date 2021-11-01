import React from "react"
import { Typography, Link } from "@material-ui/core"

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" style={{ fontSize: "small", fontFamily: "monospace" }}>
<<<<<<< HEAD
      {"  Made with 😊 by "}

      {" © "}
      {"Students of GCECT-Tech club "}
=======
      {"  Made with ❤️ by "}
      
      {"Dipanjan Panja(CSE-21) & Ayush Jha(CSE-23) "}
>>>>>>> 382df4b76cd1519b0297c4fcb08a3974f039dda2
      {new Date().getFullYear()}
      {"  All rights reserved."}
    </Typography>
  )
}
