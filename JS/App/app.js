import express from "express";
import cookieParser from "cookie-parser";
import {} from "express";
import helmet from "helmet";
import morgan from "morgan";
import { globalErrorHandlingMiddleware } from "../controllers/error.controller.js";
import { env } from "../newProcess.js";
import { readQueScheduler } from "../Routes/readQueScheduler.routes.js";
import { writeQueScheduler } from "../Routes/writeQueScheduler.routes.js";
const app = express();
app.use(helmet());
if (env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
app.use(cors({
    origin: env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/swarm/write-ops/", writeQueScheduler);
app.use("/api/v1/swarm/read-ops/", readQueScheduler);
app.get("/", (req, res) => {
    res.send("Site working");
});
app.use(globalErrorHandlingMiddleware);
export { app };
