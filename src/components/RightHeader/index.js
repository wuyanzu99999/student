import React, { Component } from 'react'
import "./index.css";
import {VerticalAlignBottomOutlined,PlusOutlined} from '@ant-design/icons';

export default class RightHeader extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <>
        <div className="header-con">
          <div className="header-con-left">
            <h3 className="left-teacher">{this.props.fiststName}</h3>
            <p className="left-info">{this.props.secondName}&nbsp;&nbsp;/<span className="info-detail">&nbsp;&nbsp;{this.props.thirdName}</span></p>
          </div>
          <div className="header-con-right">
            <span className="header-right-btn"><VerticalAlignBottomOutlined /><span>下载</span></span>
            <span className="header-right-btn header-right-btn2"><PlusOutlined /></span>
          </div>
        </div>
      </>
    )
  }
}
