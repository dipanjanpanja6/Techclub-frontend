import { GETFAQ, LOGIN, ACTIVATE, AUTH, EVENT, PROJECTBYUID, EVENTBYUID, USER, PROJECTGET, USERLIST, USERBYUID, TOPPROJECT, ALLPROJECT, ALLEVENT, EVENTBYID, PROJECTBYID } from "../type"

const initialState = {
  login: {},
  activate: "",
  auth: "ll",
  user: "",
  projects: [],
  userList: {},
  events: "",
  userByUID: "",
  eventByUID: "",
  projectByUID: "",

  topProject: "",
  allProject: "",
  allEvent: "",
  eventByID: "",
  projectByID: "",
  getFaq: "",
}

export default function (state = initialState, actions) {
  switch (actions.type) {
    case GETFAQ:
      return {
        ...state,
        getFaq: actions.payload,
      }
    case PROJECTBYID:
      return {
        ...state,
        projectByID: actions.payload,
      }
    case EVENTBYID:
      return {
        ...state,
        eventByID: actions.payload,
      }
    case ALLEVENT:
      return {
        ...state,
        allEvent: actions.payload,
      }
    case ALLPROJECT:
      return {
        ...state,
        allProject: actions.payload,
      }
    case TOPPROJECT:
      return {
        ...state,
        topProject: actions.payload,
      }

    case PROJECTBYUID:
      return {
        ...state,
        projectByUID: actions.payload,
      }
    case EVENTBYUID:
      return {
        ...state,
        eventByUID: actions.payload,
      }
    case USERBYUID:
      return {
        ...state,
        userByUID: actions.payload,
      }
    case EVENT:
      return {
        ...state,
        events: actions.payload,
      }
    case USERLIST:
      return {
        ...state,
        userList: actions.payload,
      }
    case PROJECTGET:
      return {
        ...state,
        projects: actions.payload,
      }
    case USER:
      return {
        ...state,
        user: actions.payload,
      }
    case AUTH:
      return {
        ...state,
        auth: actions.payload,
      }
    case LOGIN:
      return {
        ...state,
        login: actions.payload,
      }
    case ACTIVATE:
      return {
        ...state,
        activate: actions.payload,
      }

    default:
      return state
  }
}
