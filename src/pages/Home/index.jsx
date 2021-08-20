import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import CircularProgress from "@material-ui/core/CircularProgress"
import { Grid, Typography, Fab } from "@material-ui/core"

import { getTopProject } from "../../redux/actions/extra"
import "../../assets/bootstrap.min.css"
import "./index.css"

import ShowCard from "../../common/Card"

const Home = props => {
  // console.log(props);
  const history = useHistory()
  const [top, setTop] = React.useState("")

  const register = e => {
    history.push("/auth")
  }

  const project = e => {
    history.push("/home")
  }

  useEffect(() => {
    document.title = `Tech Club - GCECT`
    const script = document.createElement("script")
    script.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
    script.async = true
    document.body.appendChild(script)
    props.getTopProject()
  }, [])
  useEffect(() => {
    props.top.success && setTop(props.top.data)
    props.top.error && console.log(props.top.message)
  }, [props.top])

  const topProject = top ? (
    top.map(p => {
      return (
        <ShowCard
          auth={props.auth}
          key={p.id}
          id={p.id}
          email={p.email}
          open={p.status}
          Title={p.title}
          image={p.imageUri}
          new={new Date(Date.parse(p.createdAt)) - new Date() <= 14 ? true : false}
          Details={p.desc}
        />
      )
    })
  ) : (
    <CircularProgress style={{ margin: 20 }} />
  )

  return (
    <div className="Homepage45">
      <Grid container className="header-container">
        <div className="header">
          <h1 className="wel">
            Welcome to,
            <br />
          </h1>
          <h1 className="govt"> Govt College of Engg. & Ceramic Technology Tech Club</h1>
          {!props.auth && (
            <Fab variant="extended" onClick={register}>
              {" "}
              REGISTER{" "}
            </Fab>
          )}
          {props.auth && (
            <Fab variant="extended" onClick={project}>
              {" "}
              SUBMIT PROJECT{" "}
            </Fab>
          )}
        </div>
      </Grid>
      <div className="container-fluid con-2nd ">
        <div className="row r1">
          <Grid item xs={12} md={6} className="body-text">
            <h1>
              we aim to educate the GCECT community on the latest technology trends and skills, to facilitate recruiting opportunities and to foster social and professional networking within
              GCECT and beyond
            </h1>
          </Grid>
          <Grid item xs={12} md={6} className="body-text img-container">
            <h1>tech tronix</h1>
            <h2>.Arduino .Networking .IoT</h2>
          </Grid>
        </div>
        <div className="row r2">
          <Grid item xs={12} md={6} className=" text-area-1">
            <h1>code monk</h1>
            <h2>Learn. Inspire. Grow.</h2>
          </Grid>
          <Grid item xs={12} md={6} className=" text-area-2 ">
            <p>
              Learn with community. Sessions are taken on regular basis by Alumni Team and Mentors. We value the power of influence. We believe people here will be the foundation of great
              coders. We learn together and help each other so that all people of community grow with each other. Sessions are taken either Offline locations nearby your colleges or in
              colleges on invitation or online as Youtube Webinar.
            </p>
            <code>Session topics : hacking, data structure, algorithms, machine learning, Java, Node Js and other related development topics.</code>
          </Grid>
        </div>
      </div>
      <Grid container justify="space-around" style={{ padding: "50px 12px" }}>
        <Grid item sm={12}>
          <Typography style={{ padding: "0 20px" }} variant="h5">
            Top Three Project Details
          </Typography>
        </Grid>
        <Grid container justify="space-around">
          {topProject}
        </Grid>
        <Grid container item justify="center" sm={12}>
          <Fab
            onClick={() => {
              history.push("/showcase")
            }}
            color="primary"
            variant="extended">
            More
          </Fab>
        </Grid>
      </Grid>
      <div className="container-fluid con-3rd">
        <div className="row r1-3rd">
          <p>
            'Tech Club' is located at the heart of the campus of Govt College Of Engg. & Ceramic Technology (GCECT). Here in GCECT where people lead a busy life, the name 'Tech Club' itself
            brings a breeze of happiness, relaxation, pleasure and many joyous moments to the students who are in love with technology . It is truly a place for techno freaks to create or
            work on something new beyond their hectic schedules. As many of the GCECT community do not often get a chance to meet their relatives, Tech Club provides a unique opportunity to
            make them forget their homesickness by hosting various events throughout the year on various technologies and gaming sessions. It in essence gives a 'home away from home feeling'
            to the club members making a big joint family of techno freaks who came together to create something new in this ever developing modern world.
          </p>
        </div>
      </div>
      <div className="container-fluid social-icon">
        <a rel="external nofollow noopener noreferrer" target="_blank" href="https://chat.whatsapp.com/G1D5NS3IIb41HUE4nIcdPP">
          <img src={require(`../../assets/icon/185958-social-media-icons/svg/whatsapp.svg`)} />
        </a>
        <a rel="external nofollow noopener noreferrer" target="_blank" href="https://t.me/GCECTtechclub">
          <img src={require("../../assets/icon/185958-social-media-icons/svg/telegram.svg")} />
        </a>
        <a rel="external nofollow noopener noreferrer" target="_blank" href="https://www.linkedin.com/company/gcect-techclub">
          <img src={require("../../assets/icon/185958-social-media-icons/svg/linkedin.svg")} />
        </a>
        <a rel="external nofollow noopener noreferrer" target="_blank" href="https://fb.me/GCECTTECHCLUB">
          <img src={require("../../assets/icon/185958-social-media-icons/svg/facebook.svg")} />
        </a>
      </div>

      {/* <Footer/> */}
    </div>
  )
}
Home.propType = {
  getTopProject: PropTypes.func.isRequire,
  top: PropTypes.object.isRequired,
  auth: PropTypes.bool.isRequired,
}
const mapToState = state => ({
  top: state.admin.topProject,
})
const mapToProps = {
  getTopProject,
}
export default connect(mapToState, mapToProps)(Home)
