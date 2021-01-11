import React, { Component } from 'react'
import RightHeader from "../../components/RightHeader";
import { Table, Button, Space,Tag} from 'antd';
import "./index.css";
export default class  Salary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredInfo: null,
            sortedInfo: null,
        }
    }
    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };

    clearFilters = () => {
        this.setState({ filteredInfo: null });
    };

    clearAll = () => {
        this.setState({
            filteredInfo: null,
            sortedInfo: null,
        });
    };
    setAgeSort = () => {
        this.setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'age',
            },
        });
    };
    render() {
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const data=[
            {
                id: '1',
                name: 'John Brown',
                age: 32,
                entryDate:'2020/05/11',
                salary:10000,
                tags: ['nice', 'developer']

            },
            {
                id: '2',
                name: 'John Brown',
                age: 32,
                entryDate:'2020/05/11',
                salary:10000,
                tags: ['nice', 'developer']

            },
            {
                id: '3',
                name: 'John Brown',
                age: 32,
                entryDate:'2020/05/11',
                salary:10000,
                tags: ['nice', 'developer']

            }
        ];
        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
                ellipsis: true
            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
                ellipsis: true
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
                ellipsis: true
                
            },
            {
                title: '入职日期',
                dataIndex: 'entryDate',
                key: 'entryDate',
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
                ellipsis: true
               
            },
            {
                title: '工资',
                dataIndex: 'salary',
                key: 'salary',
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
                ellipsis: true
            },
            {
                title: '状态',
                key: 'tags',
                dataIndex: 'tags',
                sorter: (a, b) => a.age - b.age,
                render: tags=> (
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
            }

        ];
        return (
            <>
                <RightHeader fiststName="薪水" secondName="仪表板" thirdName="薪水" />
                <div className="salary-con">
                    <Space style={{ marginBottom: 16 }}>
                        <Button onClick={this.setAgeSort}>Sort age</Button>
                        <Button onClick={this.clearFilters}>Clear filters</Button>
                        <Button onClick={this.clearAll}>Clear filters and sorters</Button>
                    </Space>
                    <Table columns={columns} dataSource={data} onChange={this.handleChange}/>
                </div>
            </>
        )
    }
}
