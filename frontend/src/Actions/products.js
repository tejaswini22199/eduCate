import * as api from '../api/index.js'
export const getProducts=()=>async(dispatch)=>{
    try {
        const data=await api.getProducts();
        dispatch({type:'FETCH_ALL',payload:data})
    } catch (error) {
        console.log(error.message);
    }
}
export const createProduct=(product)=>async(dispatch)=>{
    try {
        console.log(product);
        const data=await api.createProduct(product);
        dispatch({type:'CREATE',payload:data});
        
    } catch (error) {
        console.log(error.message);
    }
}