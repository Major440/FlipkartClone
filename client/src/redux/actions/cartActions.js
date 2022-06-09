import React from 'react'
import axios from 'axios'
import * as actionType from '../constants/cartConstants'

const URL = ''

export const addToCart = (id,quantity) =>async(dispatch)=> {
    try{
       const {data} =  await axios.get(`${URL}/product/${id}`)

       dispatch({type:actionType.ADD_TO_CART, payload: {...data,quantity}});
    } catch(err){
        dispatch({type:actionType.ADD_TO_CART_ERROR, payload:err.message });
    }
}

export const removeFromCart = (id) => (dispatch) =>{
    dispatch({type:actionType.REMOVE_FROM_CART,payload:id})
}
