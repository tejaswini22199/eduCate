import * as api from '../api/index.js'
export const getPosts=()=>async(dispatch)=>{
    try {
        const {data}=await api.getPosts();
        dispatch({type:'FETCH_ALL',payload:data})
    } catch (error) {
        console.log(error.message);
    }
}
export const createPost=(post)=>async(dispatch)=>{
    try {
        const {data}=await api.createPost(post);
        console.log(data);
        dispatch({type:'CREATE',payload:data});
        
    } catch (error) {
        console.log(error.message);
    }
}