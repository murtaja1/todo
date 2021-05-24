import React from "react"
import { Button, TextField, Grid, Container, Box } from "@material-ui/core"
function LoginForm() {
	return (
		<Container>
			<h1 align="center">تسجيل الدخول</h1>
			<form>
				<Grid container direction="row" justify="center">
					<Grid item xs={12} md={7}>
						<p>اكتب اسمك:</p>
						<TextField fullWidth id="outlined-basic" label="اكتب..." variant="outlined" />
					</Grid>
					<Grid md={7} xs={12} item>
						<p>اكتب كلمة المرور:</p>
						<TextField
							type="password"
							fullWidth
							id="outlined-basic"
							label="اكتب..."
							variant="outlined"
						/>
					</Grid>
					<Grid item md={7} align="center">
						<Box mt={1}>
							<Button variant="contained" color="primary">
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
