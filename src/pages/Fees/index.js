import { Table, Tag, Space } from 'antd';
import { Component } from 'react';

export default class fees extends Component {
    constructor(props) {
      super(props);
      this.state ={
        columns :[
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: text => <a>{text}</a>,
            },
            {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
            },
            {
              title: 'Tags',
              key: 'tags',
              dataIndex: 'tags',
              render: tags => (
                <>
                  {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                      color = 'volcano';
                    }
                    return (
                      <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                      </Tag>
                    );
                  })}
                </>
              ),
            },
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <Space size="middle">
                  <a>Invite {record.name}</a>
                  <a>Delete</a>
                </Space>
              ),
            },
          ],
          data : [
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: '3',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            },
          ]
        }
    }
    render() {
        return (
          <div>
            <div className="control-box">
              <div className="box-left">
                <h3 className="left-teacher">老师</h3>
                <p className="left-tit">仪表师/<span>老师</span></p>
              </div>
              <div className="box-right">
                <span>下载</span><br />
                <span>+</span>
              </div>
            </div>
            <div className="show-box">
              <Table columns={this.state.columns} dataSource={this.state.data} />
            </div>
          </div>
        )
      }
}

