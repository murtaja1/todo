import React, { useState, useContext, useEffect } from "react"
import AddTodo from "../../components/Todo/AddTodo"
import { UserContext } from "../../Context"
import { useHistory } from "react-router-dom"

function AddTodoFunc() {
	const [userCredentials] = useContext(UserContext)
	const history = useHistory()

	const [todo, setTodo] = useState({
		title: "",
		body: "",
		image: ""
	})
	const handleInput = (e) => {
		const name = e.target.name

		setTodo({
			...todo,
			[name]: e.target.value
		})
	}
	const handleFile = (e) => {
		const formData = new FormData()
		formData.append("Image", e.target.files[0])
		formData.append("Title", todo.title)
		formData.append("Body", todo.body)
		setTodo({
			...todo,
			image: formData
		})
	}
	const handleSubmit = async (e) => {
		console.log("done")
		e.preventDefault()
		try {
			const promise = await fetch("https://fetest.morabaaapps.com/api/v1/todos", {
				method: "POST",
				headers: {
					Authorization: userCredentials.token
				},
				body: todo.image
			})
			if (promise.status === 400) {
				alert("اسم المستخدم او كلمة المرور غير صحيحة!")
			} else {
				const res = await promise.json()
				console.log(res)
				setTodo({
					title: "",
					body: "",
					image: ""
				})
				history.push("/")
			}
		} catch (err) {
			console.log(err)
		}
	}
	useEffect(() => {
		if (userCredentials.token === undefined) {
			history.push("/login")
		}
	}, [])
	return (
		<div>
			<AddTodo
				handleInput={handleInput}
				handleSubmit={handleSubmit}
				handleFile={handleFile}
				values={todo}
			/>
		</div>
	)
}

export default AddTodoFunc
