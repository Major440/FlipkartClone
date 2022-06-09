import axios from "axios";
// var app = express();

// // ADD THIS
// var cors = require("cors");
// app.use(cors());

const url = '';

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${url}/signup`, user);
    } catch (err) {
        console.log("Error while calling signup api");
    }
};

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/login`, user);
    } catch (err) {
        console.log("error while calling login api", err);
    }
};

export const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${url}/payment`, data);
        return response.data;
    } catch (error) {
        console.log("error while calling paytm api", error);
    }
};
