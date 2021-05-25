import React from "react"
import { Button, TextField, Grid, Container, Box } from "@material-ui/core"
function LoginForm({ handleInput, handleSubmit, values }) {
	const { username, password } = values
	return (
		<Container>
			<h1 align="center">تسجيل الدخول</h1>
			<form onSubmit={handleSubmit}>
				<Grid container direction="row" justify="center">
					<Grid item xs={12} md={7}>
						<p>اكتب اسمك:</p>
						<TextField
							onChange={(e) => handleInput(e)}
							value={username}
							name="username"
							fullWidth
							label="اكتب..."
							variant="outlined"
							required
						/>
					</Grid>
					<Grid md={7} xs={12} item>
						<p>اكتب كلمة المرور:</p>
						<TextField
							name="password"
							value={password}
							onChange={(e) => handleInput(e)}
							type="password"
							fullWidth
							label="اكتب..."
							variant="outlined"
							required
						/>
					</Grid>
					<Grid item md={7} align="center">
						<Box mt={1}>
							<Button variant="contained" type="submit" color="primary">
								تسجيل الدخول
							</Button>
						</Box>
					</Grid>
				</Grid>
			</form>
		</Container>
	)
}

export default LoginForm
