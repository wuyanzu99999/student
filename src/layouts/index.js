import { Component } from 'react';
import "./index.css";
import { Route } from 'react-router-dom'
import MySider from "../components/MySider";
import Headers from "../components/Headers";
import DashBord from "../pages/DashBord";
import TeacherList from "../pages/TeacherList";
import TeacherAdd from "../pages/TeacherAdd";
import TeacherView from "../pages/TeacherView";
import TeacherEdit from "../pages/TeacherEdit";
import FeesCollection from "../pages/FeesCollection";
import Expenses from "../pages/Expenses";
import Salary from "../pages/Salary";
import AddFees from "../pages/AddFees";
import AddExpenses from "../pages/AddExpenses";
import AddSalary from "../pages/AddSalary";
import BigEvent from "../pages/BigEvent";
import Login from "../pages/Login";
import SubjectsList from "../pages/SubjectsList";
import SubjectsEdit from "../pages/SubjectsEdit"
import SubjectsAdd from "../pages/SubjectsAdd";
import Holiday from "../pages/Holiday";
import Fees from "../pages/Fees"
import {BrowserRouter, Route, Link} from "react-router-dom";
export default class Layout extends Component {
    constructor(props) {
        super(props);
    }
    render = () => {
        console.log(this.props)
        if (this.props.location.pathname == "/Login") {
            return (
                <Route path="/Login" component={Login}></Route>
            )
        }
        return (
            <div className="container">
                <Headers />
                <div className="content">
                    <div className="con-nav">
                        <MySider />
                    </div>
                    <div className="content-mian">
                        <Route path="/" exact={true} component={DashBord}></Route>
                        <Route path="/DashBord" component={DashBord}></Route>
                        <Route path="/TeacherList" component={TeacherList}></Route>
                        <Route path="/TeacherView" component={TeacherView}></Route>
                        <Route path="/TeacherAdd" component={TeacherAdd}></Route>
                        <Route path="/TeacherEdit" component={TeacherEdit}></Route>
                        <Route path="/FeesCollection" component={FeesCollection}></Route>
                        <Route path="/Expenses" component={Expenses}></Route>
                        <Route path="/Salary" component={Salary}></Route>
                        <Route path="/AddFees" component={AddFees}></Route>
                        <Route path="/AddExpenses" component={AddExpenses}></Route>
                        <Route path="/AddSalary" component={AddSalary}></Route>
                        <Route path="/BigEvent" component={BigEvent}></Route>
                        <Route path="/SubjectsList" component={SubjectsList} />
                        <Route path="/SubjectsAdd" component={SubjectsAdd} />
                        <Route path="/SubjectsEdit" component={SubjectsEdit} />
                        <Route path="/Holiday" component={Holiday} />
                    </div>
                </div>
            </div>
        )
    }
}
