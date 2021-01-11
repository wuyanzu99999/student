import React, { Component } from 'react';
import RightHeader from "../../components/RightHeader";
import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,
} from 'antd';
import "./index.css";
export default class Teacheradd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            sex: "",
            birthday: '',
            tel: '',
            entryDate: '',
            qualification: '',
            experience: '',
            subject: '',
            username:'',
            email:'',
            password:'',
            addressDetail:'',
            province:"",
            city:'',
            block:'',
            code:''
        }
    }
    selectValue(ev) {
        this.setState({
            sex: ev
        })
    }
    changeValue(ev, key) {
        this.setState({
            [key]: ev.target.value
        })
    }
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    onFinish = (values) => {
        console.log('Success:', values);
        console.log(this.state);
    };
    render() {
        return (
            <div>
                <RightHeader fiststName="老师" secondName="老师" thirdName="老师添加" />
                <div className="add-con">
                    <Form layout="inline" onFinish={() => this.onFinish()} onFinishFailed={() => this.onFinishFailed()}>
                        <p className="teacher-add-title"><span className="detail">基本细节</span>————————————————————————————————————————————————————————————</p>
                        <Form.Item
                            label="老师ID"
                            name="id"
                            style={{ width: 444, height: 40, marginBottom: 30 }}
                            rules={[{
                                required: true,
                                message: '老师id不能为空',
                            }]}
                        >
                            <Input value={this.state.id} onChange={(ev) => { this.changeValue(ev, "id") }} />
                        </Form.Item>
                        <Form.Item label="名称" style={{ width: 444, height: 40, marginBottom: 30 }}>
                            <Input value={this.state.name} onChange={(ev) => { this.changeValue(ev, "name") }} />
                        </Form.Item>
                        <Form.Item
                            name="sex"
                            label="sex"
                            hasFeedback
                            rules={[{ required: true, message: '请选择你的性别' }]}
                            style={{ width: 444, height: 40, marginBottom: 30 }}
                        >
                            <Select placeholder="请选择你的性别" onChange={(ev) => { this.selectValue(ev) }} value={this.state.sex}>
                                <Select.Option value="male">男</Select.Option>
                                <Select.Option value="female">女</Select.Option>
                                <Select.Option value="other">其他</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="出生日期" style={{ width: 444, height: 40, marginBottom: 30 }}>
                            <DatePicker onChange={(ev) => {
                                // let birth=ev._d.toLocaleDateString().split("/").join("");
                                this.setState({
                                    birthday: ev._d.toLocaleDateString()
                                })
                            }} />
                        </Form.Item>
                        <Form.Item 
                            label="电话" 
                            name="电话"
                            style={{ width: 444, height: 40, marginBottom: 30 }}
                            rules={[{
                                pattern	:/^1[3587]\d{9}$/,
                                message: '请填写正确的手机号',
                            }]}
                            
                        >
                            <Input value={this.state.tel} onChange={(ev) => { this.changeValue(ev, "tel") }} />
                        </Form.Item>
                        <Form.Item label="入职日期" style={{ width: 444, height: 40, marginBottom: 30 }}>
                            <DatePicker onChange={(ev) => {
                                // let birth=ev._d.toLocaleDateString().split("/").join("");
                                this.setState({
                                    birthday: ev._d.toLocaleDateString()
                                })
                            }} />
                        </Form.Item>
                        <Form.Item 
                            label="资质" 
                            name="qualification"
                            style={{ width: 444, height: 40, marginBottom: 30 }}
                        >
                            <Input value={this.state.qualification} onChange={(ev) => { this.changeValue(ev, "qualification") }} />
                        </Form.Item>
                        <Form.Item label="经验" style={{ width: 444, height: 40, marginBottom: 30 }}>
                            <Input value={this.state.experience} onChange={(ev) => { this.changeValue(ev, "experience") }} />
                        </Form.Item>
                        <Form.Item label="学科" style={{ width: 444, height: 40, marginBottom: 30 }}>
                            <Input value={this.state.subject} onChange={(ev) => { this.changeValue(ev, "subject") }} />
                        </Form.Item>
                        <p className="teacher-add-title"><span className="detail">登录详细信息</span>————————————————————————————————————————————————————————</p>

                        <Form.Item label="用户名" name="用户名" style={{ width: 444, height: 40, marginBottom: 30 }}
                            rules={[{
                                required: true,
                                message: '请输入您的用户名'
                            }]}>
                            <Input value={this.state.username} onChange={(ev) => { this.changeValue(ev, "username") }}/>
                        </Form.Item>
                        <Form.Item label="email" style={{ width: 444, height: 40, marginBottom: 30 }}>
                            <Input value={this.state.email} onChange={(ev) => { this.changeValue(ev, "email") }}/>
                        </Form.Item>

                        <Form.Item label="密码" name="密码" style={{ width: 444, height: 40, marginBottom: 30 }}
                            rules={[{
                                required: true,
                                message: '请输入您的密码'
                            }]}>
                            <Input value={this.state.password} onChange={(ev) => { this.changeValue(ev, "password") }}/>
                        </Form.Item>
                        <p className="teacher-add-title"><span className="detail">地址</span>————————————————————————————————————————————————————————————</p>
                        <Form.Item label="地址" style={{ width: 900, height: 40, marginBottom: 30 }}>
                            <Input  value={this.state.addressDetail} onChange={(ev) => { this.changeValue(ev, "addressDetail") }}/>
                        </Form.Item>
                        <Form.Item label="省份" style={{ width: 444, height: 40, marginBottom: 30 }} >
                            <Input value={this.state.province} onChange={(ev) => { this.changeValue(ev, "province")}}/>
                        </Form.Item>
                        <Form.Item label="市" style={{ width: 444, height: 40, marginBottom: 30 }} >
                            <Input value={this.state.city} onChange={(ev) => { this.changeValue(ev, "city")}}/>
                        </Form.Item>
                        <Form.Item label="区" style={{ width: 444, height: 40, marginBottom: 30 }} >
                            <Input value={this.state.block} onChange={(ev) => { this.changeValue(ev, "block")}}/>
                        </Form.Item>
                        <Form.Item label="邮政编码" style={{ width: 444, height: 40, marginBottom: 30 }} >
                            <Input value={this.state.code} onChange={(ev) => { this.changeValue(ev, "code")}}/>
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit" style={{backgroundColor:"#ffbc34",border:"none"}}>
                                提交
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div >
        )
    }
}
