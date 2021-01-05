import { Component } from 'react';
import "./index.css"
import MySider from "../components/MySider";
import Headers from "../components/Headers";
import TeacherList from "../pages/TeacherList";
export default class Layout extends Component {
    constructor() {
        super();
    }
    render = () => (
        <div className="container">
            <Headers/>
            <div className="content">
                <div className="con-nav">
                <MySider/>
                </div>
                <div className="content-mian">
                  <TeacherList/>
                </div>
            </div>
        </div>
    )
}