import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import CircularProgress from "@material-ui/core/CircularProgress"
import { Grid, Typography, Fab } from "@material-ui/core"

import { getTopProject } from "../../redux/actions/extra"
import "./index.css"
import Banner from "../Home/Banner"
import ShowCard from "../../common/Card"

import Team from "./Team"

import ClubSection from "./Club/ClubSection"

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
      <Banner auth={props.auth} />
      <ClubSection />
      <Team />
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
        <a rel="external nofollow noopener noreferrer" target="_blank" href="https://chat.whatsapp.com/JQGJIGtzWVG69btJaSnXUB">
          <img src={require(`../../assets/icon/185958-social-media-icons/svg/whatsapp.svg`)} />
        </a>
        <a rel="external nofollow noopener noreferrer" target="_blank" href="https://t.me/joinchat/ZBjxYz5oCulkMzA1">
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
