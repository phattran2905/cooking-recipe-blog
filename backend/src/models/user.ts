import { DataTypes, Model } from "sequelize"
import { sequelize } from "../config/connectDb"

class User extends Model {}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		role: {
			type: DataTypes.STRING,
			defaultValue: 0
		},
		status: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		token: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: true
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: true
		},
		permissions: {
			type: DataTypes.ARRAY(DataTypes.INTEGER),
			defaultValue: []
		}
	},
	{
		sequelize,
		modelName: "user"
	}
)

User.sync()

export default User
