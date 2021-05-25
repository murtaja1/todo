import React from "react"
import { Grid, Container, Box, Button } from "@material-ui/core"
import { Link } from "react-router-dom"
import useStyles from "./Style"

function Todos({ todos }) {
	const classes = useStyles()
	return (
		<Container>
			<h1 align="center">المهام الحاليه</h1>
			<Grid container justify="center">
				{todos.map((todo, i) => (
					<Grid key={i} item container xs={12} md={7} className={classes.todos}>
						<Grid item xs={12}>
							<h3 className={classes.todosTitle}>{todo.title}</h3>
						</Grid>
						<Grid item xs={12} align="center">
							<small> صنعت في {new Date(todo.createdAt).toLocaleDateString()} </small>
						</Grid>
					</Grid>
				))}
				<Grid item xs={12} align="center">
					<Link to="/addTodo" className={classes.link}>
						<Button variant="contained" color="primary">
							أضافت مهمة جديدة
						</Button>
					</Link>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Todos
