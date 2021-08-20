import React, { useEffect } from "react"
// import { Link } from 'react-router-dom';
// import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from "react-router-dom"
import { Result } from "antd"
import { makeStyles, Fab } from "@material-ui/core"

var rand = "#" + ((Math.random() * 0xffffff) << 0).toString(16)
const style = makeStyles(theme => ({
  F404: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",

    background: `radial-gradient( transparent,${rand})`,
  },
  FF: {
    textAlign: "center",
  },
}))

const Fo = () => {
  let sty = style()
  const history = useHistory()
  useEffect(() => {
    document.title = `Page not found | 404 - Tech Club - GCECT`

    // const script = document.createElement("script");
    // script.src = require('./script');
    // script.async = true;
    // document.body.appendChild(script);
  }, [])

  return (
    <div className={sty.F404}>
      <Result
        className={sty.FF}
        status="404"
        title="400"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Fab
            style={{ marginTop: 20 }}
            variant="extended"
            onClick={() => {
              history.push(`/`)
            }}
            color="primary">
            Back Home
          </Fab>
        }
      />
    </div>
  )
}
export default Fo
