import { url } from "../../config/requirements"
import { LOGIN, AUTH, ACTIVATE } from "../type"
import { toast } from "react-toastify"

export const login = data => dispatch => {
  fetch(`${url}/login`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-type": "Application/json" },
    body: JSON.stringify(data),
  })
    .then(res => {
      res.json().then(d => {
        // console.log(d);
        dispatch({
          type: LOGIN,
          payload: d,
        })
      })
    })
    .catch(r => {
      console.log(r)
      toast.error("Something went wrong ! Try again")
    })
}
export const costumeLogin = (data, token) => dispatch => {
  fetch(`${url}/customLogin`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "Application/json",
      authorization: "Bearer " + token,
    },
    body: JSON.stringify(data),
  })
    .then(res => {
      res.json().then(d => {
        console.log("processing request...")
        // console.log(d);
        dispatch({
          type: LOGIN,
          payload: d,
        })
      })
    })
    .catch(r => {
      console.log(r)
      toast.error("Something went wrong ! Try again")
    })
}
export const signUp = data => dispatch => {
  // console.log(data);

  fetch(`${url}/signUp`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-type": "Application/json" },
    body: JSON.stringify(data),
  })
    .then(res => {
      res.json().then(d => {
        // console.log(d);
        dispatch({
          type: LOGIN,
          payload: d,
        })
      })
    })
    .catch(r => {
      console.log(r)
      toast.error("Something went wrong ! Try again")
    })
}
export const activate = data => dispatch => {
  fetch(`${url}/activate`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(data),
  })
    .then(res => {
      res.json().then(d => {
        // console.log(d);
        if (d.success === true) {
          window.location = "/home"
        } else if (d.error) {
          dispatch({
            type: ACTIVATE,
            payload: d,
          })
        }
      })
    })
    .catch(r => {
      console.log(r)
      toast.error("Something went wrong ! Try again")
    })
}
export const checkUser = () => dispatch => {
  fetch(`${url}/checkUser`, {
    method: "POST",
    credentials: "include",
  }).then(res => {
    res
      .json()
      .then(d => {
        // console.log(d);
        if (d.success === true) {
          dispatch({
            type: AUTH,
            payload: true,
          })
        } else if (d.error === true) {
          console.log(d.message)
          d.message == "app/network-error" && toast.error("Server Offline! Please Try After Sometime")
          dispatch({
            type: AUTH,
            payload: false,
          })
        }
      })
      .catch(r => {
        console.log(r)
        toast.error("Something went wrong ! Try again")
      })
  })
}
export const logout = () => dispatch => {
  fetch(`${url}/logout`, {
    method: "POST",
    credentials: "include",
  }).then(res => {
    res
      .json()
      .then(d => {
        // console.log(d);
        dispatch({
          type: AUTH,
          payload: false,
        })
      })
      .catch(r => console.log(r))
  })
}
