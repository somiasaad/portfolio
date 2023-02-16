import React, { Component } from 'react';
import { NavBar } from './component/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Banner } from './component/Banner';
import { Skills } from './component/Skills';
import {Contact} from './component/Contact';
// import Contact from '../Component/Contact';
import {Projects} from'./component/Projects';
import {Footer} from "./component/Footer";




class App extends Component {
   render() {
     return (
         <div className="App">
         
            <NavBar/>
            <Banner/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        
         </div>
     );
   }
}
export default App;