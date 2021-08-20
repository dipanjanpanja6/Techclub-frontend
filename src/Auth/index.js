import React, { Component } from 'react'
import { connect } from "react-redux";
import firebase from '../config/requirements'
import { useHistory, useLocation } from 'react-router-dom'

import clsx from 'clsx';
import { login, signUp, costumeLogin, activate } from '../redux/actions/admin'
import { toast } from 'react-toastify';


import { url } from "../config/requirements";
import PropType from "prop-types";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Grid, Paper, Typography, Divider, TextField, Link, Button, Fab, SvgIcon, InputAdornment } from '@material-ui/core'
import ProgressBar from '../config/ProgrssBar';
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub';
import withStyles from "@material-ui/core/styles/withStyles";
import Copyright from '../copyright'

const useStyles = theme => ({
    root: {
        minHeight: "100vh",
        textAlign: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        background: 'url(https://source.unsplash.com/random/?tech,network,gamming)',
    },
    paper: {
        padding: theme.spacing(5),
        margin: theme.spacing(2),
        width: theme.spacing(16) * 3,
        textAlign: "center",
    },
    button: {
        marginTop: "10px",
    },
    buttonFab: {
        margin: "0 10px",
    },
    d: {
        display: 'contents'
    },
    google: { backgroundColor: '#dd4b39' }, GitHub: { backgroundColor: '#000', color: '#fff' }, twitter: { background: '#00acee', color: '#fff' },
    copyright: {
        fontSize: 'x-small',
        fontFamily: 'monospace',
    },
    Link: {
        cursor: 'pointer',
        textAlign: 'start'
    },
    help: {
        fontSize: 'small',
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '10px'
    },
    roo: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '30ch',
        },
        margin: '20px'
    },
    inputs: {
        display: 'flex',
        flexDirection: 'column'
    },
    butto: {
        backgroundColor: '#0a0',
        margin: '12px',
        marginBottom: 0
    },
});

class Auth extends Component {

    constructor() {
        super()
        this.state = {
          signup: false,
          progress: false,
          signupPassword: "",
          signupRepass: "",
          loginPassword: "",
          loginEmail: "",
          error: false,
          message: "",
          data: {},
          token: "",
          auth: false,
          isNew: "",
          name: "",
          email: "",
          PH: "",
          addr: "",
          clg: "Government College of Engineering And Ceramic Technology",
          date: "",
          uid: "",
          roll: "",
        }

    }

    componentDidMount = () => {
        document.title = `Create new account to being a part of Family | Login | SignUp - Tech Club - GCECT`;
    }
    componentWillMount() {
        // console.log(this.props.Auth)
    }

    componentWillReceiveProps = (n, c) => {
        // console.log(n);

        n.Auth.admin.login && this.setState({ progress: false })
        if (n.Auth.admin.login.success === true) {
            !n.Auth.admin.login.isActivated && this.setState({
                auth: true,
                name: n.Auth.admin.login.name,
                email: n.Auth.admin.login.email,
                uid: n.Auth.admin.login.uid
            })
            let from = n.location.state ? n.location.state.from.pathname : "/"
            console.log(from)
            n.Auth.admin.login.isActivated && (window.location = from)


            // n.Auth.admin.login.isActivated && ( n.history.replace(from))

        } else if (n.Auth.admin.login.error === true) (
            toast.error(n.Auth.admin.login.message)
        )

        // n.Auth.admin && this.setState({ auth: n.Auth.admin.login.success })

    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }
    handleSignUp = (e) => {
        e.preventDefault();
        if (this.state.signupPassword !== this.state.signupRepass) {
            return toast.error('Password does not match')
            // return this.setState({ error: true, message: 'Password does not match' })
        }
        const data = {
            name: this.state.name,
            email: this.state.email,
            pass: this.state.signupPassword,
        };
        this.props.signUp(data);
        this.setState({ progress: true })

    };

