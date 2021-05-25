import React, { useState } from "react"
import RegisterForm from "../../components/Auth/RegisterForm"
import { useHistory } from "react-router-dom"

function Register() {
	const [user, setUser] = useState({
		username: "",
		password1: "",
		password2: ""
	})
	const history = useHistory()
	const handleInput = (e) => {
		const name = e.target.name

		setUser({
			...user,
			[name]: e.target.value
		})
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const promise = await fetch("https://fetest.morabaaapps.com/api/v1/users", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					username: user.username,
					password1: user.password1,
					password2: user.password2
				})
			})
			if (promise.status === 400) {
				const res = await promise.json()
				alert(res)
			} else {
				history.push("/login")
				setUser({
					username: "",
					password1: "",
					password2: ""
				})
			}
		} catch (err) {
			console.log(err)
		}
	}
	return (
		<div>
			<RegisterForm handleSubmit={handleSubmit} handleInput={handleInput} values={user} />
		</div>
	)
}

export default Register
