import { url } from '../../config/requirements'
import {  ALLPROJECT,TOPPROJECT,GETFAQ, ALLEVENT, EVENTBYID, PROJECTBYID } from '../type'


export const getAllEvent = () => (dispatch) => {
    fetch(`${url}/alleventsget`, {
        method: 'GET',
    }).then(res => {
        res.json().then(d => {
            // console.log(d);
            dispatch({
                type: ALLEVENT,
                payload: d
            })
        })
    }).catch(r => {
        
        console.log(r);
        // toast.error('Failed! Try again sometime later or contact team')
    })
}
export const getAllProject = () => (dispatch) => {
    fetch(`${url}/allprojectget`, {
        method: "GET",        
    }).then(res => {
        res.json().then(d => {
            // console.log(d);
            dispatch({
                type:ALLPROJECT,
                payload:d
            })
        })
    }).catch(r => {
       
        console.log(r);
        // toast.error('Failed! Try again sometime later or contact team')
    })
}
export const getTopProject = () => (dispatch) => {
    fetch(`${url}/alltopprojectget`, {
        method: "GET",        
    }).then(res => {
        res.json().then(d => {
            // console.log(d);
            dispatch({
                type:TOPPROJECT,
                payload:d
            })
        })
    }).catch(r => {
       
        console.log(r);
        // toast.error('Failed! Try again sometime later or contact team')
    })
}
export const getFaq = () => (dispatch) => {
    fetch(`${url}/faq`, {
        method: "GET",        
    }).then(res => {
        res.json().then(d => {
            // console.log(d);
            dispatch({
                type:GETFAQ,
                payload:d
            })
        })
    }).catch(r => {
       
        console.log(r);
        // toast.error('Failed! Try again sometime later or contact team')
    })
}



export const getProjectByID = (id) => (dispatch) => {
    fetch(`${url}/${id}/idprojects`, {
        method: 'GET',
    }).then(res => {
        res.json().then(d => {
            // console.log(d);
            dispatch({
                type: PROJECTBYID,
                payload: d
            })
        })
    }).catch(r => {
        
        console.log(r);
        // toast.error('Failed! Try again sometime later or contact team')
    })
}
// export const getEventByID = (id) => (dispatch) => {
//     fetch(`${url}/${id}/idevents`, {
//         method: 'GET',
//     }).then(res => {
//         res.json().then(d => {
//             // console.log(d);
//             dispatch({
//                 type: EVENTBYID,
//                 payload: d
//             })
//         })
//     }).catch(r => {        
//         console.log(r);
//     })
// }