import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from 'prop-types'
import { checkUser, logout } from './redux/actions/admin'
import firebase from './config/requirements'
//..............................................................
import FAQ from './contactUs/FAQ'
import Auth from './Auth/index'
import User from './user/User'
import F404 from './404/404'
import Home from './Home/index'
import Main from './main/index'
import Event from './event/index'
import AppBAr from './Home/Appbar';
import Footer from './Home/footer';
import Require from './extra/require'
import Contact from './contactUs/index'
import ShowCase from './showCase/index'
import Feedback from './contactUs/feedback';
import ScrollToTop from './config/ScrollToTop'
import ProgressBar from './config/ProgrssBar'
import ProjectDetailsPage from './showCase/projectDetailsPage'
// .............................................................

// import { makeStyles } from '@material-ui/core/styles';

// const style = makeStyles((theme) => ({}))

function App(props) {
  const [auth, setAuth] = useState(false)
  const [load, setLoad] = useState(false)
  // console.log(props.auth);

  // let history = useLocation()
  // let sty = style()
  // const FF404 = () => (  )

  useEffect(() => { props.checkUser() }, [])

  useEffect(() => {
    if (props.auth === true) { setAuth(props.auth) }
    if (props.auth === false) { setAuth(props.auth) }
    // console.log(props.auth);
    switch (props.auth) {
      case true: setLoad(true)
        break;
      case false: setLoad(true)
        break;
      default: setLoad(false)
    }
    // console.log('props chng');
  }, [props.auth])

  const out = () => {
    console.log("auth");
    props.logout();
    firebase.auth().signOut()
  }
  
  const AppContainer = () => (
    <div>
      <AppBAr auth={auth} out={out} />
      <Switch>
        <Route exact path="/required" component={() => <Require auth={auth} />} />
        <Route exact path="/faq" component={() => <FAQ auth={auth} />} />
        <Route exact path="/showcase" component={() => <ShowCase auth={auth} />} />
        <Route exact path="/event" component={() => <Event auth={auth} />} />
        <Route exact path="/" component={() => <Home auth={auth} />} />
        <Route exact path="/privacy" component={Contact} />
        <Route exact path='/project/:id' component={() => <ProjectDetailsPage auth={auth} />} />
        <Route exact path="/user/:uid" component={User} />
        <Route exact path="/home" component={
          ({ location }) => load ? auth ? <Main auth={auth} /> : <Redirect to={{ pathname: "/auth", state: { from: location } }} /> : <ProgressBar />
        } />
        <Route render={() => <Redirect to='/404' />} />
      </Switch>
      <Footer />
    </div>
  )

  return (
    <>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/feedback" component={Feedback} />
          <Route exact path="/contact" component={Feedback} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path='/404' component={F404} />
          <Route path='/' component={AppContainer} />
        </Switch>
      </Router>
      <ToastContainer />
    </>
  );
}
App.propType = {
  checkUser: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,

}

const StateToProps = (state) => ({
  auth: state.admin.auth
})
const ActionsToProps = {
  checkUser, logout
}
export default connect(StateToProps, ActionsToProps)(App);
