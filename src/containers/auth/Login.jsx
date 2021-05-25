import React, { useState } from "react"
import LoginForm from "../../components/Auth/LoginForm"
import { useHistory } from "react-router-dom"
function Login() {
	const [user, setUser] = useState({
		username: "",
		password: ""
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
			const promise = await fetch("https://fetest.morabaaapps.com/api/v1/users/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					username: user.username,
					password: user.password
				})
			})
			if (promise.status === 400) {
				alert("اسم المستخدم او كلمة المرور غير صحيحة!")
			} else {
				const res = await promise.json()
				localStorage.setItem("token", res.token)
				setUser({
					username: "",
					password: ""
				})
				history.push("/")
			}
		} catch (err) {
			console.log(err)
		}
	}
	return (
		<div>
			<LoginForm handleSubmit={handleSubmit} handleInput={handleInput} values={user} />
		</div>
	)
}

export default Login
