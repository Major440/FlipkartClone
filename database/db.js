import mongoose from "mongoose";

const Connection = async (URL) => {
    try {
        await mongoose.connect(URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        });
        console.log("Database connected successfully");
    } catch (err) {
        console.log("Error:", err.message);
    }
};

export default Connection;
