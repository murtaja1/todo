import React, { useState, useEffect } from "react"
import AddTodo from "../../components/Todo/AddTodo"
import { useHistory } from "react-router-dom"

function AddTodoFunc() {
	const history = useHistory()

	const [todo, setTodo] = useState({
		title: "",
		body: "",
		binary: ""
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
			binary: formData
		})
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const promise = await fetch("https://fetest.morabaaapps.com/api/v1/todos", {
				method: "POST",
				headers: {
					Authorization: localStorage.token
				},
				body: todo.binary
			})
			if (promise.status === 400) {
				alert("اسم المستخدم او كلمة المرور غير صحيحة!")
			} else {
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
		if (localStorage.token === undefined) {
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
