import React from "react"
import { Grid, Container, Checkbox, Button, Box, FormControlLabel } from "@material-ui/core"
import useStyles from "./Style"

function ViewTodo({ todo, checked, setChecked, handleDone }) {
	const classes = useStyles()
	return (
		<Container>
			<h2 align="center">تفاصيل المهمة</h2>
			<Grid container justify="center">
				<Grid item xs={12} md={7} className={classes.todos}>
					<h3 align="center">{todo.title}</h3>
					<p>{todo.body}</p>
					<div align="center">
						<img src={`https://fetest.morabaaapps.com${todo.image}`} alt="dd" width="50%" />
					</div>
					<FormControlLabel
						control={
							<Checkbox color="primary" checked={checked} onChange={() => setChecked(!checked)} />
						}
						label="تمت"
					/>

					<Box my={2} align="center">
						<Button variant="contained" onClick={handleDone} color="primary" disabled={!checked}>
							حفظ
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Container>
	)
}

export default ViewTodo
