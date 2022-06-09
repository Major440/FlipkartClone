import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { v4 as uuid } from "uuid";

//components
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Routes from "./routes/routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const URL =
    process.env.MONGODB_URI ||
    `mongodb://${username}:${password}@cluster0-shard-00-00.xjlqy.mongodb.net:27017,cluster0-shard-00-01.xjlqy.mongodb.net:27017,cluster0-shard-00-02.xjlqy.mongodb.net:27017/flipkart?ssl=true&replicaSet=atlas-6d64gv-shard-0&authSource=admin&retryWrites=true&w=majority`;

Connection(URL);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

//data to database
DefaultData();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", Routes);

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};

(paytmParams["MID"] = process.env.PAYTM_MID),
    (paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE),
    (paytmParams["CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID),
    (paytmParams["INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID),
    (paytmParams["ORDER_ID"] = uuid()),
    (paytmParams["CUST_ID"] = process.env.PAYTM_CUST_ID),
    (paytmParams["TXN_AMOUNT"] = "200"),
    (paytmParams["CALLBACK_URL"] = "callback");
paytmParams["EMAIL"] = "codeforinterview01@gmail.com";
paytmParams["MOBILE_NO"] = "1234567852";
