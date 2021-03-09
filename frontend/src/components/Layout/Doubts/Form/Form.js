import UseStyles from './styles'
import react,{useState} from 'react'
import {Typography,TextField,Button,Paper} from '@material-ui/core'
import Filebase from 'react-file-base64'
const Form=()=>{
 const [postData,setpostData]=useState({
     
 });
 

    return (
            <Paper>
               <form autoComplete="off" onSubmit={submitHandler}>
                   <Typography>Post Your doubt here</Typography>
                    <TextField name="category" variant="outlined" label="Topic Title" fullWidth value={}/>
                    <TextField/>
               </form>
            </Paper>
    );
}
export default Form 


export default Form
