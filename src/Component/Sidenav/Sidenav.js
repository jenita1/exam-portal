import React,{Component} from 'react';


export default class Sidenav extends Component {
    constructor(props) {
        super(props);
        this.openNav = this.openNav.bind(this);
    }




    // method to call the menu at topnavbar
    openNav() {
        document.getElementById("mySidenav").style.width = "200px";
        }

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";

    }


    render() {
            return (


                    <div id="mySidenav" className="sidenav">
                        <a href="#">Introduction</a>

                        <div className="panel-group">
                            <div className="panel">
                                <div className="">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" href="#collapse1">Exams</a>
                                    </h4>
                                </div>
                                <div id="collapse1" className="panel-collapse collapse">
                                    {/*Dropdown while clicking 1st*/}
                                    <span className="dropdown panel-body ">
                                            <a href="#" className="panel-body dropdown-toggle" data-toggle="dropdown">Developer Associate</a>
                                            <ul className="dropdown-menu dropdown-menu-right">
                                                {/*routing through this*/}
                                                <li><a href="#testmode">Test mode</a>
                                                    </li>

                                                <li><a href="#Exammode">Exam mode</a>
                                                </li>
                                            </ul>
                                    </span>
                                    {/*dropdown while clicking 2nd*/}
                                    <span className="dropdown panel-body ">
                                            <a href="#" className="panel-body dropdown-toggle" data-toggle="dropdown">Solution Associate</a>
                                            <ul className="dropdown-menu dropdown-menu-right">
                                                <li><a href="#panel2">Test mode</a></li>
                                                <li><a href="#Exammode">Exam mode</a></li>
                                            </ul>
                                    </span>
                                    {/* dropdown while clicking 3rd*/}
                                    <span className="dropdown panel-body ">
                                        <a href="#" className="panel-body dropdown-toggle" data-toggle="dropdown">Sysops Administrator</a>
                                        <ul className="dropdown-menu dropdown-menu-right">
                                                <li><a href="#panel3">Test mode</a></li>
                                                <li><a href="#Exammode"> Exam mode</a></li>
                                            </ul>
                                    </span>
                                </div>
                            </div>
                        <a href="#">Clients</a>
                        <a href="#">Contact</a>
                        </div>
                    </div>







            )
        }

}
