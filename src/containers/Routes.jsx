import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Register from "./auth/Register"
import Login from "./auth/Login"
function Routes() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default Routes
