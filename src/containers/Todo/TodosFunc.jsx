import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Context"
import Todos from "../../components/Todo/Todos"
import { useHistory } from "react-router-dom"
import CircularProgress from "@material-ui/core/CircularProgress"

function TodosFunc() {
	const [userCredentials] = useContext(UserContext)
	const [todos, setTodos] = useState([])
	const history = useHistory()

	const fetchTodos = () => {
		fetch("https://fetest.morabaaapps.com/api/v1/todos?filter=null", {
			headers: {
				"Content-Type": "application/json",
				Authorization: userCredentials.token
			}
		})
			.then((res) => res.json())
			.then((data) => {
				// to show only the current todos
				setTodos([])
				for (let i in data) {
					if (data[i].doneAt === null) {
						setTodos((prevItems) => [...prevItems, data[i]])
					}
				}
			})
	}
	useEffect(() => {
		if (userCredentials.token === undefined) {
			history.push("/login")
		} else fetchTodos()

		return () => setTodos([])
	}, [])

	return (
		<div>
			{todos ? (
				<Todos todos={todos} />
			) : (
				<div align="center">
					<CircularProgress />
				</div>
			)}
		</div>
	)
}

export default TodosFunc
