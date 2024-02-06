import Home from './components/Home';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';
import './App.css';
//import { BrowserRouter, createBrowserRouter,Outlet, Routes,Route } from 'react-router-dom';


const App = ()=> {
  return ( 
    <div className=' lg:w-fit m:w-fit' >
    <Header/>
    <div id="home"><Home/></div>
    <div id="skills"><Skills/></div>
    <div id="projects"><Projects/></div>
    <div id="contact"><Contact/></div>
    </div>
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/home" component={Home} />
    //     <Route path="/skills" component={Skills} />
    //     <Route path="/projects" component={Projects} />
    //     <Route path="/contact" component={Contact} />
    //   </Routes>
    // </BrowserRouter>
  );
};


export default App;
