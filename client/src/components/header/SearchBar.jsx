import { makeStyles, InputBase, List, ListItem} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useEffect, useState } from "react";

import {useSelector , useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import {getProducts} from "../../redux/actions/productActions";

const useStyle = makeStyles((theme) => ({
    search: {
        borderRadius: 2,
        backgroundColor: "#fff",
        display: "flex",
        marginLeft: 10,
        width: "38%",
    },
    searchIcon: {
        padding: 5,
        height: "100%",
        color: "blue",
        pointerEvents: "none",
        display: "flex",
    },
    inputRoot: {
        fontSize: 14,
        width: "100%",
    },
    inputInput: {
        paddingLeft: 20,
    },

    listWrapper:{
        position: 'absolute',
        background: "#FFFFFF",
        color:"black" ,
        marginTop:36
    }
}));

// const ListWrapper = styled(List)`
//     position: absolute;
//     background: #FFFFFF;
//     color:#000;

// `;

const SearchBar = () => {
    const classes = useStyle();

    const [text,setText] = useState('')

    const {products} = useSelector(state => state.getProducts)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getProducts())
    },[dispatch])

    const getText = (text) =>{
        setText(text);
    }
    return (
        <div className={classes.search}>
            <InputBase
                placeholder="Search for products, brands and more"
                onChange={(e) => getText(e.target.value)}
                value={text}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
            />
            <div className={classes.searchIcon}>
                <Search />
            </div>
            {
                text &&
                    <List className={classes.listWrapper}>
                        {
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>(
                                <ListItem>
                                    <Link 
                                        to = {`/product/${product.id}`}
                                        onClick = {() => setText('')}
                                        style={{textDecoration: 'none', color:'inherit'}}
                                    >
                                        {product.title.longTitle}

                                    </Link>
                                </ListItem>
                            ))
                        }
                    </List>
            }
        </div>
    );
};

export default SearchBar;
