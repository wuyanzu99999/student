import React, { Component } from 'react'
import "./index.css";
import {AlignLeftOutlined  ,SearchOutlined,BellOutlined } from '@ant-design/icons';

export default class Headers extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-left">
                    <a>
                        <img src="img/logo.png" style={{width:153,height:40}}/>
                    </a>
                </div>
                
                <a className="header-menu"><AlignLeftOutlined /> </a>
                <div className="header-search">
                    <input type="text" placeholder="在这里搜寻" className="ser-text" />
                    <button className="ser-btn"><SearchOutlined /></button>
                </div>
                <div className="header-right">
                    <div className="right-mes"><BellOutlined/></div>
                    <div className="right-my">icon</div>
                </div>
            </div>
        )
    }
}
