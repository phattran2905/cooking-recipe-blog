import { RequestHandler } from "express"
import User from "../models/user"

export const helloWorld: RequestHandler = async (req, res, next) => {
	try {
		// const jane = User.build({
		// 	username: "jane",
		// 	email: "Jane@email.com",
		// 	password: "1234",
		// 	role: "user",
		// 	status: true,
		// 	token: "token1234",
		// 	phone: "1234",
		// 	permissions: [1, 2]
		// })
		// await jane.save()
		// res.send(jane.toJSON())
		const users = await User.findAll()
		console.info(users)
		res.send(users)
	} catch (error) {
		console.log(error)
	}
}
