import { Component } from 'react';
import "./index.css"
export default class Layout extends Component {
    constructor() {
        super();
    }
    render = () => (
        <div className="container">
            <div className="header">
                <div className="header-left">
                    <a>
                        <img  alt="logo"/>
                    </a>
                </div>
                <a className="header-menu">icon</a>
                <div className="header-search">
                    <input type="text" placeholder="在这里搜寻" className="ser-text" />
                    <button className="ser-btn">icon</button>
                </div>
                <div className="header-right">
                    <div className="right-mes">icon</div>
                    <div className="right-my">icon</div>
                </div>
            </div>
            <div className="content">
                <div className="content-nav">
                    <ul>                      
                        <h4>Main Menu</h4>
                        <li>
                            <span>icon</span>
                            Dashboard</li>
                        <li><span>icon</span>Students</li>
                        <li><span>icon</span>Teachers</li>
                        <li><span>icon</span>Departments</li>
                        <li><span>icon</span>Subjects</li>
                        <h4><span>icon</span>Management</h4>
                        <li><span>icon</span>Accounts</li>
                        <li><span>icon</span>Holiday</li>
                        <li><span>icon</span>Fees</li>
                        <li><span>icon</span>Exam list</li>
                        <li><span>icon</span>Events</li>
                        <li><span>icon</span>Time Table</li>
                        <li><span>icon</span>Library</li>
                        <h4>Pages</h4>
                        <li><span>icon</span>Authentication</li>
                        <li><span>icon</span>Blank Page</li>
                        <h4>Others</h4>
                        <li><span>icon</span>Sports</li>
                        <li><span>icon</span>Hostel</li>
                        <li><span>icon</span>Transport</li>
                    </ul>
                </div>
                <div className="content-mian">
                    这里是需要跳转的页面
                </div>
            </div>
        </div>
    )
}