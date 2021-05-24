import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Register from "./auth/Register"

function Routes() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path="/register" component={Register} />
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default Routes
