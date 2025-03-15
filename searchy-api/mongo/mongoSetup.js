import { MongoClient, ServerApiVersion } from "mongodb";
import { configDotenv } from "dotenv";

configDotenv();

export const mongoConnectCall = async() => {
    const client = new MongoClient(process.env.MONGO_CLIENT_URL, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true
            }
        }
    );

    try{
        await client.connect();
        //await client.db("admin").command({ping: 1});
        console.log("database connected successfully!!!");
    }
    catch(error){
        console.log(error);
    }
};