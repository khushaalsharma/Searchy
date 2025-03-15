import { Client } from "@elastic/elasticsearch";
import { configDotenv } from "dotenv";

configDotenv();

export const client = new Client({node: process.env.SERVER_URL});
export const connectSearch = () => {
    console.log("elastic search client connected");
}