import React, { Component } from 'react'
import RightHeader from "../../components/RightHeader";
import { Table, Button, Space } from 'antd';
import "./index.css";
export default class  Expenses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
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
            ],
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
                title: '物品名称',
                dataIndex: 'name',
                key: 'name',
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
                ellipsis: true
            },
            {
                title: '物品数量',
                dataIndex: 'count',
                key: 'count',
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
                ellipsis: true
            },
            {
                title: '物品价格',
                dataIndex: 'price',
                key: 'price',
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
                ellipsis: true
            },
            {
                title: '购买来源',
                dataIndex: 'origin',
                key: 'origin',
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
                ellipsis: true
            },
            {
                title: '购买日期',
                dataIndex: 'dateBuy',
                key: 'dateBuy',
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
                ellipsis: true
            },
            {
                title: '购买者',
                dataIndex: 'person',
                key: 'person',
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
                ellipsis: true
            },
            
        ];
        return (
            <>
                <RightHeader fiststName="花费" secondName="仪表板" thirdName="花费" />
                <div className="expenses-con">
                    <Space style={{ marginBottom: 16 }}>
                        <Button onClick={this.setAgeSort}>Sort age</Button>
                        <Button onClick={this.clearFilters}>Clear filters</Button>
                        <Button onClick={this.clearAll}>Clear filters and sorters</Button>
                    </Space>
                    <Table columns={columns} dataSource={this.state.data} onChange={this.handleChange} />
                </div>
            </>
        )
    }
}
