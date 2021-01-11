import React, { Component } from 'react'
import RightHeader from "../../components/RightHeader";
import { Table, Button, Space } from 'antd';
import "./index.css";
import {
    Form,
    Input,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd';
export default class  AddSalary extends Component {
    constructor(props) {
        super(props);      
    }
    commit(){
        console.log("表单已经提交")
    }
    render() {
        return (
            <>
                <RightHeader fiststName="薪水" secondName="账目" thirdName="加薪" />
                <div className="addsalary-con">
                    <Form layout="inline" size="middle ">
                        <p className="add-title"><span>薪资信息</span>——————————————————————————————————————————————————</p>
                        <Form.Item label="员工编号" style={{width:444,height:40,marginBottom:30}}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="姓名" style={{width:444,height:40}}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="select"
                            label="性别"
                            hasFeedback
                            rules={[{ required: false, message: '请选择你的性别' }]}
                            style={{width:444,height:40,marginBottom:30}}
                        >
                            <Select placeholder="请选择你的性别">
                                <Option value="male">男</Option>
                                <Option value="female">女</Option>
                                <Option value="other">其他</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="入职日期"  style={{width:444,height:40}}>
                            <DatePicker />
                        </Form.Item>   
                        <Form.Item label="加薪值"  style={{width:444,height:40,marginBottom:30,marginRight: 600}}>
                            <Input />                
                        </Form.Item>               
                        <Form.Item>
                            <Button onClick={()=>this.commit()} style={{backgroundColor:"#ffbc34"}}>提交</Button>
                        </Form.Item>
                </Form>
                </div>
            </>
        )
    }
}
