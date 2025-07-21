import React from 'react'
import Grooming from './Grooming'
import Trouser from './Trouser'
import Shirt from './Shirt'
import Jewellery from './Jewellery'
import { Link, Route, BrowserRouter as Router, Switch, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'

const Women = () => {
  const {path ,url}  = useRouteMatch(); 
  console.log("what is come in path and url",path);
  console.log(url);
  return (
    <Router> 

    
        
            <h4>Women Items:</h4>
           <ul>
     <li> <Link    to={`${url}/grooming`}>Grooming</Link></li>
         <li><Link to={`${url}/trouser`}>Trouser</Link></li>
        <li> <Link to={`${url}/shirt`}>Shirt</Link></li>
       <li><Link   to={`${url}/jewellery`}>Jewellery</Link></li>
     </ul>

     
    
     
        
    <Switch> 
        <Route path={`${path}/grooming`}exact component={Grooming}></Route>
        <Route path={`${path}/trouser`}exact component={Trouser}></Route>
        <Route path={`${path}/shirt`}exact  component={Shirt}></Route>
        <Route path={`${path}/jewellery`}exact component={Jewellery}></Route>
        </Switch>
        </Router>
    
     
  )
}

export default Women