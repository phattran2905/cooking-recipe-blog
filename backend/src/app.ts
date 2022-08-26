import Express from "express"
import { router } from "./routes/router"
import morgan from "morgan"

export default function makeApp(): Express.Application {
	const app = Express()

	// // You can set morgan to log differently depending on your environment
	// if (app.get('env') == 'production') {
	//     app.use(morgan('common', { skip: function(req, res) { return res.statusCode < 400 }, stream: __dirname + '/../morgan.log' }));
	//   } else {
	//     app.use(morgan('dev'));
	//   }
	app.use(morgan("dev"))
	app.use(router)

	return app
}
