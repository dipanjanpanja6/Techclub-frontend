import React from "react"
import { Typography, Link } from "@material-ui/core"

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" style={{ fontSize: "small", fontFamily: "monospace" }}>
      {"  Made with 😊 by "}

      {" © "}
      {"Students of GCECT-Tech club "}
      {new Date().getFullYear()}
      {"  All rights reserved."}
    </Typography>
  )
}
