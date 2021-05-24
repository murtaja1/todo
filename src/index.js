import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import rtl from "jss-rtl"
import { StylesProvider, jssPreset } from "@material-ui/core/styles"
import { create } from "jss"

const jss = create({ plugins: [...jssPreset().plugins, rtl()] })
ReactDOM.render(
	<React.StrictMode>
		<StylesProvider jss={jss}>
			<App />
		</StylesProvider>
	</React.StrictMode>,
	document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
