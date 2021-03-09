import React,{useState,useEffect} from "react";
import '../../tailwind.css'
import '../../tailwind.min.css';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import Form from '../Layout/Doubts/Form/Form'
import Posts from '../Layout/Posts/Posts'
import { getPosts } from '../../Actions/posts'
import {Grid} from '@material-ui/core'
import Notessave from '../Layout/NotesSave/Notessave'
import Dashboard from '../Layout/Dashboard/Dashboard'
import useStyles from './styles'
import { useDispatch } from 'react-redux';
import ProductForm from "../Layout/ProductForm/ProductForm";
import Shop from "../Layout/Shop/Shop";
const Navbar=({ fixed }) =>{
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const classes=useStyles();
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
     <BrowserRouter>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blue-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              href="#"
            >EduFun
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2"><Link className="nav-link" to="/home">Dashboard</Link></span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2"><Link className="nav-link" to="/savenotes">RecordNotes</Link></span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2"><Link className="nav-link" to="/doubt">PostYourDoubts</Link></span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                 <span className="ml-2"><Link className="nav-link" to="/shop">BUY/SELL</Link></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
       <Switch>
       <Route exact path="/home" >
       <Dashboard/>
       </Route>
          <Route exact path="/savenotes"  >
              <Notessave/>
          </Route>
          <Route exact path="/doubt">
            <Grid container>
              <Grid className={classes.Form} item container xs={12} sm={6}>
              <Form/>
              </Grid>
              <Grid>
                <Posts/>
              </Grid>
            </Grid >
              
          </Route>
          <Route exact path="/shop">
          <Grid className={classes.Form} item container xs={12} sm={12}>
              <ProductForm/>
              </Grid>
              <Grid>
                <Shop/>
              </Grid>
          </Route>
      </Switch> 
      </BrowserRouter>
    </>
  );
}
export default Navbar