import { Component } from 'react'

export default class teachers extends Component {
    constructor(){
        super();
        this.state={
            users:[
                {
                    userid:'01001',
                    username:"karry"
                },
                {
                    userid:'01002',
                    username:"Alen"
                },
                {
                    userid:'01003',
                    username:"Dalin"
                },
                {
                    userid:'01004',
                    username:"suyawen"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <div className="control-box">
                    <input type="text" />
                    <input type="button" vlaue="查询" />
                    <input type="button" vlaue="添加" />
                </div>
                <div className="show-box">
                    <table>
                        <tr>
                            <td>工号</td>
                            <td>用户名</td>
                            <td>密码</td>
                            <td>操作</td>
                        </tr>
                        <tr>
                            {this.state.users.map(item=>(
                                <tr>
                                    <td>{item.userid}</td>
                                    <td>{item.username}</td>
                                    <td>**************</td>
                                    <td>
                                        <input type="button" vlaue="修改"/>
                                        <input type="button" vlaue="删除"/>
                                        <input type="button" vlaue="修改密码"/>
                                    </td>
                                </tr>
                            ))}
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
