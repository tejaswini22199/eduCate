import axios from 'axios'
const url='http://localhost:5000/posts'
const url_Products='http://localhost:5000/products'
export const getPosts=()=>axios.get(url)
export const createPost=(post)=>axios.post(url,post);
export const getProducts=()=>axios.get(url_Products);
export const createProduct=(product)=>axios.post(url_Products,product);