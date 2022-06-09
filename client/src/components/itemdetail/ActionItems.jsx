import { Box, Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { ShoppingCart as Cart, FlashOn as Flash } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { useState } from "react";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

const useStyle = makeStyles((theme) => ({
    leftContainer: {
        minWidth: "40%",
        padding: "40px 0 0 80px",
        [theme.breakpoints.down("md")]: {
            padding: "20px 40px",
        },
    },

    image: {
        padding: "15px 20px",
        border: "1px solid #f0f0f0",
        width: "95%",
    },
    button: {
        height: 50,
        width: "46%",
        borderRadius: "2px",
        [theme.breakpoints.down("lg")]: {
            width: "46%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "48%",
        },
    },

    addToCart: {
        background: "#ff9f00",
        color: "#fff",
        marginRight: 14,
    },
    buyNow: {
        background: "#fb641b",
        color: "#fff",
    },
}));

const ActionItems = ({ product }) => {
    const classes = useStyle();
    const history = useHistory();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const { id } = product;

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        history.push("/cart");
    };

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
        <Box className={classes.leftContainer}>
            <img
                src={product.detailUrl}
                alt="product"
                className={classes.image}
            />
            <Button
                variant="contained"
                onClick={() => addItemToCart()}
                className={clsx(classes.button, classes.addToCart)}
            >
                <Cart />
                Add to Cart
            </Button>
            <Button
                variant="contained"
                onClick={() => buyNow()}
                className={clsx(classes.button, classes.buyNow)}
            >
                <Flash />
                Buy Now
            </Button>
        </Box>
    );
};

export default ActionItems;
