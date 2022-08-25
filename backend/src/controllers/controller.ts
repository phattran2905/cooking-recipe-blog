import { RequestHandler } from "express"

export const helloWorld: RequestHandler = (req, res, next) => {
	return res.send("Hello World!")
}
