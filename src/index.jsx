import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"

import "./index.css"
import store from "./redux/store"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { ThemeProvider } from "@material-ui/core"
import theme from "./config/theme"

render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

serviceWorker.unregister()
