import path from "path"
import dotenv from "dotenv"
import makeApp from "./app"

dotenv.config({ path: path.resolve(process.cwd(), "src/config.env") })

const app = makeApp()
const { PORT } = process.env

app.listen(PORT, () => {
	return console.log(`Express is listening at http://localhost:${PORT}`)
})
