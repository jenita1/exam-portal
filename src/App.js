import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidenav from './Component/Sidenav/Sidenav';
import Topnav from "./Component/Navbar/Topnav";
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import Test from "./Component/Testmode/Test";
import Home from './Component/Homepage/Home';

import Test1 from "./Component/Testmode/Test1";





class App extends Component {
    render() {
        return (
            <Router>
              <div>
                <div className="App">
                    <Topnav/>
                    <Home/>
                        <Sidenav/>



                    <div>
                        {/*<ul>*/}
                            {/*<li><Link to={'/'}>Panel1</Link></li>*/}
                        {/*</ul>*/}

                            <Route exact path='/panel1' component={Test}/>
                           <Route exact path='/panel1/test1' component={Test1}/>

                    </div>


                </div>
              </div>

            </Router>
        );
    }
}

export default App;
