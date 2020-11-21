import { green, purple } from "@material-ui/core/colors";

const { createMuiTheme } = require("@material-ui/core");

export const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  },
  status: {
    danger: "orange"
  }
});
