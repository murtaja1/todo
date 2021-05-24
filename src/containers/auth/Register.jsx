import React, { useState } from "react"
import RegisterForm from "../../components/Auth/RegisterForm"

function Register() {
	const [user, setUser] = useState({
		username: "",
		password1: "",
		password2: ""
	})
	const handleChange = (e) => {
		const name = e.target.name

		setUser({
			...user,
			[name]: e.target.value
		})
	}
	const handleSubmit = (e) => {
		console.log("done")
		e.preventDefault()
		fetch("https://fetest.morabaaapps.com/api/v1/users", {
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
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
				setUser({
					username: "",
					password1: "",
					password2: ""
				})
			})
	}
	return (
		<div>
			<RegisterForm handleSubmit={handleSubmit} handleChange={handleChange} values={user} />
		</div>
	)
}

export default Register
