
import React from "react";
import './../styles/App.css';
 
import Women from "./Women";
import Home from "./Home";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom/cjs/react-router-dom.min";
 

const App = () => {
  return (
    
    
    <Router> 
      <ul>
    <li><Link to="/">Home</Link></li>
   
  
  <li>  <Link to="/women">Women</Link></li>
   </ul>
      <Switch> 

    
    
         <Route path="/" exact component={Home}></Route>
         <Route path="/women" exact  component={Women}></Route>
         </Switch>

         </Router>
         
    
          
      
  )
}

export default App
