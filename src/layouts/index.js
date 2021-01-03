import { Component } from 'react';
import "./index.css"
import NavList from "../components/NavList";
import Headers from "../components/Headers";
export default class Layout extends Component {
    constructor() {
        super();
    }
    render = () => (
        <div className="container">
            <Headers/>
            <div className="content">
                <NavList/>
                <div className="content-mian">
                   页面的内容展示
                </div>
            </div>
        </div>
    )
}