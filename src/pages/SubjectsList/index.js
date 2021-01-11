import { Component } from 'react'
import '../SubjectsList/index.css'
import SubjectsEdit from  '../SubjectsEdit'
import {Link, Route} from 'react-router-dom'

export default class subjectlist extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="subjectlist-box">
                <div className="subjectlist-header">
                    <div >
                        科目<br />
                        仪表板 / 科目
                    </div>
                    <div>
                        下载 +
                    </div>
                </div>
                <div className="subjectlist-form">
                    <p>节目 参赛作品</p>
                    <div className="subjectlist-content">
                        <ul>
                            <li>ID</li>
                            <li>Name</li>
                            <li>class</li>
                            <li>Action</li>
                        </ul>
                        <ul>
                            <li>PRE1534</li>
                            <li>Botony</li>
                            <li>9</li>
                            <li>
                                <span>
                                <Link to="/SubjectsEdit" >修改</Link>   
                                </span>&nbsp;
                                <span>删除</span>
                            </li>
                        </ul>
                        <ul>
                            <li>PRE2431</li>
                            <li>Geography</li>
                            <li>8</li>
                            <li>
                                <span>修改</span>&nbsp;
                                <span>删除</span>
                            </li>
                        </ul>                      
                         <ul>
                            <li>PRE2213</li>
                            <li>History</li>
                            <li>6</li>
                            <li>
                                <span>修改</span>&nbsp;
                                <span>删除</span>
                            </li>
                        </ul>                      
                         <ul>
                            <li>PRE2209</li>
                            <li>Mathematics</li>
                            <li>5</li>
                            <li>
                                <span>修改</span>&nbsp;
                                <span>删除</span>
                            </li>
                        </ul>
                        <ul>
                            <li>PRE2153</li>
                            <li>English</li>
                            <li>4</li>
                            <li>
                                <span>修改</span>&nbsp;
                                <span>删除</span>
                            </li>
                        </ul>
                        <ul>
                            <li>PRE2143</li>
                            <li>Science</li>
                            <li>3</li>
                            <li>
                                <span>修改</span>&nbsp;
                                <span>删除</span>
                            </li>
                        </ul>
                   
                    </div>
                    <div className="subjectlist-form-bottom">
                      <div>显示6个条目中的1至6</div>
                      <div>
                          <input type="button" value="上一个" /> <span>1</span> <input type="button" value="一个" />
                      </div>
                    </div>
                    <div>
                    <Route path="/SubjectsEdit" component={SubjectsEdit} />
                    </div>
                </div>
            </div>
        )
    }
}

