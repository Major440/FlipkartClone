import { Box, makeStyles } from "@material-ui/core";

//component
import Banner from "./Banner";
import Navbar from "./Navbar";
import Slide from "./Slide";
import MidSection from "./MidSection";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts as listProducts } from "../../redux/actions/productActions";
// import { products } from "../../constants/data";

const useStyle = makeStyles((theme) => ({
    component: {
        padding: 10,
        background: "#F2F2F2",
        
    },
    rightWrapper: {
        marginTop: 10,
        background: "#FFFFFF",
        width: "17%",
        marginLeft: 10,
        padding: 5,
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    },
    leftComponent: {
        width: "83%",
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
    },
}));

const Home = () => {
    const classes = useStyle();
    const adURL =
        "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

    const { products } = useSelector((state) => state.getProducts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div>
            <Navbar />
            <Box className={classes.component}>
                <Banner />
                <Box style={{ display: "flex" }}>
                    <Box style={{ width: "83%" }} className={classes.leftComponent}>
                        <Slide
                            timer={true}
                            title="Deal of the Day"
                            products={products}
                        />
                    </Box>
                    <Box className={classes.rightWrapper}>
                        <img src={adURL} style={{ width: 217 }} />
                    </Box>
                </Box>
            </Box>
            <MidSection />
            <Slide
                timer={false}
                title="Discounts for You"
                products={products}
            />
            <Slide timer={false} title="Suggested Items" products={products} />
            <Slide timer={false} title="Top Selection" products={products} />
            <Slide
                timer={false}
                title="Recommended Items"
                products={products}
            />
            <Slide timer={false} title="Best Sellers" products={products} />
        </div>
    );
};

export default Home;
