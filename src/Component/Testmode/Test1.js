import React,{Component} from 'react';
import axios from 'axios';
import '../../App.css';
// import sweetAlert from "sweetalert/typings/sweetalert";
var post_api = "https://ujai96180i.execute-api.us-east-1.amazonaws.com/web-exam/exam-web";
var get_api = "https://ujai96180i.execute-api.us-east-1.amazonaws.com/web-exam/exam-web";

export default class Test extends Component {
    constructor() {
        super();
        this.state = {
            correct_answer:{},
            user_answers:[],
            question:[],
            answer:[],
            fetched_data:[],
            disabled:false,
            currentPage: 1,
            questionPerPage: 1,
            greenColor:false,
            info:'',
            answer_description:[],
            correct:false,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log("we are in");
        this.setState({
            info:""
        });

        var correctansVariable = this.state.correct_answer[this.state.currentPage]
        var useransVariable = this.state.user_answers;

        if(correctansVariable.length == useransVariable.length){
            useransVariable.sort();
            console.log(" both array ko length equal xa");
            for(var j =0;j<correctansVariable.length;j++){
                if(correctansVariable[j] != useransVariable[j]){
                    console.log("wrong answer");
                    this.setState({
                        correct:false,
                        info:this.state.answer_description[(this.state.currentPage-1)]
                    });
                    break;
                }
                else{
                    console.log("right");
                    this.setState({
                        info:''
                    })
                }
                console.log(correctansVariable[j]);
                console.log(useransVariable[j]);
            }
        }
        else{
            console.log("length equal xainaa");
            this.setState({
                correct:false,
                info:this.state.answer_description[(this.state.currentPage-1)]
            });
        }
        this.setState({
            user_answers:[],
            disabled:true,
        });
    }


    onChange(e) {
        const user_answers = this.state.user_answers
        let index

        if (e.target.checked) {
            user_answers.push(+e.target.value)
        } else {
            index = user_answers.indexOf(+e.target.value)
            user_answers.splice(index, 1)
        }

        this.setState({ user_answers: user_answers })
    }

    componentDidMount()
    {
        this.fetchdata()
    }
    fetchdata(){


        axios.get(post_api, {
            params: {

            }
        })
            .then(response => {
                this.setState({
                    fetched_data: response.data["res"],
                    correct_answer:response.data["ans"]
                })
            })
            .catch(error => {
            });
    }
    handleClick(event) {
        this.setState({
            disabled:false,
            info:'',
            currentPage: Number(event.target.id),
            user_answers:[]
        });
    }

    render() {

        this.state.answer= new Array();
        for(var l = 0; l<this.state.fetched_data.length;l++)
        {
            this.state.answer[l] = new Array();
        }
        for(var i =0;i<this.state.fetched_data.length;i++)
        {
            this.state.question[i] = this.state.fetched_data[i]["question"];
            this.state.answer_description[i] = this.state.fetched_data[i]["correct_ans"];
            for(var j =0;j<this.state.fetched_data[i]["answer"].length;j++)
            {
                this.state.answer[i][j] = this.state.fetched_data[i]["answer"][j];
            }
        }
        const { question, answer,currentPage, questionPerPage } = this.state;

        // Logic for displaying current question
        const indexOfLastTodo = currentPage * questionPerPage;
        const indexOfFirstTodo = indexOfLastTodo - questionPerPage;
        const currentquestion = question.slice(indexOfFirstTodo, indexOfLastTodo);
        const currentanswer =[];
        var ans= [];
        ans = this.state.answer[(this.state.currentPage)-1];
        for (var key in ans) {
            if (ans.hasOwnProperty(key)) {
                currentanswer[key] = ans[key];
                // console.log(key + " -> " + a[key]);
            }
        }

        const renderquestion = currentquestion.map((todo, index) => {
            return <div>
                <p key={index}>{this.state.currentPage}.{todo}</p>
            </div>;
        });
        const renderanswer= currentanswer.map((todo, index) => {
            return <div>
                <p className={(this.state.greenColor)?'greenColor':'redColor'}  key={index}>
                    <input value={index+1} type="checkbox" disabled={this.state.disabled} onChange={this.onChange.bind(this)} />
                    {todo}
                </p>
            </div>;
        });
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(question.length / questionPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <table id="display_index" border="1">
                    <li
                        key={number}
                        id={number}
                        onClick={this.handleClick}
                    >
                        {number}
                    </li>

                </table>
            );
        });
        return (
            <div>
                <ul>
                    {renderquestion}
                    {renderanswer}
                    <button onClick={this.handleSubmit}>Check</button>
                    <h5>{this.state.info}</h5>
                </ul>
                <ul id="page-numbers">
                    {renderPageNumbers}
                </ul>
            </div>
        );
    }
}
