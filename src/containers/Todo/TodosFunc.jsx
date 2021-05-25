import React, { useEffect, useState } from "react"
import Todos from "../../components/Todo/Todos"
import CircularProgress from "@material-ui/core/CircularProgress"
import { useHistory } from "react-router-dom"
import { Button } from "@material-ui/core"

function TodosFunc() {
	const [todos, setTodos] = useState([])
	const history = useHistory()

	const logout = () => {
		history.push("/login")
		localStorage.clear()
	}
	const fetchTodos = () => {
		fetch("https://fetest.morabaaapps.com/api/v1/todos?filter=null", {
			headers: {
				"Content-Type": "application/json",
				Authorization: localStorage.token
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
		if (localStorage.token === undefined) {
			history.push("/login")
		}
		fetchTodos()

		return () => setTodos([])
	}, [])

	return (
		<div>
			{localStorage.token && <Button onClick={logout}>تسجيل الخروج</Button>}

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
