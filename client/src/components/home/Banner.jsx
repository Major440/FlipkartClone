
import { makeStyles } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import {bannerData} from "../../constants/data";

const useStyle = makeStyles((theme) => ({
    image: {
        width: "100%",
        height: 280,
        [theme.breakpoints.down("sm")]: {
            objectFit: "cover",
            height: 180,
        },
    },
    carousel: {
        marginTop: 10,
    },
}));
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const Banner = () => {
    const classes = useStyle();
  return (
      <Carousel 
        autoPlay={true}
        animation='slide'
        indicators = {false}
        draggable={false}
        swipeable={false}
        infinite={true}
        responsive={responsive}
        navButtonsAlwaysVisible = {true}
        cycleNavigation =  {true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        showDots={false}
        slidesToSlide={1}

         
        navButtonsProps={{
            style:{
                background:"#FFFFFF",
                color:"#494949",
                borderRadius:0,
                margin:0,
            }
        }}

        

        className={classes.carousel}
       >
          {bannerData.map((image) => (
              <img src={image} className={classes.image} />
          ))}
      </Carousel>
  );
};

export default Banner;
