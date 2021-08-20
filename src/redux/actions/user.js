import { url } from '../../config/requirements'
import { USER, PROJECTGET, USERLIST, EVENT, USERBYUID, EVENTBYUID, PROJECTBYUID } from '../type'


export const getEvent = (data) => (dispatch) => {
    fetch(`${url}/events`, {
        method: 'GET',
        credentials: 'include',
    }).then(res => {
        res.json().then(d => {
            // console.log(d);
            dispatch({
                type: EVENT,
                payload: d
            })
        })
    }).catch(r => {
        
        console.log(r);
        // toast.error('Failed! Try again sometime later or contact team')
    })
}
export const getUserList = (data) => (dispatch) => {
    fetch(`${url}/userlist`, {
        method: 'GET',
        credentials: 'include',
    }).then(res => {
        res.json().then(d => {
            // console.log(d);
            dispatch({
                type: USERLIST,
                payload: d
            })
        })
    }).catch(r => {
        
        console.log(r);
        // toast.error('Failed! Try again sometime later or contact team')
    })
}
export const getUser = (data) => (dispatch) => {
    fetch(`${url}/whoiam`, {
        method: 'GET',
        credentials: 'include',
    }).then(res => {
        res.json().then(d => {
            // console.log(d);
            dispatch({
                type: USER,
                payload: d
            })
        })
    }).catch(r => {
        
        console.log(r);
        // toast.error('Failed! Try again sometime later or contact team')
    })
}
export const getUserProject = (data) => (dispatch) => {
    fetch(`${url}/projectget`, {
        method: "GET",
        credentials: 'include',
       
        
    }).then(res => {
        res.json().then(d => {
            // console.log(d);
            dispatch({
                type:PROJECTGET,
                payload:d
            })
        })
    }).catch(r => {
       
        console.log(r);
        // toast.error('Failed! Try again sometime later or contact team')
    })
}

export const getUserByUID = (uid) => (dispatch) => {
    fetch(`${url}/${uid}/user`, {
        method: 'GET',
    }).then(res => {
        res.json().then(d => {
            // console.log(d);
            dispatch({
                type: USERBYUID,
                payload: d
            })
        })
    }).catch(r => {
        
        console.log(r);
        // toast.error('Failed! Try again sometime later or contact team')
    })
}
export const getProjectByUID = (uid) => (dispatch) => {
    fetch(`${url}/${uid}/projects`, {
        method: 'GET',
    }).then(res => {
        res.json().then(d => {
            // console.log(d);
            dispatch({
                type: PROJECTBYUID,
                payload: d
            })
        })
    }).catch(r => {
        
        console.log(r);
        // toast.error('Failed! Try again sometime later or contact team')
    })
}
export const getEventByUID = (uid) => (dispatch) => {
    fetch(`${url}/${uid}/events`, {
        method: 'GET',
    }).then(res => {
        res.json().then(d => {
            // console.log(d);
            dispatch({
                type: EVENTBYUID,
                payload: d
            })
        })
    }).catch(r => {
        
        console.log(r);
        // toast.error('Failed! Try again sometime later or contact team')
    })
}