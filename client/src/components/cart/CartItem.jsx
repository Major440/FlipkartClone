import { Box, Typography, makeStyles, Button, ButtonGroup } from "@material-ui/core";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";
import { addEllipsis } from "../../utils/commonUtils";


const useStyle = makeStyles({
    component: {
        borderTop: "1px solid #f0f0f0",
        display: "flex",
        background: "#fff",
    },

    leftComponent: {
        margin: "20px",
        display: "flex",
        flexDirection: "column",
    },

    smallText: {
        color: "#878787",
        fontSize: "14px",
        marginTop: 10,
    },

    remove: {
        marginTop: "60px",
        fontSize: "16px",
        color: "#000",
        fontWeight: "600",
    },

    componentButton: {
        marginTop: "30px",
    },
    styledButton: {
        borderRadius: "50%",
        fontWeight: "600",
    },
});

const CartItem = ({ item , quantity, handleQuantity}) => {
    const classes = useStyle();
    const fassured =
        "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
    
    const dispatch = useDispatch();
    


    


    const removeItemFromCart = (id) =>{
        dispatch(removeFromCart(id))
    }
    return (
        <Box className={classes.component}>
            <Box className={classes.leftComponent}>
                <img
                    src={item.url}
                    alt="product"
                    style={{ height: 110, width: 110 }}
                />
                <ButtonGroup className={classes.componentButton}>
                    <Button
                        className={classes.styledButton}
                        onClick={() => handleQuantity("dec")}
                    >
                        -
                    </Button>
                    <Button className={classes.styledButton}>{quantity}</Button>
                    <Button
                        className={classes.styledButton}
                        onClick={() => handleQuantity("inc")}
                    >
                        +
                    </Button>
                </ButtonGroup>
            </Box>

            <Box style={{ margin: 20 }}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <Typography className={classes.smallText}>
                    Seller:RetailNet
                    <Box component="span">
                        <img
                            src={fassured}
                            alt="flipkart"
                            style={{ width: 50, marginLeft: 10 }}
                        />
                    </Box>
                </Typography>
                <Typography>
                    <Box
                        component="span"
                        style={{ fontWeight: 600, fontSize: 18 }}
                    >
                        ₹{item.price.cost}
                    </Box>
                    &nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: "#878787" }}>
                        <strike>₹{item.price.mrp}</strike>
                    </Box>
                    &nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: "#388E3C" }}>
                        {item.price.discount} off
                    </Box>
                </Typography>
                <Button
                    onClick={() => removeItemFromCart(item.id)}
                    className={classes.remove}
                >
                    Remove
                </Button>
            </Box>
        </Box>
    );
};

export default CartItem;
