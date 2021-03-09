import useStyles from './styles'
import react,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createPost} from '../../../../Actions/posts'
import {Typography,TextField,Button,Paper} from '@material-ui/core'
import Filebase from 'react-file-base64'
const Form=()=>{
   const dispatch = useDispatch();
   const classes=useStyles();
 const [postData,setpostData]=useState({
     category:'',
     creator:'',
     selectedFile:'',
 });
 
const submitHandler= async (e)=>{
   e.preventDefault();
   // setpostData(e);
   dispatch(createPost(postData));
   
}
    return (
            <Paper  className={classes.paper}>
               <form autoComplete="off" className={classes.root} onSubmit={submitHandler}>
                   <Typography variant="h5" className={classes.root}>Post Your doubt here</Typography>
                    <TextField name="category" variant="outlined" label="Topic Title" fullWidth value={postData.category} onChange={(e)=>{setpostData({...postData,category:e.target.value})}}/>
                    <TextField name="creator" variant="outlined" label="Name" fullWidth value={postData.creator} onChange={(e)=>{setpostData({...postData,creator:e.target.value})}}/>
                    <div className={classes.lower_B}>
 <div> <Filebase type="file" multiple={false} className={classes.fileInput} onDone={({base64})=>setpostData({...postData,selectedFile:base64})}/>
   </div>
                  <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >Submit</Button>
                  </div>
               </form>
            </Paper>
    );
}
export default Form 


