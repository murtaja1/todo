import React from "react"
import { Button, TextField, Grid, Container, Box } from "@material-ui/core"
import useStyles from "./Style"
function AddTodo({ handleInput, handleSubmit, handleFile, values }) {
	const classes = useStyles()
	const { title, body } = values

	return (
		<div>
			<Container>
				<h1 align="center">أضافت مهمة جديدة</h1>
				<form onSubmit={handleSubmit}>
					<Grid container direction="row" justify="center">
						<Grid item xs={12} md={7}>
							<p>العنوان:</p>
							<TextField
								onChange={(e) => handleInput(e)}
								value={title}
								name="title"
								fullWidth
								label="اكتب..."
								variant="outlined"
								required
							/>
						</Grid>
						<Grid md={7} xs={12} item>
							<p>الوصف:</p>
							<TextField
								name="body"
								value={body}
								onChange={(e) => handleInput(e)}
								type="text"
								fullWidth
								label="اكتب..."
								variant="outlined"
								required
							/>
						</Grid>
						<Grid md={7} xs={12} item>
							<p>اضف صورة:</p>
							<input
								accept="image/*"
								onChange={(e) => handleFile(e)}
								name="image"
								className={classes.fileInput}
								id="icon-button-file"
								type="file"
							/>
							<label htmlFor="icon-button-file">
								<Button variant="contained" color="primary" component="span">
									أضغط لأاضافت صورة
								</Button>
							</label>
						</Grid>
						<Grid item md={7} align="center">
							<Box mt={1}>
								<Button variant="contained" type="submit" color="primary">
									حفظ
								</Button>
							</Box>
						</Grid>
					</Grid>
				</form>
			</Container>
		</div>
	)
}

export default AddTodo
