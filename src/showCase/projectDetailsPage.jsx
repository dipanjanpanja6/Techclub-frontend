import React, { useEffect } from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, makeStyles, Chip, Grid, Link } from '@material-ui/core'
import PropType from 'prop-types'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { getProjectByID } from '../redux/actions/extra'
import { useHistory, useParams } from 'react-router-dom'

// import Ribbon from '../component/ribbon'
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
const useStyles = makeStyles({
    root: {
        minHeight: '100vh'
    },
    media: {
        height: 300,
    },
});

function ProjectDetailsPage(props) {
    const { id } = useParams()
    const classes = useStyles();
    const history = useHistory();
    const [state, setState] = React.useState('')
    // console.log(props);

    useEffect(() => {
        
        props.getProjectByID(id)
    }, [])
    // console.log(props);
    useEffect(() => {
        
        props.admin.success && setState(props.admin.data)
        document.title =props.admin.success?  `${props.admin.data.title} | Project - Tech Club - GCECT`:`Project - Tech Club - GCECT`
        
        props.admin.error && console.log(props.admin)
        props.admin.error && toast.error(props.admin.message)
    }, [props.admin])

    const [fab, setFab] = React.useState(false)
    const fabSwitch = () => {
        setFab(true)
    }
    const tag = state ? state.tag.map((p, i) => {
        return (
            <Chip key={i} style={{ margin: 7, backgroundColor: '#0F1' }} label={'#' + p} size="small" />
        )
    }) : ''
    return (
        <Card className={classes.root}>
            <CardActionArea onClick={fabSwitch}>


                <CardMedia
                    className={classes.media}
                    image={state.imageUri}
                    title="Contemplative Reptile"
                />
                <Grid style={{ position: 'absolute', top: 60, left: 12 }}>
                    {(new Date(Date.parse(state.createdAt)) - new Date()) <= 14 ?
                        <Chip style={{ marginRight: 7 }} color="secondary" label='NEW' size="small" /> : ''}

                    {state.status &&
                        <Chip style={{ backgroundColor: '#ff0' }} label='Member Require' size="small" />}


                    {!fab ? <FavoriteBorderIcon style={{ marginInlineStart: 7, color: '#FFF' }} /> :
                        <FavoriteIcon style={{ marginInlineStart: 7 }} color='error' />}


                </Grid>
            </CardActionArea>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {state.title}
                    </Typography>
                    <Typography gutterBottom variant="caption">
                        {state.email}
                    </Typography>
                    <br />
                    <>
                        {tag}
                        <Chip style={{ margin: 7 }} color="secondary" label='#GCECT' size="small" />
                    </>
                    <Typography style={{ maxHeight: 300, overflow: 'hidden' }} variant="body2" color="textSecondary" component="p">
                        {state.desc}
                    </Typography>
                    <br />
                    <Typography style={{ maxHeight: 300, overflow: 'hidden' }} variant="body2" color="textSecondary" component="p">
                        Github Link : {<Link  rel="external nofollow noopener noreferrer" target="_blank" variant='caption' color='primary'  href={state.gitLink} >{state.gitLink}</Link>}
                    </Typography>
                    <Typography style={{ maxHeight: 300, overflow: 'hidden' }} variant="body2" color="textSecondary" component="p">
                        Project Live at {<Link  rel="external nofollow noopener noreferrer" target="_blank" variant='caption' color='primary' href={state.liveLink} >{state.liveLink}</Link>}
                    </Typography>
                </CardContent>
            <CardActions>
                <Button size="small" onClick={() => {
                    props.auth ? toast.warn('New member registration is disable right now. Stay tune or contact team') : history.push('/auth')
                }} color="secondary">
                    show interest
        </Button>
                <Button size="small" onClick={() => {
                    navigator.clipboard.writeText(window.location.href)
                    toast.success('Link copied to clipboard')
                }} color="primary">
                    Share
        </Button>
                <Button size="small" onClick={() => {
                    history.goBack()
                }} color="primary">
                    close
        </Button>
            </CardActions>
        </Card>
    );
}
ProjectDetailsPage.propType = {
    getUserByUID: PropType.func.isRequired,
    admin: PropType.object.isRequired,
    auth: PropType.bool.isRequired,
}
const mapToState = (state) => ({
    admin: state.admin.projectByID
})
const mapToProps = {
    getProjectByID
}
export default connect(mapToState, mapToProps)(ProjectDetailsPage)