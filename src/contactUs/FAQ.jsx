import React, { useEffect } from 'react'
import { Paper, Typography, Grid, Divider, Chip, } from '@material-ui/core'
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { connect } from 'react-redux';
import { getFaq } from '../redux/actions/extra'
import PropType from 'prop-types'
import { toast } from 'react-toastify';

const style = makeStyles((theme) => ({

    paper: {
        padding: '20px',
    },
    pape: {
        padding: '20px',
    },
    intro: {
        height: '50vh',
        textAlign: 'center',
        backgroundSize: 'cover',
        backgroundPosition:'center',
        backgroundRepeat: 'no-repeat',
        //    background: 'url(https://source.unsplash.com/random/?tech)',
        color: 'white',
        backgroundImage: `url(${require('../assets/FAQ.webp')})`,
    },
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}))
const FAQ = (props) => {
    const sty = style()
    const [expanded, setExpanded] = React.useState(false);
    const [state, setState] = React.useState('');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    useEffect(() => {
        document.title = `FAQ | Frequently Asked Questions - Tech Club - GCECT`;
        props.getFaq()
    }, [])
    useEffect(() => {
        console.log(props);
        if (props.faq) {

            props.faq.success && setState(props.faq.data)
            props.faq.error && toast.error(props.faq.error)
        }
    }, [props.faq])

    const listFaq = state ? state.map(p => {
        return (
            <ExpansionPanel key={p.id} expanded={expanded === p.id} onChange={handleChange(p.id)}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography className={sty.heading}>{p.title}</Typography>
                    <Typography className={sty.secondaryHeading}>
                        {p.topic}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>
                        
                        {p.tag.map((pp, i) => {
                            return (<Chip style={{ margin: '0 0 12px 12px' }} key={i} color='primary' label={'#'+pp} />)
                        })
                        }
                        <Divider style={{width:'80vw'}}/>
                        <Typography>
                            {p.desc}
                        </Typography>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>

        )
    }) : <CircularProgress />
    return (
        <>

            <Grid className={sty.intro} item xs={12}>
                <Typography style={{ paddingTop: '25vh' }} variant='h3'>
                    Frequently Asked Questions (FAQs)
                </Typography>
            </Grid>
            <Grid container justify='center' item xs={12} className={sty.pape}>
                <Paper elevation={10} className={sty.paper}>
                    <div className={sty.root}>
                        {listFaq}
                    </div>
                </Paper>
            </Grid>
        </>)
}
FAQ.propType = {
    faq: PropType.object.isRequired,
    getFaq: PropType.func.isRequired,
}
const mapActions = {
    getFaq
}
const mapState = (state) => ({
    faq: state.admin.getFaq

})

export default connect(mapState, mapActions)(FAQ)