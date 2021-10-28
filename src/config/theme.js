import { createTheme } from "@material-ui/core"
import { blue, deepOrange } from "@material-ui/core/colors"

export default createTheme({
  palette: {
    type: "light",
    primary: {
      main: blue[900],
    },
    secondary: {
      ...deepOrange,
    },
  },
})
