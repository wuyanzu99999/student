import { Component } from 'react'
import "./index.css";
import { Table, Tag, Space, Button ,Pagination} from 'antd';
import RightHeader from "../../components/RightHeader";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class TeacherList extends Component {
  constructor() {
    super();
    this.state = {
      columns: [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
          render: text => <a>{text}</a>,
        },
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '班级',
          dataIndex: 'class',
          key: 'class',
        },
        {
          title: '性别',
          dataIndex: 'sex',
          key: 'sex',
        },
        {
          title: '学科',
          dataIndex: 'subject',
          key: 'subject',
        },
        {
          title: '等级',
          dataIndex: 'section',
          key: 'section',
        },
        {
          title: '电话号',
          dataIndex: 'tel',
          key: 'tel',
        },
        {
          title: '地址',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <Button style={{
                width: 35, height: 35, backgroundColor: "#3abafb", color: "#fff", lineHeight: 0, padding: 0, fontSize: 10
                , border: "none", borderRadius: "8"
              }}>编辑</Button>
              <b style={{ width: 35, height: 35, backgroundColor: "#fdc556", color: "#fff", lineHeight: 0, padding: 0, fontSize: 10, border: "none", borderRadius: "8", display: "inline-block",lineHeight: "35px",textAlign:"center"}}>删除</b>
            </Space>
          ),
        },
      ],
      data: [
        {
          id: '1',
          name: 'John Brown',
          class: 10,
          sex: '男',
          subject: '历史',
          section: 'A',
          tel: '17629174882',
          address: '甘肃省定西市威远县会发撒地方哈克受到了麻烦阿法狗哈尽快给',
          tags: ['nice', 'developer']
        },
        {
          id: '2',
          name: 'John Brown',
          class: 10,
          sex: '男',
          subject: '历史',
          section: 'A',
          tel: '17629174882',
          address: '甘肃省定西市威远县会发撒地方哈克受到了麻烦阿法狗哈尽快给',
          tags: ['nice', 'developer']
        },
        {
          id: '3',
          name: 'John Brown',
          class: 10,
          sex: '男',
          subject: '历史',
          section: 'A',
          tel: '17629174882',
          address: '甘肃省定西市威远县会发撒地方哈克受到了麻烦阿法狗哈尽快给',
          tags: ['nice', 'developer']
        },
        {
          id: '4',
          name: 'John Brown',
          class: 10,
          sex: '男',
          subject: '历史',
          section: 'A',
          tel: '17629174882',
          address: '甘肃省定西市威远县会发撒地方哈克受到了麻烦阿法狗哈尽快给',
          tags: ['nice', 'developer']
        },
        {
          id: '5',
          name: 'John Brown',
          class: 10,
          sex: '男',
          subject: '历史',
          section: 'A',
          tel: '17629174882',
          address: '甘肃省定西市威远县会发撒地方哈克受到了麻烦阿法狗哈尽快给',
          tags: ['nice', 'developer']
        },
        {
          id: '6',
          name: 'John Brown',
          class: 10,
          sex: '男',
          subject: '历史',
          section: 'A',
          tel: '17629174882',
          address: '甘肃省定西市威远县会发撒地方哈克受到了麻烦阿法狗哈尽快给',
          tags: ['nice', 'developer']
        },
        {
          id: '7',
          name: 'John Brown',
          class: 10,
          sex: '男',
          subject: '历史',
          section: 'A',
          tel: '17629174882',
          address: '甘肃省定西市威远县会发撒地方哈克受到了麻烦阿法狗哈尽快给',
          tags: ['nice', 'developer']
        },
        {
          id: '8',
          name: 'John Brown',
          class: 10,
          sex: '男',
          subject: '历史',
          section: 'A',
          tel: '17629174882',
          address: '甘肃省定西市威远县会发撒地方哈克受到了麻烦阿法狗哈尽快给',
          tags: ['nice', 'developer']
        },
        {
          id: '9',
          name: 'John Brown',
          class: 10,
          sex: '男',
          subject: '历史',
          section: 'A',
          tel: '17629174882',
          address: '甘肃省定西市威远县会发撒地方哈克受到了麻烦阿法狗哈尽快给',
          tags: ['nice', 'developer']
        },
        {
          id: '10',
          name: 'John Brown',
          class: 10,
          sex: '男',
          subject: '历史',
          section: 'A',
          tel: '17629174882',
          address: '甘肃省定西市威远县会发撒地方哈克受到了麻烦阿法狗哈尽快给',
          tags: ['nice', 'developer']
        }
      ]
    }
  }
  // componentDidMount(){
  //   axios({url:"http:localhost:3000/teacherList"})
  //   .then(res=>{
  //     console.log(res.data);
  //   })
  // }
  goOtherPages(event, record) {
    if (event.target.tagName == "TD") {
      this.props.history.push({ pathname: '/TeacherView', query: { tId :event.target.parentNode.firstElementChild.firstElementChild.innerHTML} })
      console.log("跳往教师详情页面");
    } else {
      let tId=event.target.parentNode.firstElementChild.parentNode.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.innerHTML;
      if (event.target.tagName == "B") {
        if(confirm("亲，您确定要删除这条信息吗？")){
          console.log(event.target.parentNode)
          console.log("删除信息",tId);
        }
      } else {
        this.props.history.push({ pathname: '/TeacherEdit', query: { tId } })
        console.log("跳往教师编辑页面");
      }
    }
  }
  changePage(page){
    console.log(page);
  }
  render() {
    return (
      <div>
        <RightHeader fiststName="老师" secondName="老师" thirdName="老师列表" />
        <div className="wraper-con">
          <Table
            columns={this.state.columns} dataSource={this.state.data}
            scroll={{ x: 'calc(700px + 50%)' }}
            onRow={record => {
              return {
                onClick: (event, record) => { this.goOtherPages(event, record)}
              }
            }}
            pagination={
              false
            }
          />
          <Pagination 
            defaultCurrent={1} total={100}  style={{ float:"right" }} onChange={(page)=>this.changePage(page)}
            defaultPageSize={10}
            />
        </div>
      </div>
    )
  }
}
