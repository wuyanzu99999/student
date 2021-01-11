import { Component } from 'react'

import { Table, Tag, Space } from 'antd';
export default class Holiday2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
             columns:[
                {
                    title: 'ID',
                    dataIndex: 'name',
                },
                {
                    title: '假期名称',
                    dataIndex: 'chinese',
                    sorter: {
                        compare: (a, b) => a.chinese - b.chinese,
                        multiple: 3,
                    },
                },
                {
                    title: '类型',
                    dataIndex: 'math',
                    sorter: {
                        compare: (a, b) => a.math - b.math,
                        multiple: 2,
                    },
                },
                {
                    title: '开始时间',
                    dataIndex: 'gotime',
                    sorter: {
                        compare: (a, b) => a.gotime - b.gotime,
                        multiple: 1,
                    },
                },
              
                {
                    title: '结束时间',
                    dataIndex: 'overtime',
                    sorter: {
                        compare: (a, b) => a.gotime - b.gotime,
                        multiple: 1,
                    },
                },
            ],
             data : [
                {
                    key: '1',
                    name: 'PRE2143',
                    chinese: "周年纪念日",
                    math:	"大学假期",
                    gotime: "2020年9月4日",
                    overtime:"2020年9月7日",
                },
                {
                    key: '2',
                    name: 'PRE2143',
                    chinese: "周年纪念日",
                    math:	"大学假期",
                    gotime: "2020年8月17日",
                    overtime:"2020年8月19日",
                },
                {
                    key: '3',
                    name: 'PRE2209',
                    chinese: "纪念日",
                    math:	"大学假期",
                    gotime: "2020年8月17日",
                    overtime:"2020年8月19日",
                },
                {
                    key: '4',
                    name: 'PRE2209',
                    chinese: "纪念日",
                    math:	"大学假期",
                    gotime: "2020年8月17日",
                    overtime:"2020年8月19日",
                },
                {
                  key: '5',
                  name: 'PRE2213',
                    chinese: "纪念日",
                    math:	"公共假期",
                    gotime: "2020年8月5日",
                    overtime:"2020年8月6日",
                },
                {
                key: '6',
                name: 'PRE2213',
                    chinese: "纪念日",
                    math:	"公共假期",
                    gotime: "2020年8月5日",
                    overtime:"2020年8月6日",
                }, 
                {
                key: '7',
                name: 'PRE2431',
                    chinese: "考试假期",
                    math:	"	学期休假",
                    gotime: "2020年9月17日",
                    overtime:"2020年9月30日",
                }, 
                {
                key: '8',
                name: 'PRE2431',
                    chinese: "考试假期",
                    math:	"	学期休假",
                    gotime: "2020年9月17日",
                    overtime:"2020年9月30日",
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <div className="control-box">
                    <div className="box-left">
                        <h3 className="left-teacher">假日</h3>
                        <p className="left-tit">仪表师/<span>假日</span></p>
                    </div>
                    <div className="box-right">
                        <span>下载</span><br />
                        <span>+</span>
                    </div>
                </div>
                <div className="show-box">
                    <Table columns={this.state.columns} dataSource={this.state.data}/>
                    
                </div>
                <div>
                 Showing 1 to 8 of 8 entries
                 </div>
            </div>
        )
    }
}
