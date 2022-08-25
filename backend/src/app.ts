import Express from "express"
import { router } from "./routes/router"

export default function makeApp(): Express.Application {
	const app = Express()

	app.use(router)

	return app
}
