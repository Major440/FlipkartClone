import { Box, makeStyles, Typography } from "@material-ui/core";
import { navData } from "../../constants/data";

const useStyle = makeStyles((theme)=>({
    component:{
        display:"flex",
        margin: "55px 130px 0px 130px",
        justifyContent:"space-between",
        overflow:"hidden",
        
        [theme.breakpoints.down('lg')]:{
            margin:'0px'
        }

    },
    container:{
        textAlign:"center",
        padding:"12px 8px"
    },
    image:{
        width:64
    },
    text:{
        fontSize:14,
        fontWeight:600,
        fontFamily:"inherit"
    }
}))

const Navbar = () => {
    const classes = useStyle(); 
    return (
        <Box style = {{background:"#fff", margin:'60px 125px 0px 125px'}}>
            <Box className = {classes.component}>
                {navData.map((data) => (
                    <Box className={classes.container}>
                        <img src={data.url} className={classes.image} />
                        <Typography className={classes.text}>{data.text}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Navbar;
