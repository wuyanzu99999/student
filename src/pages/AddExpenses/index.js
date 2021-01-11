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
export default class  AddExpenses extends Component {
    constructor(props) {
        super(props);      
    }
    commit(){
        console.log("表单已经提交")
    }
    render() {
        return (
            <>
                <RightHeader fiststName="增加费用" secondName="账目" thirdName="增加费用" />
                <div className="addexpenses-con">
                    <Form layout="inline" size="middle ">
                        <p className="add-title"><span>费用信息</span>——————————————————————————————————————————————————</p>
                        <Form.Item label="费用编号" style={{width:444,height:40,marginBottom:30}}>
                            <Input />
                        </Form.Item> 
                        <Form.Item label="项目名称" style={{width:444,height:40}}>
                            <Input />
                        </Form.Item>   
                        <Form.Item label="物品质量" style={{width:444,height:40,marginBottom:30}}>
                            <Input />
                        </Form.Item>   
                        <Form.Item label="费用金额"  style={{width:444,height:40}}>
                            <Input />                
                        </Form.Item> 
                        <Form.Item label="购买金额" style={{width:444,height:40,marginBottom:30,marginRight: 600}}>
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
