import { Component } from 'react';
import "./index.css"
import MySider from "../components/MySider";
import Headers from "../components/Headers";
import SubjectsList from "../pages/SubjectsList";
import SubjectsEdit from "../pages/SubjectsEdit"
import SubjectsAdd from "../pages/SubjectsAdd";
import Holiday from "../pages/Holiday";
import Fees from "../pages/Fees"
import { BrowserRouter, Route, Link } from "react-router-dom";



export default class Layout extends Component {
    constructor() {
        super()
    }
    render = () => (
        <div className="container">
            <Headers />
            <div className="content">
                <div className="con-nav">
                    <MySider />
                </div>
                <div className="content-mian">
                    {/* <SubjectsAdd/> */}
                    {/* <SubjectsList/> */}
                    {/* <Fees/> */} 
                <Route path="/SubjectsList" component={SubjectsList} />
                <Route path="/SubjectsAdd" component={SubjectsAdd} />
                <Route path="/SubjectsEdit" component={SubjectsEdit} />
                <Route path="/Holiday" component={Holiday} />
                </div>
            </div>
        </div>
    )
}