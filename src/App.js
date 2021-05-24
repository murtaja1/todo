import Routes from "./containers/Routes"
import { ThemeProvider, createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({ direction: "rtl" })
function App() {
	return (
		<div dir="rtl">
			<ThemeProvider theme={theme}>
				<Routes />
			</ThemeProvider>
		</div>
	)
}

export default App
