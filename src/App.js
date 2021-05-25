import Routes from "./containers/Routes"
import { ThemeProvider, createMuiTheme } from "@material-ui/core"
import UserProvider from "./Context"
const theme = createMuiTheme({ direction: "rtl" })
function App() {
	return (
		<div dir="rtl">
			<ThemeProvider theme={theme}>
				<UserProvider>
					<Routes />
				</UserProvider>
			</ThemeProvider>
		</div>
	)
}

export default App
