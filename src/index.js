// import 'core-js/stable'
// import 'core-js/es/map';
// import 'core-js/es/set';
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import store from "./redux/store"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { Provider } from "react-redux"

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
)

serviceWorker.register()
