import React, { Component } from 'react';

import './App.css';
import Sidenav from './Component/Sidenav/Sidenav';
import Topnav from "./Component/Navbar/Topnav";
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import Test from "./Component/Testmode/Test";
import Test1 from "./Component/Testmode/Test1";
import Homepage from './Component/Homepage/Home';
import Exam from './Component/Exammode/Exam';

import ExamDevOps from "./Component/Exammode/ExamDevOps";
import Testmodule from "./Component/Testmode/Testmodule";
import Sets from "./Component/Exammode/Sets";
import Register from "./Component/Homepage/Register";



class App extends Component {
    render() {
        return (
            <Router>
              <div>
                <div className="App">
                    <Topnav/>
                    <Sidenav/>

                    <div>
                        <Route exact path='/' component={Homepage}/>
                        <Route exact path="/testmode/" component={Test}/>
                        <Route exact path="/testmode/test/"component={Test1}/>
                        <Route exact path="/testmode/" component={Testmodule}/>
                        <Route exact path="/Exammode" component={Sets}/>
                        <Route exact path="/testmode/EC2" component={Test1}/>
                        <Route exact path="/Exammode/Set1" component={ExamDevOps}/>
                        <Route exact path="/Exammode/Set2" component={ExamDevOps}/>
                        <Route exact path="/Register" component={Register}/>




                        <Route exact path="/panel2/"component={Test}/>
                        <Route exact path="/panel2/test/" component={Test1}/>
                        <Route exact path="/panel3/" component={Test}/>
                        <Route exact path="/panel3/test/" component={Test1}/>



                    </div>


                </div>
              </div>

            </Router>
        );
    }
}

export default App;
