import React, { Component } from 'react'
import RightHeader from "../../components/RightHeader";
import { Table, Button, Space ,Tag} from 'antd';
export default class FeesCollection extends Component {
    constructor(props) {
        super(props);
        this.state={
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
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer']

                },
                {
                    id: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                    tags: ['nice', 'developer']

                },
                {
                    id: '3',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['nice', 'developer']

                },
                {
                    id: '4',
                    name: 'Jim Red',
                    age: 32,
                    address: 'London No. 2 Lake Park',
                    tags: ['nice', 'developer']

                },
            ];
        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
                ellipsis: true,
                width: 100
            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
                ellipsis: true,
                width: 300
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
                ellipsis: true,
                width: 100
            },
            {
                title: '收费类型',
                dataIndex: 'type',
                key: 'type',
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
                ellipsis: true,
                width: 100
            },
            {
                title: '价格',
                dataIndex: 'price',
                key: 'price',
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
                ellipsis: true,
                width: 100
            },
            {
                title: '缴纳日期',
                dataIndex: 'date',
                key: 'date',
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
                ellipsis: true,
                width: 100
            },
            {
                title: '状态',
                key: 'tags',
                dataIndex: 'tags',
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
            },

        ];
        return (
            <>
                <RightHeader fiststName="费用收取" secondName="仪表板" thirdName="费用收取" />
                <div className="fees-con">
                    <Space style={{ marginBottom: 16 }}>
                        <Button onClick={this.setAgeSort}>Sort age</Button>
                        <Button onClick={this.clearFilters}>Clear filters</Button>
                        <Button onClick={this.clearAll}>Clear filters and sorters</Button>
                    </Space>
                    <Table columns={columns} dataSource={data} onChange={this.handleChange}   />
                </div>
            </>
        )
    }
}
