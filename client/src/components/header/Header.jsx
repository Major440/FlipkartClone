import {
    AppBar,
    Toolbar,
    makeStyles,
    Typography,
    Box,
    withStyles,
    IconButton,
    Drawer,
    List,
    ListItem,
    
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Menu } from "@material-ui/icons";

//components
import HeaderButtons from "./HeaderButtons";
import SearchBar from "./SearchBar";
import { useState } from "react";

const useStyle = makeStyles((theme) => ({
    header: {
        background: "#2874f0",
        height: 55,
    },
    logo: {
        width: 75,
    },
    subURL: {
        width: 10,
        marginLeft: 4,
        height: 10,
    },
    container: {
        display: "flex",
    },
    component: {
        marginLeft: "12%",
        lineHeight: 0,
        textDecoration: "none",
        color: "#fff",
    },
    subHeading: {
        fontSize: 10,
        fontStyle: "italic",
    },
    menuButton: {
        display: "none",
        [theme.breakpoints.down("md")]: {
            display: "block",
        },
    },
}));

const ToolBar = withStyles({
    //to overwrite the css provided by material UI we have to use withStyles
    root: {
        minHeight: 55,
    },
})(Toolbar);

const Header = () => {
    const classes = useStyle();
    const logoURL =
        "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const subURL =
        "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <ListItem button>
                    <HeaderButtons />
                </ListItem>
            </List>
        </Box>
    );
    return (
        <AppBar className={classes.header}>
            <ToolBar>
                <IconButton
                    className={classes.menuButton}
                    color="inherit"
                    onClick={handleOpen}
                >
                    <Menu />
                </IconButton>

                <Drawer open={open} onClose={handleClose}>
                    
                    {list()}
                </Drawer>

                <Link to="/" className={classes.component}>
                    <img src={logoURL} className={classes.logo} />
                    <Box className={classes.container}>
                        <Typography className={classes.subHeading}>
                            Explore{" "}
                            <Box component="span" style={{ color: "#FFE500" }}>
                                Plus
                            </Box>
                        </Typography>
                        <img src={subURL} className={classes.subURL} />
                    </Box>
                </Link>
                <SearchBar />
                <HeaderButtons />
            </ToolBar>
        </AppBar>
    );
};

export default Header;
