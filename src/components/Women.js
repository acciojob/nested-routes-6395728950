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
            <nav>
           <ul>
           
     <li> <Link    to={`${url}/Grooming`}>Grooming</Link></li>
         <li><Link to={`${url}/Trouser`}>Trouser</Link></li>
        <li> <Link to={`${url}/Shirt`}>Shirt</Link></li>
       <li><Link   to={`${url}/Jewellery`}>Jewellery</Link></li>
     </ul>
</nav>
     
    
     
        
    <Switch> 
        <Route path={`${path}/Grooming`}exact component={Grooming}></Route>
        <Route path={`${path}/Trouser`}exact component={Trouser}></Route>
        <Route path={`${path}/Shirt`}exact  component={Shirt}></Route>
        <Route path={`${path}/Jewellery`}exact component={Jewellery}></Route>
        </Switch>
        </Router>
    
     
  )
}

export default Women