import React, { useState, useEffect } from "react"
import ViewTodo from "../../components/Todo/ViewTodo"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import CircularProgress from "@material-ui/core/CircularProgress"

function ViewTodoFunc() {
	const [todo, setTodo] = useState()
	const [checked, setChecked] = useState(false)
	const { id } = useParams()
	const history = useHistory()

	const fetchTodo = () => {
		fetch(`https://fetest.morabaaapps.com/api/v1/todos/${id}`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: localStorage.token
			}
		})
			.then((res) => res.json())
			.then((data) => {
				setTodo(data)
			})
	}
	useEffect(() => {
		if (localStorage.token === undefined) {
			history.push("/login")
		}
		fetchTodo()
		return () => setTodo("")
	}, [])
	const handleDone = async () => {
		try {
			const promise = await fetch(`https://fetest.morabaaapps.com/api/v1/todos/${id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
					Authorization: localStorage.token
				},
				body: JSON.stringify({
					done: checked
				})
			})
			if (promise.ok === true) {
				history.push("/")
			}
		} catch (err) {
			console.log(err)
		}
	}
	return (
		<div>
			{todo ? (
				<ViewTodo todo={todo} checked={checked} setChecked={setChecked} handleDone={handleDone} />
			) : (
				<div align="center">
					<CircularProgress />
				</div>
			)}
		</div>
	)
}

export default ViewTodoFunc
