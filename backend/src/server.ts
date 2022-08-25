import makeApp from "./app"

const app = makeApp()
const PORT = 3000

app.listen(PORT, () => {
	return console.log(`Express is listening at http://localhost:${PORT}`)
})
