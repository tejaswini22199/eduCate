// import react,{useState,useEffect} from 'react'
// import './App.css';
// import {Button,Box,Paper,Container} from '@material-ui/core'
// import SaveIcon from '@material-ui/icons/Save';
// import Usestyles from './styles'
// import Notes from './components/Notes/Notes'
// import './App.css'
// import jsPDF from 'jspdf'
// const SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition
// const mic = new SpeechRecognition()

// mic.continuous = true
// mic.interimResults = true
// mic.lang = 'en-US'
// const App=()=> {
//   const [islistening,setislistening]=useState(false);
//   const [note,setNote]=useState('');
//   const [notes,setNotes]=useState([]);
//   const classes=Usestyles();
//   useEffect(() => {
//     handleListen();
//   }, [islistening])
//   const handleListen=()=>{
//     if(islistening){
//       mic.start()
//       mic.onend = () => {
//         console.log('continue..')
//         mic.start()
//       }
//     }
//     else{
//       mic.stop()
//       mic.onend = () => {
//         console.log('Stopped Mic on Click')
//       }
//     }
//     mic.onstart = () => {
//       console.log('Mics on')
//     }
//     mic.onresult = event => {
//       const transcript = Array.from(event.results)
//         .map(result => result[0])
//         .map(result => result.transcript)
//         .join('')
//       setNote(transcript)
  
//       mic.onerror = event => {
//         console.log(event.error)
//       }
//     }
//   }
 
//   const NotesHandler=()=>{
//       setNotes([...notes, note]);
//       setNote('');
//   }
//   const PDFHandler=()=>{
//        var doc=new jsPDF('p','pt');
//        console.log(notes);
//        var res='';
//        notes.forEach(x=>{
//          res+=x;
//        })
//        console.log(res);
//        doc.text(20,20,res);
      
//        doc.save("output.pdf");
//   }
//   const handleListener=()=>{
//     console.log(islistening);
//     setislistening(islistening => !islistening);
//   }
//   return (
//     <Container>
//       <div className={classes.header}>
//      <h1>Record your Voice and Save it as Notes.</h1>
//      <div className={classes.buttons}>
//        {islistening && <Box m={2}><Button classes={classes.buttonp} variant="contained"  onClick={handleListener}>
//          Stop🛑
//          </Button></Box> }
        
//          {!islistening && <Box m={2}><Button classes={classes.buttonp} variant="contained"  onClick={()=>setislistening(prevState=> !prevState)}>
//          Start🎙️
//          </Button> </Box>}
        
//        <Box m={2}><Button disabled={!note} startIcon={<SaveIcon/>} variant="contained" onClick={NotesHandler}>
//          SAVE 
//        </Button>
//        </Box>
//        <Box m={2}><Button variant="contained" onClick={PDFHandler}>
//          GeneratePDF
//        </Button>
//        </Box> 
//        </div>
//        </div>
//        <div>
//       <p className="box">
//           {note}
//           </p>
//           <div className="box">
//              {
//               notes.map(
//                   (Note,index) =>(
                    
//                     <Notes key={index} notes={Note}/>
                    
//          )
//          )
//          }
//         </div> 
//         </div>
//     </Container>
//   );
// }

// export default App;
import React,{useState} from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import PDFeditor from './components/Layout/PDFeditor/PDFeditor'
import Notessave from './components/Layout/NotesSave/Notessave'
import Dashboard from './components/Layout/Dashboard/Dahsboard'
import menu from './Assets/menu.png'
const App = () => {
  const [showNavbar, setshowNavbar] = useState(false)
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <div className={showNavbar ? "viewport-icon" : "viewport-180deg"} >
            <img src={menu} alt="menu" onClick={(e) => setshowNavbar(!showNavbar)}></img>
          </div>
          <div className="container">
            <Navbar showNavbar={showNavbar} setshowNavbar={setshowNavbar} onClick={(e) => setshowNavbar(!showNavbar)}></Navbar>
          </div>
        </header>
        <main>
          <Route exact path="/" component={Dashboard} />
        
          <Route path="/savenotes" component={Notessave} />
          <Route path="/pdfeditor" component={PDFeditor}/>
          {/* <Route path="/tasks/monthly" component={TaskCalendarScreen} />
          <Route path='/tasks/:id/edit' component={EditTaskScreen} /> */}
        </main>
      </div>
     
    </BrowserRouter>
  )
}

export default App
