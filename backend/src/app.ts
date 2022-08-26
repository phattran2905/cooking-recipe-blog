import Express from "express"
import { Sequelize } from "sequelize/types"
import { router } from "./routes/router"

export default function makeApp(connection: Sequelize): Express.Application {
	const app = Express()

	app.use(router)

	return app
}
