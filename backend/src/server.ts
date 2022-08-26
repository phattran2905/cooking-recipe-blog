import path from "path"
import dotenv from "dotenv"
import makeApp from "./app"
import { checkDbConnection } from "./config/database"

dotenv.config({ path: path.resolve(process.cwd(), "src/config.env") })
checkDbConnection()

const app = makeApp()
const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
	return console.log(`Express is listening at http://localhost:${PORT}`)
})