    handleLogin = (e) => {
        e.preventDefault();
        const data = {
            email: this.state.loginEmail,
            pass: this.state.loginPassword,
        };
        this.props.login(data);
        this.setState({ progress: true })

    };
    handleLoginClick = () => {
        this.setState({ signup: !this.state.signup });
    };
    TwitterOuth = () => {
        var provider = new firebase.auth.TwitterAuthProvider();
        this.redirectLogin(provider)
        this.setState({ progress: true })

    }
    gitHubOuth = () => {
        var provider = new firebase.auth.GithubAuthProvider();
        // provider.addScope('repo')
        this.redirectLogin(provider)
        this.setState({ progress: true })

    }
    facebook = () => {
        var provider = new firebase.auth.FacebookAuthProvider()
        // firebase.auth().useDeviceLanguage();
        this.redirectLogin(provider)
        this.setState({ progress: true })

    }
    google = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        this.redirectLogin(provider)
        this.setState({ progress: true })
    }

    redirectLogin = async (provider) => {
        var data = {};

        var token, user, isNewUser;
        await firebase.auth().signInWithPopup(provider).then(function (result) {
            // PToken = result.credential.accessToken;
            isNewUser = result.additionalUserInfo.isNewUser;
            user = result.user;
            console.log(result);

            return user.getIdToken(true)
        }).then(d => {
            token = d
        })
            .catch(function (error) {
                // var errorCode = error.code;
                var errorMessage = error.message;
                // // The email of the user's account used.
                // var email = error.email;
                // // The firebase.auth.AuthCredential type that was used.
                // var credential = error.credential;
                console.log(error);

                if (error.code === 'auth/account-exists-with-different-credential') {
                    // var pendingCred = error.credential;
                    var email = error.email;
                    firebase.auth().fetchSignInMethodsForEmail(email).then(function (methods) {
                        console.log(methods[0]);

                        toast.error('Account already exist! Login with ' + methods[0])
                        // return
                        // if (methods[0] === 'password') {
                        //     alert('account-exists-with-email-password-credential')
                        //     // var password = promptUserForPassword(); // TODO: implement promptUserForPassword.
                        //     // auth.signInWithEmailAndPassword(email, password).then(function (user) {
                        //     //     return user.linkWithCredential(pendingCred);
                        //     // }).then(function () {
                        //     //     goToApp();
                        //     // });
                        //     return;
                        // }
                        // var provider = getProviderForProviderId(methods[0]);
                        // firebase.auth().signInWithPopup(provider).then(function (result) {
                        //     result.user.linkAndRetrieveDataWithCredential(pendingCred).then(function (usercred) {
                        //         console.log(usercred);

                        //     });
                        // });
                    });


                } else {
                    toast.error(errorMessage)
                    return
                }

            });

        if (token && user) {
            data = {
                isNewUser: isNewUser,
                name: user.displayName,
                email: user.email,
                verified: user.emailVerified,
                userImage: user.photoURL,
                uid: user.uid,
                // phoneNumber: user.phoneNumber

            }
            console.log(data);
            this.setState({
                isNew: isNewUser,
                name: user.displayName,
                email: user.email,
                uid: user.uid,
            })
            this.props.costumeLogin(data, token)
        } else {
            this.setState({ progress: false })
            // toast.error('Something went wrong')
            return
        }

    }

    submit = (e) => {
        e.preventDefault();
        const data = {
            name: this.state.name,
            email: this.state.email,
            date: this.state.date,
            address: this.state.addr,
            Ph: this.state.PH,
            clg: this.state.clg,
            uid: this.state.uid,
            roll:this.state.roll
        }
        this.props.activate(data)
        this.setState({ progress: true })

    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    forgetPass = () => {
        toast.warn('Contact any Class A member')
    }
    render() {
        const { classes } = this.props;
        return (<>
            {this.state.progress && <ProgressBar />}
            <Grid
                container
                justify="center"
                alignContent="center"
                className={classes.root}
            >

                <Grid item>
                    {!this.state.auth &&
                        <Paper
                            elevation={5} className={classes.paper}>
                            <Typography variant="h5">Be together, whenever.</Typography>
                            <Typography variant="subtitle1">
                                A simple way to connect with anyone
                            </Typography>
                            <Divider />
                            {this.state.signup && (
                                <form onSubmit={this.handleSignUp} className={classes.from}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        margin="dense"
                                        size="small"
                                        id="name"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        placeholder="Full Name"
                                        required
                                        autoFocus
                                    />
                                    <br />
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        required
                                        margin="dense"
                                        size="small"
                                        style={{ font: "medium" }}
                                        type="email"
                                        id="email"
                                        placeholder="Email address"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                    <br />
                                    <TextField
                                        margin="dense"
                                        fullWidth
                                        type="password"
                                        placeholder="Password"
                                        helperText="minimum 6 digits"
                                        required
                                        // size='small'
                                        variant="outlined"
                                        id="signupPassword"
                                        value={this.state.signupPassword}
                                        onChange={this.handleChange}
                                    />
                                    <br />
                                    <TextField
                                        margin="dense"
                                        type="password"
                                        placeholder="Retype password"
                                        fullWidth
                                        required
                                        id="signupRepass"
                                        value={this.state.signupRepass}
                                        variant="outlined"
                                        onChange={this.handleChange}
                                    />
                                    <br />
                                    <Button

                                        className={classes.button}
                                        variant="contained"
                                        fullWidth
                                        type="submit"
                                        color="secondary"
                                    >
                                        Sign up
                </Button>

                                </form>
                            )}
                            {!this.state.signup && (
                                <form onSubmit={this.handleLogin} className={classes.from}>
                                    <TextField
                                        autoFocus
                                        required
                                        fullWidth
                                        variant="outlined"
                                        margin="dense"
                                        size="small"
                                        style={{ font: "medium" }}
                                        type="email"
                                        id="loginEmail"
                                        placeholder="Email address"
                                        value={this.state.loginEmail}
                                        onChange={this.handleChange}
                                    />
                                    <br />
                                    <TextField
                                        margin="dense"
                                        fullWidth
                                        type="password"
                                        placeholder="Password"
                                        required
                                        // size='small'
                                        variant="outlined"
                                        id="loginPassword"
                                        onChange={this.handleChange}
                                    />
                                    <br />
                                    <Button
                                        fullWidth
                                        show="false"
                                        className={classes.button}
                                        variant="contained"
                                        type="submit"
                                        color="secondary"
                                    >
                                        Sign in
                </Button>
                                </form>
                            )}

                            <Typography variant='body2' color='textSecondary' style={{ padding: "12px" }}>
                                Or continued with
</Typography>

                            <Fab

                                onClick={this.facebook}
                                size='medium'
                                className={clsx(classes.buttonFab)}
                                variant='round'
                                color='primary'
                            >
                                <FacebookIcon />
                            </Fab>
                            <Fab
                                onClick={this.google}
                                size='medium'
                                className={clsx(classes.buttonFab, classes.google)}
                                variant='round'
                                color='primary'
                            >
                                <SvgIcon>
                                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 16.003906 14.0625 L 16.003906 18.265625 L 21.992188 18.265625 C 21.210938 20.8125 19.082031 22.636719 16.003906 22.636719 C 12.339844 22.636719 9.367188 19.664063 9.367188 16 C 9.367188 12.335938 12.335938 9.363281 16.003906 9.363281 C 17.652344 9.363281 19.15625 9.96875 20.316406 10.964844 L 23.410156 7.867188 C 21.457031 6.085938 18.855469 5 16.003906 5 C 9.925781 5 5 9.925781 5 16 C 5 22.074219 9.925781 27 16.003906 27 C 25.238281 27 27.277344 18.363281 26.371094 14.078125 Z" /></svg>                                    </SvgIcon>
                            </Fab>
                            <Fab
                                onClick={this.gitHubOuth}
                                size='medium'
                                className={clsx(classes.buttonFab, classes.GitHub)}
                                variant='round'
                                color='primary'
                            >
                                <GitHubIcon />
                            </Fab>
                            <Fab
                                size='medium'
                                onClick={this.TwitterOuth}
                                className={clsx(classes.buttonFab, classes.twitter)}
                                color='primary'
                                variant='round'
                            >
                                <TwitterIcon />
                            </Fab>
                            <br />
                            {this.state.signup && (
                                <div className={classes.help}>
                                    <Typography

                                        className={classes.Link}
                                        onClick={this.handleLoginClick}
                                        variant='body2'
                                        color='primary'
                                    >
                                        Already have account ! Login
                                </Typography>
                                </div>
                            )}
                            {!this.state.signup && (
                                <div className={classes.help}>
                                    <Typography
                                        className={classes.Link}
                                        color='primary'
                                        onClick={this.handleLoginClick}
                                        variant="body2"

                                    >
                                        Register new user
                                </Typography>
                                    <Typography
                                        color='error'
                                        className={classes.Link}
                                        onClick={this.forgetPass}
                                        variant="body2"

                                    >
                                        Forget password ?
                                </Typography>
                                </div>
                            )}<br />
                            <Divider />
                            <Copyright />
                        </Paper>
                    }

                    {this.state.auth &&
                        <Paper elevation={8} className={classes.paper}>
                            <Typography style={{ paddingBottom: '20px' }} variant='subtitle1'>
                                Almost there. To finish creating your account, fill in the missing details below
                    </Typography>
                            <Divider />
                            <form className={classes.roo} onSubmit={this.submit} autoComplete="off">
                                <div className={classes.inputs} >
                                    <TextField required label="Full Name" id='name' InputProps={{
                                        readOnly: true,
                                    }} value={this.state.name} onChange={this.handleChange} />
                                    <TextField required label="Email" type='email' InputProps={{
                                        readOnly: true,
                                    }} id='email' value={this.state.email} onChange={this.handleChange} />
                                    <TextField
                                        label="Collage Name" id='clg' value={this.state.clg} onChange={this.handleChange}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        required
                                    />
                                    <TextField
                                        label="Roll No" helperText="GCECTB-X00-0000" id='roll' value={this.state.roll} onChange={this.handleChange}
                                        required 
                                        helperText="Use your GCECT roll no"
                                        error={!new RegExp("^GCECT[BM]-[RL][12][0-9]-[123][0-9]{3}$").test(this.state.roll)}
                                    />
                                    <TextField
                                        required
                                        label="Date of Birth"
                                        type='date'
                                        id='date' value={this.state.date} onChange={this.handleChange}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <TextField label="Address" id='addr' value={this.state.addr} onChange={this.handleChange} required />
                                    <TextField
                                        label="Phone Number"
                                        required
                                        type='number'
                                        
                                        helperText='Phone no should be without country code. E.x. (+91)'
                                        error={!new RegExp(`^[0-9]{10}$`).test(this.state.PH)}
                                        id='PH' value={this.state.PH} onChange={this.handleChange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    +91
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </div>
                                <Fab variant='extended' color='primary' className={classes.butto} type='submit'>
                                    <CheckCircleIcon />
                    Done
                    </Fab>
                            </form>
                            <Typography variant='caption'>
                                {' By click on Done you are agree our '}
                                <Link color='primary' href='/privacy'>
                                    Privacy Policy
                    </Link>{' and '}
                                <Link color='primary' href='/privacy'>
                                    Terms & Conditions
                    </Link>

                            </Typography>
                        </Paper>
                    }

                </Grid>
            </Grid>
        </>
        )
    }
}
Auth.propType = {
    login: PropType.func.isRequired,
    signUp: PropType.func.isRequired,
    costumeLogin: PropType.func.isRequired,
    Auth: PropType.object.isRequired,
    activate: PropType.func.isRequired
}
const mapActions = {
    login, signUp, costumeLogin, activate
}
const mapState = (state) => ({
    Auth: state
})
export default connect(mapState, mapActions)(withStyles(useStyles)(Auth));