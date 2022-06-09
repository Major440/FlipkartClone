import { products } from "./constants/product.js";
import Product from "./model/productSchema.js";

const DefaultData = async ()=>{
    try{
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log("Data  imported Successfully");
    } catch(err){
        console.log("Error: ",err.message);
    }
}

export default DefaultData;