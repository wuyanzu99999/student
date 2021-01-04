import { Component } from 'react'
import "./index.css"
export default class componentName extends Component {
    constructor(){
        super();
        this.state={
            isActive:false,
        }
    }
    changeCss(ev){
        console.log(ev.target);
        console.log( ev.target.lastElementChild)
        ev.target.lastElementChild.style.transform= "rotateZ(90deg)";           
    }
    
    render() {
        return (
            <div className="content-nav">
                <ul onClick={(ev)=>this.changeCss(ev)}>
                    <h4>Main Menu</h4>
                    <li>
                        <span>图标</span>
                            Dashboard
                        <input type="button" value=">"/>
                    </li>
                    <li>
                        <span>图标</span>                      
                            Students
                         <input type="button" value=">"/>
                    </li>
                    <li>
                        <span>图标</span>
                        Teachers
                        <input type="button" value=">"/>
                    </li>
                    <li>
                        <span>图标</span>             
                        Departments
                        <input type="button" value=">"/>                  
                    </li>
                    <li>
                        <span>图标</span>
                        Subjects
                        <input type="button" value=">"/>
                    </li>
                    <h4> Management</h4>
                    <li>
                        <span>图标</span>
                        Accounts
                        <input type="button" value=">"/>
                    </li>
                    <li>
                        <span>图标</span>
                        Holiday
                        <input type="button" value=">"/>
                    </li>
                    <li>
                        <span>图标</span>
                        Fees
                        <input type="button" value=">"/>
                    </li>
                    <li>
                        <span>图标</span>
                        Exam list
                        <input type="button" value=">"/>
                    </li>
                    <li>
                        <span>图标</span>
                        Events
                        <input type="button" value=">"/>
                    </li>
                    <li>
                        <span>图标</span>
                        Time Table
                        <input type="button" value=">"/>
                    </li>
                    <li>
                        <span>图标</span>
                        Library
                        <input type="button" value=">"/>
                    </li>
                    <h4>Pages</h4>
                    <li>
                        <span>图标</span>
                        Authentication
                        <input type="button" value=">"/>
                    </li>
                    <li>
                        <span>图标</span>
                        Blank Page
                        <input type="button" value=">"/>
                    </li>
                    <h4>Others</h4>
                    <li>
                        <span>图标</span>
                        Sports
                        <input type="button" value=">"/>
                    </li>
                    <li>
                        <span>图标</span>
                        Hostel
                        <input type="button" value=">"/>
                    </li>
                    <li>
                        <span>图标</span>
                        Transport
                        <input type="button" value=">"/>
                    </li>
                </ul>
            </div>
        )
    }
}
