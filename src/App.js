
import React,{useEffect} from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Particles from "react-particles-js"
import NavBar from "./Component/NavBar"
import Header from "./Component/Header"
import ProposPage from './pages/ProposPage';
import { Service } from './pages/Service';
import Aos from 'aos'
import "aos/dist/aos.css"
import WorkPage from './pages/WorkPage';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


function App() {
  useEffect(() => {
       Aos.init({duration:2000})
    }, [])
  return (
  <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
    <Particles className="particles-canvas" params={{
      particles:{
        number:{
          value :30,
          density:{
            enable:true,
            value_area: 900
          }

        },
        shape:{
            type:"square",
            stroke:{
              width:6,
              color:"#f9ab00"
            }
        }
      }
    }}/>
    <NavBar />
    <Header />
    <ProposPage/>
    <Service />
    <WorkPage/>
    <Portfolio/>
    <Contact/>
     
  </div>
     
  );
}

export default App;
