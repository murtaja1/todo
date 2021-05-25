import React, { useState, useContext } from "react"
import LoginForm from "../../components/Auth/LoginForm"
import { useHistory } from "react-router-dom"
import { UserContext } from "../../Context"
function Login() {
	const [user, setUser] = useState({
		username: "",
		password: ""
	})
	const [, setUserCredentials] = useContext(UserContext)
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
				setUserCredentials(res)
				history.push("/")
				setUser({
					username: "",
					password: ""
				})
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
