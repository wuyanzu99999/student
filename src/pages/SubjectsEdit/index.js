import { Component } from 'react'
import '../SubjectsEdit/index.css'
import axios from "axios"

export default class SubjectsAdd extends Component {
    constructor() {
        super();
        this.state = {

        }
        axios({
            url:"http://localhost:3000/books"
        }).then(res=>{
            console.log(res.data);
        })
        
    }

    render() {
        return (
            <div className="subjectadd-box">
                <div className="subjectadd-header">
                    <div >
                        编辑主题<br />
                        <sapn>主题 </sapn>/ <span>编辑主题</span>
                    </div>
                </div>
                <div className="subjectadd-text">
                    <div className="subjectadd-textheader">
                        <div className="subjectadd-headerleft">学科信息</div>
                        <div className="subjectadd-headerright"></div>
                    </div>
                    <div className="subjectadd-list">
                        <div className="subjectadd-list1">
                            <p>主题编号</p>
                            <input type="text" />
                        </div>
                        <div className="subjectadd-list2">
                            <p>主题名称</p>
                            <input type="text" />
                        </div>
                        <div className="subjectadd-list1">
                            <p>类</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div>
                        <input type="button" value="提交"/>
                    </div>
                </div>
            </div>
        )
    }
}