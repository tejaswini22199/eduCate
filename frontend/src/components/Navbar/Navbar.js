// import React from 'react'
// import 'tailwindcss'

// const Navbar = () => {
//     return (
//         <div>
//   <nav className="bg-gray-800">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="flex items-center justify-between h-16">
//         <div className="flex items-center">
//           <div className="flex-shrink-0">
            
//           </div>
//           <div className="hidden md:block">
//             <div class="ml-10 flex items-baseline space-x-4">
//               <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>

//               <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">RecordNotes</a>

//               <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">EditPDF</a>

//               <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>

//               <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reports</a>
//             </div>
//           </div>
//         </div>
//         <div class="hidden md:block">
//           <div class="ml-4 flex items-center md:ml-6">
//             <button class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
//               <span class="sr-only">View notifications</span>
              
//               <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//               </svg>
//             </button>

           
//             <div class="ml-3 relative">
//               <div>
//                 <button type="button" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-expanded="false" aria-haspopup="true">
//                   <span class="sr-only">Open user menu</span>
//                 </button>
//               </div>
//               <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
//                 <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>

//                 <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>

//                 <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="-mr-2 flex md:hidden">
        
//           <button type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
//             <span class="sr-only">Open main menu</span>
            
//             <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
           
//             <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>

//       <div class="md:hidden" id="mobile-menu">
//       <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        
//         <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>

//         <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

//         <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

//         <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>

//         <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Reports</a>
//       </div>
//       <div class="pt-4 pb-3 border-t border-gray-700">
//         <div class="flex items-center px-5">
//           <div class="flex-shrink-0">
//             <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
//           </div>
//           <div class="ml-3">
//             <div class="text-base font-medium leading-none text-white">Tom Cook</div>
//             <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
//           </div>
//           <button class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
//             <span class="sr-only">View notifications</span>
         
//             <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//             </svg>
//           </button>
//         </div>
//         <div class="mt-3 px-2 space-y-1">
//           <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</a>

//           <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>

//           <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>
//         </div>
//       </div>
//     </div>
//   </nav>

//   <header class="bg-white shadow">
//     <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//       <h1 class="text-3xl font-bold text-gray-900">
//         Dashboard
//       </h1>
//     </div>
//   </header>
//   <main>
//     <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
   
//       <div class="px-4 py-6 sm:px-0">
//         <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
//       </div>
      
//     </div>
//   </main>
// </div> 
//     )
// };

// export default Navbar

// export default function Navbar({open, setOpen}) {
    
//     return (
//         <div>
//             <div className={open ? "viewport-nav" : "viewport-open"} style={{fontFamily: 'Syncopate, sans-serif' , fontSize: '4vh' , letterSpacing:'0.25vw'}} onClick={() => setOpen(!open)}>
//                 <Link to="/home">Dashboard</Link>
//                 <Link to="/savenotes">Savenotes</Link>
//                 <Link to="/pdfeditor">PDFEditor</Link>
                
//             </div>
//         </div>
//     )
// }



import React,{useState} from "react";
import '../../tailwind.css'
import '../../tailwind.min.css';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import Form from '../Layout/Doubts/Form'
import Notessave from '../Layout/NotesSave/Notessave'
import Dashboard from '../Layout/Dashboard/Dashboard'
const Navbar=({ fixed }) =>{
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
                 <span className="ml-2"><Link className="nav-link" to="/team">AboutTeam</Link></span>
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
              <Form/>
          </Route>
      </Switch> 
      </BrowserRouter>
    </>
  );
}
export default Navbar