import useStyles from './styles'
import react,{useState,useEffect} from 'react'
import { useDispatch} from 'react-redux';
import {createProduct} from '../../../Actions/products';
import {Typography,TextField,Button,Paper} from '@material-ui/core'
import Filebase from 'react-file-base64'
const ProductForm=()=>{
   const dispatch = useDispatch();
   const classes=useStyles();
 const [productData,setproductData]=useState({
     Name:'',
     Contact:'',
     cost:'',
     selectedFile:'',
 });
 
const submitHandler= async (e)=>{
   e.preventDefault();
   console.log(productData);
   dispatch(createProduct(productData));
   
}
    return (
            <Paper  className={classes.paper}>
               <form autoComplete="off" className={classes.root} onSubmit={submitHandler}>
                   <Typography variant="h5" className={classes.root}>Sell Your Product Here</Typography>
                   <div className={classes.mainForm}>
                    <TextField name="name" variant="outlined" label="Name"  value={productData.Name} onChange={(e)=>{setproductData({...productData,Name:e.target.value})}}/>
                    <TextField name="contact" variant="outlined" label="Contact" value={productData.Contact} onChange={(e)=>{setproductData({...productData,Contact:e.target.value})}}/>
                    <TextField name="cost" variant="outlined" label="Cost"  value={productData.cost} onChange={(e)=>{setproductData({...productData,cost:e.target.value})}}/>
                    </div>
                    
                    <div className={classes.lower_B}>
 <div> <Filebase type="file" multiple={false} className={classes.fileInput} onDone={({base64})=>setproductData({...productData,selectedFile:base64})}/>
   </div>
                  <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >Submit</Button>
                  </div>
               </form>
            </Paper>
    );
}
export default ProductForm 


