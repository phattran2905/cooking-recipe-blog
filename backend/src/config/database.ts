import { Sequelize, Options, Dialect } from "sequelize"

interface DB_CONFIG extends Options {
	database: string
	username: string
	password: string
	port: number
	dialect: Dialect
}

const DB_NAME: string = process.env.DB_NAME ?? "cooking_recipe_blog"
const DB_USER: string = process.env.DB_USER ?? "postgres"
const DB_PASSWORD: string = process.env.DB_PASSWORD ?? ""
const DB_PORT: string = process.env.DB_PORT ?? "5432"

const dbConfig: DB_CONFIG = {
	database: DB_NAME,
	username: DB_USER,
	password: DB_PASSWORD,
	port: +DB_PORT,
	dialect: "postgres",
	logging: false
}

// export const sequelize: Sequelize = new Sequelize(dbConfig)

export const createSequelize = (): Sequelize => new Sequelize(dbConfig)

// Check connection
export const checkDbConnection = (): void => {
	const sequelize = new Sequelize(dbConfig)
	sequelize
		.authenticate()
		.then(() => {
			console.log("Connection has been established successfully.")
		})
		.catch((error) => {
			console.error("Unable to connect to the database:", error)
		})
}
