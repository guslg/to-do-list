import express from "express";
import router from "./routes/routes.js";
import bodyParser from "body-parser";
import cors from "cors";

const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
