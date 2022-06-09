import { Box, Grid, Typography,makeStyles, Button } from "@material-ui/core";
import { useState } from "react";

import { useSelector } from "react-redux";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import TotalView from "./TotalView";


const useStyle = makeStyles((theme) => ({
  container:{
    padding: "80px 135px",
    [theme.breakpoints.down('sm')]:{
      padding:"15px 0"
    }
  },

  header:{
    padding:"15px 24px",
    background:"#fff"
  },

  buttonWrapper:{
    padding:"16px 22px",
    background:"#fff",
    boxShadow: "0 -2px 10px 0 rgb(0 0 0 / 10%)",
    borderTop:"1px solid #f0f0f0"
  },

  styledButton:{
    display:"flex",
    marginLeft:"auto",
    background:"#fb641b",
    color:"#fff",
    width:"250px",
    height:"51px",
    borderRadius:"2px",

  },

  leftComponent:{
    paddingRight:"15px",
    [theme.breakpoints.down('sm')]: {
      marginBottom:"15px",
    }
  }

}))

const Cart = () => {
    const classes = useStyle()
    const { cartItems } = useSelector((state) => state.cart);

    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    }

    const buyNow = async () => {
        let response = await payUsingPaytm({
            amount: 500,
            email: "mishratejas46@gmail.com",
        });
        let information = {
            action: "https://securegw-stage.paytm.in/order/process",
            params: response,
        };
        post(information);
    };





    return (
        <>
            {cartItems.length ? (
                <Grid container className={classes.container}>
                    <Grid
                        className={classes.leftComponent}
                        item
                        lg={9}
                        md={9}
                        sm={12}
                        xs={12}
                    >
                        <Box className={classes.header}>
                            <Typography>My cart({cartItems.length})</Typography>
                        </Box>
                        {cartItems.map((item) => (
                            <CartItem item={item} quantity={quantity} handleQuantity={handleQuantity} />
                               
                           
                        ))}
                        <Box className={classes.buttonWrapper}>
                            <Button
                                className={classes.styledButton}
                                onClick={() => buyNow()}
                            >
                                Place Order
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <TotalView cartItems={cartItems} quantity={quantity}/>
                    </Grid>
                </Grid>
            ) : (
                <EmptyCart />
            )}
        </>
    );
};

export default Cart;
