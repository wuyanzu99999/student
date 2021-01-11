import React, { Component } from 'react';
import RightHeader from "../../components/RightHeader";
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd';
import "./index.css";
import moment from 'moment';
export default class TeacherEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '01001',
            name: '苏亚文',
            sex: "female",
            birthday: '1998-10-11',
            tel: '17739940125',
            entryDate: '2021-02-21',
            qualification: 'fsdaf',
            experience: 'sadfa',
            subject: 'dsfa',
            username: '苏苏子',
            email: '3337460160@qq.com',
            password: '112433',
            addressDetail: '12412',
            province: "甘肃省",
            city: '定西市',
            block: '渭源县',
            code: '748201'
        }
    }
    selectValue(ev){
        this.setState({
            sex:ev
        });
    };
    changeValue(ev, key) {
        this.setState({
            [key]:ev.target.value
        });
    }
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    onFinish = (values) => {
        console.log('Success:', values);
        console.log(this.state);
    };
    render() {
        const dateFormat = 'YYYY/MM/DD';
        return (
            <div>
                <RightHeader fiststName="老师" secondName="老师" thirdName="老师编辑" />
                <div className="edit-con">
                    <Form layout="inline" onFinish={() => this.onFinish()} onFinishFailed={() => this.onFinishFailed()}>
                        <p className="teacher-add-title"><span className="detail">基本细节</span>————————————————————————————————————————————————————————————</p>
                        <Form.Item
                            label="老师ID"
                            style={{ width: 444, height: 40, marginBottom: 30 }}
                        >
                            <Input defaultValue={this.state.id} onChange={(ev) => { this.changeValue(ev, "id") }} />
                        </Form.Item>
                        <Form.Item label="名称" style={{ width: 444, height: 40, marginBottom: 30 }}>
                            <Input defaultValue={this.state.name} onChange={(ev) => { this.changeValue(ev, "name") }} />
                        </Form.Item>
                        <Form.Item
                            label="sex"
                            hasFeedback
                            style={{ width: 444, height: 40, marginBottom: 30 }}
                        >
                            <Select placeholder="请选择你的性别" onChange={(ev) => { this.selectValue(ev) }} value={this.state.sex}>
                                <Select.Option value="male">男</Select.Option>
                                <Select.Option value="female">女</Select.Option>
                                <Select.Option value="other">其他</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="出生日期" style={{ width: 444, height: 40, marginBottom: 30 }} >
                            <DatePicker
                                defaultValue={moment(this.state.birthday, dateFormat)}
                                onChange={(ev) => {
                                    // let birth=ev._d.toLocaleDateString().split("/").join("");
                                    this.setState({
                                        birthday: ev._d.toLocaleDateString()
                                    })
                                }} />
                        </Form.Item>
                        <Form.Item
                            label="电话"
                            style={{ width: 444, height: 40, marginBottom: 30 }}
                            rules={[{
                                pattern: /^1[3587]\d{9}$/,
                                message: '请填写正确的手机号',
                            }]}
                        >
                            <Input defaultValue={this.state.tel} onChange={(ev) => { this.changeValue(ev, "tel") }} />
                        </Form.Item>
                        <Form.Item label="入职日期" style={{ width: 444, height: 40, marginBottom: 30 }}>
                            <DatePicker
                                defaultValue={moment(this.state.entryDate, dateFormat)}
                                onChange={(ev) => {
                                    // let birth=ev._d.toLocaleDateString().split("/").join("");
                                    this.setState({
                                        entryDate: ev._d.toLocaleDateString()
                                    })
                                }} />
                        </Form.Item>
                        <Form.Item
                            label="资质"
                            style={{ width: 444, height: 40, marginBottom: 30 }}
                        >
                            <Input defaultValue={this.state.qualification} onChange={(ev) => { this.changeValue(ev, "qualification") }} />
                        </Form.Item>
                        <Form.Item label="经验" style={{ width: 444, height: 40, marginBottom: 30 }}>
                            <Input defaultValue={this.state.experience} onChange={(ev) => { this.changeValue(ev, "experience") }} />
                        </Form.Item>
                        <Form.Item label="学科" style={{ width: 444, height: 40, marginBottom: 30 }}>
                            <Input defaultValue={this.state.subject} onChange={(ev) => { this.changeValue(ev, "subject") }} />
                        </Form.Item>
                        <p className="teacher-add-title"><span className="detail">登录详细信息</span>————————————————————————————————————————————————————————</p>
                        <Form.Item label="用户名" style={{ width: 444, height: 40, marginBottom: 30 }}>
                            <Input defaultValue={this.state.username} onChange={(ev) => { this.changeValue(ev, "username") }} />
                        </Form.Item>
                        <Form.Item label="email" style={{ width: 444, height: 40, marginBottom: 30 }}>
                            <Input defaultValue={this.state.email} onChange={(ev) => { this.changeValue(ev, "email") }} />
                        </Form.Item>
                        <Form.Item label="密码" style={{ width: 444, height: 40, marginBottom: 30 }}>
                            <Input defaultValue={this.state.password} onChange={(ev) => { this.changeValue(ev, "password") }} />
                        </Form.Item>
                        <p className="teacher-add-title"><span className="detail">地址</span>————————————————————————————————————————————————————————————</p>
                        <Form.Item label="地址" style={{ width: 900, height: 40, marginBottom: 30 }}>
                            <Input defaultValue={this.state.addressDetail} onChange={(ev) => { this.changeValue(ev, "addressDetail") }} />
                        </Form.Item>
                        <Form.Item label="省份" style={{ width: 444, height: 40, marginBottom: 30 }} >
                            <Input defaultValue={this.state.province} onChange={(ev) => { this.changeValue(ev, "province") }} />
                        </Form.Item>
                        <Form.Item label="市" style={{ width: 444, height: 40, marginBottom: 30 }} >
                            <Input defaultValue={this.state.city} onChange={(ev) => { this.changeValue(ev, "city") }} />
                        </Form.Item>
                        <Form.Item label="区" style={{ width: 444, height: 40, marginBottom: 30 }} >
                            <Input defaultValue={this.state.block} onChange={(ev) => { this.changeValue(ev, "block") }} />
                        </Form.Item>
                        <Form.Item label="邮政编码" style={{ width: 444, height: 40, marginBottom: 30 }} >
                            <Input defaultValue={this.state.code} onChange={(ev) => { this.changeValue(ev, "code") }} />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit" style={{ backgroundColor: "#ffbc34" }}>
                                提交
                                </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
