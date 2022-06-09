import { useContext, useState } from "react";
import { Badge, Box, Button, makeStyles, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";

//components
import LoginDialog from "../login/Login";
import { LoginContext } from "../../context/ContextProvider";
import Profile from "./Profile";
import { useSelector } from "react-redux";

const useStyle = makeStyles((theme) => ({
    login: {
        background: "#FFFFFF", //makes the button white
        color: "#2874f0",
        textTransform: "none", // LOGIN comes in uppercase because of default css by mui
        fontWeight: 600,
        borderRadius: 2,
        padding: "5px 40px", // fliplkarts button is biiger therefore to make it large i am using padding
        boxShadow: "none",
        height: "32",
        [theme.breakpoints.down("sm")]: {
            background: "#2874f0",
            color: "#FFFFFF",
        },
    },
    wrapper: {
        margin: "0 3% 0 auto",
        display: "flex",
        "& > *": {
            // to aapply all the things to the child

            marginRight: 50,
            fontSize: 14,
            alignItems: "center",
            textDecoration: "none",
            color: "#fff",
            [theme.breakpoints.down("sm")]: {
                color: "#2874f0",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                marginTop: 10,
            },
        },
        [theme.breakpoints.down("sm")]: {
            display: "block"
        },
    },
    container: {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            display: "block",
        },
    },
}));

const HeaderButtons = () => {
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    const [account, setAccount] = useContext(LoginContext);

    const openLoginDialog = () => {
        setOpen(true);
    };
    const { cartItems } = useSelector((state) => state.cart);
    return (
        <Box className={classes.wrapper}>
            {account ? (
                <Profile account={account} setAccount={setAccount} />
            ) : (
                <Link>
                    <Button
                        variant="contained"
                        onClick={() => openLoginDialog()}
                        className={classes.login}
                    >
                        Login
                    </Button>
                </Link>
            )}
            <Link>
                <Typography style={{ marginTop: 6 }}>More</Typography>{" "}
            </Link>
            <Link to="/cart" className={classes.container}>
                <Badge badgeContent={cartItems.length} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Link>
            <LoginDialog
                open={open}
                setOpen={setOpen}
                setAccount={setAccount}
            />
        </Box>
    );
};

export default HeaderButtons;
