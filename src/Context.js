import React, { createContext, useState } from "react"

export const UserContext = createContext()

const UserProvider = (props) => {
	const [userCredentials, setUserCredentials] = useState({})
	return (
		<UserContext.Provider value={[userCredentials, setUserCredentials]}>
			{props.children}
		</UserContext.Provider>
	)
}

export default UserProvider
