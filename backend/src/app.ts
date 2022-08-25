import Express from "express"

export default function makeApp(): Express.Application {
	const app = Express()

	app.get("/", (req, res) => {
		res.send("Hello World!")
	})

	return app
}
