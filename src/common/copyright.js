import React from "react"
import { Typography, Link } from "@material-ui/core"

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" style={{ fontSize: "small", fontFamily: "monospace" }}>
      {"  Made with 😊 by "}
      <Link color="textPrimary" href="https://facebook.com/dipanjanpanja6">
        Dipanjan Panja
      </Link>
      {" © "}
      {new Date().getFullYear()}
      {" Tech club - Student of GCECT. All rights reserved."}
    </Typography>
  )
}
