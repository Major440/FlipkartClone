import { ButtonGroup, Button, makeStyles } from "@material-ui/core";
import { useState } from "react";



const useStyle = makeStyles({
    componentButton:{
        marginTop:"30px",

    },
    styledButton:{
        borderRadius:"50%",
        fontWeight:"600"
    }

})

const GroupButton = () => {
    const classes = useStyle();
    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

  return (
    <ButtonGroup className = {classes.componentButton}>
        <Button className = {classes.styledButton} onClick={() => handleQuantity("dec")}>-</Button>
        <Button className = {classes.styledButton}>{quantity}</Button>
        <Button className = {classes.styledButton} onClick={() => handleQuantity("inc")}>+</Button>
    
    </ButtonGroup>
  )
}

export default GroupButton