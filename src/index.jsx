import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"

import "./index.css"
import store from "./redux/store"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

serviceWorker.register()
