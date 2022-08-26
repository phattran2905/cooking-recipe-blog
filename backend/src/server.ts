import path from "path"
import dotenv from "dotenv"
import makeApp from "./app"
import { sequelize } from "./config/connectDb"

dotenv.config({ path: path.resolve(process.cwd(), "src/config.env") })

const app = makeApp(sequelize)
const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
	return console.log(`Express is listening at http://localhost:${PORT}`)
})
