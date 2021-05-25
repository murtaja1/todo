import React from "react"
import { Button, TextField, Grid, Container, Box } from "@material-ui/core"
import { Link } from "react-router-dom"

function RegisterForm({ handleInput, handleSubmit, values }) {
	const { username, password1, password2 } = values
	return (
		<Container>
			<h1 align="center">انشاء حساب</h1>
			<form onSubmit={handleSubmit}>
				<Grid container direction="row" justify="center">
					<Grid item xs={12} md={7}>
						<p>اكتب اسمك:</p>
						<TextField
							onChange={(e) => handleInput(e)}
							name="username"
							value={username}
							fullWidth
							label="اكتب..."
							variant="outlined"
							required
						/>
					</Grid>
					<Grid md={7} xs={12} item>
						<p>اكتب كلمة المرور:</p>
						<TextField
							onChange={(e) => handleInput(e)}
							name="password1"
							value={password1}
							type="password"
							fullWidth
							label="اكتب..."
							variant="outlined"
							required
						/>
					</Grid>
					<Grid md={7} xs={12} item>
						<p>تأكيد كلمة المرور:</p>
						<TextField
							onChange={(e) => handleInput(e)}
							name="password2"
							value={password2}
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
								انشاء حساب
							</Button>
						</Box>
						<Box mt={1}>
							تملك حساب مسبقا؟ <Link to="/login">تسجيل الدخول</Link>
						</Box>
					</Grid>
				</Grid>
			</form>
		</Container>
	)
}

export default RegisterForm
