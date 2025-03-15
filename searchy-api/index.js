import express from "express";
import { configDotenv } from "dotenv";
import { mongoConnectCall } from "./mongo/mongoSetup.js";
import { connectSearch } from "./elasticSearch/elasticSearchSetup.js";

configDotenv();

const app = express();

//setting mongoDB
await mongoConnectCall();

//setting elastic search
connectSearch();

app.listen(process.env.SERVER_PORT, () => {
    console.log("server listening at: ", process.env.SERVER_PORT);
});