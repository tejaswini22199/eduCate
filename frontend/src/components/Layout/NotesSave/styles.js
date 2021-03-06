import {makeStyles} from '@material-ui/core/styles'
export default makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      height:'1000',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
    
    header:{
        color:'white',
    },
    buttons:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row'
    },
  }));