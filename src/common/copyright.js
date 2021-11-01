import React from "react"
import { Typography, Link } from "@material-ui/core"

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" style={{ fontSize: "small", fontFamily: "monospace" }}>
      {"  Made with ❤️ by "}
      
      {"Dipanjan Panja(CSE-21) & Ayush Jha(CSE-23) "}
      {new Date().getFullYear()}
      {"  All rights reserved."}
    </Typography>
  )
}
