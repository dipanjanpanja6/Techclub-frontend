import { createTheme } from "@material-ui/core"
import { cyan, deepOrange } from "@material-ui/core/colors"

export default createTheme({
  palette: {
    type: "light",
    primary: {
      ...cyan,
    },
    secondary: {
      ...deepOrange,
    },
  },
})
