import React from 'react';
import './App.scss';
import './styles/table.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Header/header';
import NavBar from './Components/NavBar/NavBar'
import UserDetails from './Pages/UserDetails/UserDetails';



function App() { 

  return (
    <Router>
      <div className="">
        {/* <Header />
        <NavBar />  */}
        <div className='wrapper' style={{ width: '100%', background: 'black' }}>
          <div className='mx-4 border p-2 mt-4' style={{ background: 'white', height: "94vh",overflow: 'hidden auto' }}>
            <Switch>
            <Route path='/' component={UserDetails} />
              <Route path='/userDetails/list' component={UserDetails} />
              <Route path='/userDetails/:new' exact component={UserDetails} />
              <Redirect to='/'></Redirect>  
            </Switch>
          </div>
        </div>
      
      </div>
    </Router>
  );
}

export default App;
