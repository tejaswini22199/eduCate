import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  mainForm:{
    display:'flex',
    flexDirection:'column'
  },
  paper: {
    padding: theme.spacing(2),
  },
  Heading:{
    padding:'15',
    marginLeft:'50',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    marginTop:20,
  },
  lower_B:{
     display:'flex',
     flexDirection:'column',
     justifyContent:'center',
     alignItems:'center',

  }
}));