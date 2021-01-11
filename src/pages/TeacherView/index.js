import React, { Component } from 'react'
import RightHeader from "../../components/RightHeader";
import { Progress } from 'antd';
import './index.css'
export default class TeacherView extends Component {
    constructor(props){
        super(props);
        console.log(this.props.location.query.tId);
    }
    render() {
        return (
            <div>
                <RightHeader fiststName="老师" secondName="老师" thirdName="老师详细信息" />
                <div className="view-wrap">
                    <h4 className="about">关于我</h4>
                    <div className="view-con">
                        <img src="" className="con-img" />
                        <ul className="con-info">
                            <li>
                                全名:&nbsp;&nbsp;&nbsp;&nbsp;
                                王俊凯
                            </li>
                            <li>
                                部门:&nbsp;&nbsp;&nbsp;&nbsp;
                                计算机科学
                            </li>
                            <li>
                                手机:&nbsp;&nbsp;&nbsp;&nbsp;
                                +86 17739940125
                            </li>
                            <li>
                                邮箱:&nbsp;&nbsp;&nbsp;&nbsp;
                                3337460160@qq.com
                            </li>
                            <li>
                                性别:&nbsp;&nbsp;&nbsp;&nbsp;
                                男
                            </li>
                            <li>
                                生日:&nbsp;&nbsp;&nbsp;&nbsp;
                                1998年4月22号
                            </li>
                        </ul>
                    </div>
                    <p className="view-title">这里是对老师的内容简介</p>
                    <ul className="view-charts">
                        <li>
                            2850
                        </li>
                        <li>
                            2850
                        </li>
                        <li>
                            2850
                        </li>
                    </ul>
                    <div className="view-add">
                        <h4>永久住址</h4>
                        <p>第一个法院收到货福晶科技洒上刊登飞机撒</p>
                    </div>
                    <div className="view-add">
                        <h4>现在的住址</h4>
                        <p>第一个法院收到货福晶科技洒上刊登飞机撒</p>
                    </div>
                    <div className="view-skill">
                        <h4>技能专长</h4>
                        <p>未发生噶啥是阿刚发</p>
                        <ul>
                            <li>
                                <p>司法所快递费加咖啡</p>
                                <Progress strokeColor={{
                                    '0%': '#108ee9',
                                    '80%': '#87d068',
                                }}
                                    percent={70}
                                    strokeWidth={15}
                                    />
                            </li>
                            <li>
                                <p>司法所快递费加咖啡</p>
                                <Progress strokeColor={{
                                    '0%': '#108ee9',
                                    '80%': '#87d068',
                                }}
                                    percent={60}
                                    strokeWidth={15}
                                    />
                            </li>
                            <li>
                                <p>司法所快递费加咖啡</p>
                                <Progress strokeColor={{
                                    '0%': '#108ee9',
                                    '80%': '#87d068',
                                }}
                                    percent={50}
                                    strokeWidth={15}
                                    />
                            </li>
                            <li>
                                <p>司法所快递费加咖啡</p>
                                <Progress strokeColor={{
                                    '80%': '#ffbc34',
                                    '0%': '#ecc370',
                                }}
                                    percent={40}
                                    strokeWidth={15}
                                    />
                            </li>
           
                        </ul>
                    </div>
                    <div className="view-edu">
                        <h4 >教育</h4>
                        <ul>
                            <li>阿斯蒂芬斯蒂芬</li>
                            <li>阿斯蒂芬斯蒂芬</li>
                            <li>阿斯蒂芬斯蒂芬</li>
                            <li>阿斯蒂芬斯蒂芬</li>
                            <li>阿斯蒂芬斯蒂芬</li>
                        </ul>
                    </div>
                    <div className="view-edu">
                        <h4>说明书</h4>
                        <ul>
                            <li>sdfasdfsd</li>
                            <li>sdfasdfsd</li>
                            <li>sdfasdfsd</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
