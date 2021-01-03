import React, { Component } from 'react'
import "./index.css";
export default class componentName extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-left">
                    <a>
                        <img alt="logo" />
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
        )
    }
}
