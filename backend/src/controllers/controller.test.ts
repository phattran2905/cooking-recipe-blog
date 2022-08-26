import { describe, test, expect } from "@jest/globals"
import { createSequelize } from "../config/database"
import User from "../models/user"

describe("Test user model", () => {
	const sequelize = createSequelize()
	test("Get all users", async () => {
		const users = await User.findAll()
		console.log(users)
		expect(users.length).toBe(0)
	})
	sequelize.close()
})
