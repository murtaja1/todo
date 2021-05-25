import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Register from "./auth/Register"
import Login from "./auth/Login"
import AddTodoFunc from "./Todo/AddTodoFunc"
function Routes() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
					<Route path="/addTodo" component={AddTodoFunc} />
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default Routes
