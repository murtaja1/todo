import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Register from "./auth/Register"
import Login from "./auth/Login"
import AddTodoFunc from "./Todo/AddTodoFunc"
import TodosFunc from "./Todo/TodosFunc"
function Routes() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
					<Route exact path="/" component={TodosFunc} />
					<Route path="/addTodo" component={AddTodoFunc} />
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default Routes
