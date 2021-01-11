import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import './index.css'
import { Table } from 'antd';
import { UserOutlined, InsertRowLeftOutlined, CrownOutlined, DollarOutlined } from '@ant-design/icons';
export default class DashBord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataStar: [],
            dataAction: [
                {
                action: "1234567"
            },
            {
                action: "1234567"
            },
            {
                action: "1234567"
            }
            ],
            columnsStar: [
                {
                    title: 'ID',
                    dataIndex: 'name',
                    key: 'name',
                    width: 50,
                },
                {
                    title: '名称',
                    dataIndex: 'age',
                    key: 'age',
                    width: 50

                },
                {
                    title: '分数',
                    dataIndex: 'score',
                    key: 'score',
                    width: 50
                },
                {
                    title: '百分比',
                    dataIndex: 'address',
                    key: 'address',
                    width: 50
                },
                {
                    title: '年',
                    dataIndex: 'year',
                    key: 'year',
                    width: 50
                }
            ],
            columnsAction: [
                {
                    dataIndex: 'action',
                    key: 'ation',
                    width: 50,
                },
            ]
        }
    }
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myBar = echarts.init(document.getElementById('bar'));
        // 绘制图表
        myBar.setOption({
            color: ['#3abafb', '#fdc556'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [

                {
                    name: '联盟广告',
                    type: 'bar',
                    stack: '广告',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'bar',
                    stack: '广告',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },

            ]
        })
        var myLine = echarts.init(document.getElementById('line'));
        // 绘制图表
        myLine.setOption({
            color: ['#3abafb', '#fdc556'],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
            },
            {
                data: [720, 425, 601, 834, 929, 730, 520],
                type: 'line',
                areaStyle: {}
            }]
        });
    }
    render() {
        return (
            <div className="dash-con">
                <div className="header-con">
                    <div className="header-con-left">
                        <h3 className="left-teacher">欢迎管理员</h3>
                        <p className="left-info"><span className="info-detail">仪表板</span></p>
                    </div>
                </div>
                <ul className="dash-info">
                    <li style={{ backgroundColor: "#fedd9b", border: "1px solid #fdbb38" }}>
                        <span className="info-icon" style={{ backgroundColor: " #fdbb38" }}><UserOutlined /></span>
                        <h6>500500</h6>
                        <p>学生数量</p>
                    </li>
                    <li style={{ backgroundColor: "#d1effe", border: "1px solid #19affb" }}>
                        <span className="info-icon" style={{ backgroundColor: " #19affb" }}><CrownOutlined /> </span>
                        <h6>500500</h6>
                        <p>获奖情况</p>
                    </li>
                    <li style={{ backgroundColor: "#fde1d9", border: "1px solid #f46841" }}>
                        <span className="info-icon" style={{ backgroundColor: " #f46841" }}><InsertRowLeftOutlined /></span>
                        <h6>500500</h6>
                        <p>部门</p>
                    </li>
                    <li style={{ backgroundColor: "#e2e1fe", border: "1px solid #6e6bfa" }}>
                        <span className="info-icon" style={{ backgroundColor: " #6e6bfa" }}><DollarOutlined /></span>
                        <h6>500500</h6>
                        <p>收入</p>
                    </li>
                </ul>
                <div className="dash-echarts">
                    <div id="line" style={{ width: 481, height: 452 }}></div>
                    <div id="bar" style={{ width: 400, height: 400 }}></div>
                </div>
                <div className="dash-echarts">
                    <div style={{ width: 460, height: 526 }}>
                        <Table
                            columns={this.state.columnsStar}
                            dataSource={this.state.dataStar}
                            bordered
                            size="small"
                            title={() => '明星学生'}
                            scroll={{ x: 'calc(700px + 50%)', y: 240 }}
                        />
                    </div>
                    <div style={{ width: 410 }} className="dash-active">
                        <Table
                            columns={this.state.columnsAction}
                            dataSource={this.state.dataAction}
                            bordered
                            size="small"
                            title={() => '学生活动'}
                            pagination={false}
                        />
                    </div>
                </div>
                <ul className="dash-data">
                    <li style={{ backgroundColor: "#3a5794" }}>
                        <h6>13,140</h6>
                        <p>喜欢</p>
                    </li>
                    <li style={{ backgroundColor: "#1d9bea" }}>
                        <h6>13,166</h6>
                        <p>喜欢</p>
                    </li>
                    <li style={{ backgroundColor: "#d34b7d" }}>
                        <h6>13,466</h6>
                        <p>喜欢</p>
                    </li>
                    <li style={{ backgroundColor: "#0e72a2" }}>
                        <h6>13,166</h6>
                        <p>喜欢</p>
                    </li>
                </ul>
            </div>
        )
    }
}
