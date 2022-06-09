import { Box, Typography,makeStyles } from "@material-ui/core";

import { useEffect, useState } from "react";



const useStyle = makeStyles({
    header: {
        padding: "15px 24px",
        background: "#fff",
        borderBottom: "1px solid #f0f0f0",
    },
    heading: {
        color: "#878787",
    },

    container: {
        padding: "15px 24px",
        background: "#fff",
        "& > p": {
            marginBottom: "20px",
            fontSize: "14px",
        },

        "& > h6": {
            marginBottom: "20px",
        },
    },

    price: {
        float: "right",
    },

    discount:{
        color:"green",
        fontWeight:500,
    }


});


const TotalView = ({cartItems, quantity}) => {
    const classes = useStyle();
    const [price,setPrice] = useState(0);
    const [discount,setDiscount] = useState(0);

    useEffect(() =>{
        totalAmount();
    }, [cartItems])

    const totalAmount = ()=>{
        let price = 0, discount = 0;
        cartItems.map(item =>{
            price += item.price.mrp;
            discount += (item.price.mrp - item.price.cost);
        });
        setPrice(price);
        setDiscount(discount);
    }


  return (
      <Box>
          <Box className={classes.header}>
              <Typography className={classes.heading}>PRICE DETAILS</Typography>
          </Box>

          <Box className={classes.container}>
              <Typography>
                  Price ({cartItems?.length} item)
                  <Box component="span" className={classes.price}>₹{price* quantity}</Box>
              </Typography>
              <Typography>
                  Discount
                  <Box component="span" className={classes.price}>-₹{discount* quantity}</Box>
              </Typography>
              <Typography>
                  Delivery Charges
                  <Box component="span" className={classes.price}>₹40</Box>
              </Typography>
              <Typography variant="h6">
                  Total Amount
                  <Box component="span" className={classes.price}>₹{(price-discount)* quantity + 40}</Box>
              </Typography>
              <Typography className={classes.discount}>You will save ₹{(discount)* quantity-40} on this order</Typography>
          </Box>
      </Box>
  );
}

export default TotalView