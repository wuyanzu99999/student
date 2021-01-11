import { Menu } from 'antd';
import { IdcardOutlined,
   SettingOutlined,
   SolutionOutlined,
   InsertRowRightOutlined,
   ReadOutlined,
   MoneyCollectOutlined,
   ScheduleOutlined,
   ProfileOutlined,
   PoundOutlined,
   SendOutlined,
   AppstoreOutlined ,
   TableOutlined,
   SplitCellsOutlined
  } from '@ant-design/icons';
import React, { Component } from 'react';
import "./index.css";
import {Link} from 'react-router-dom'
const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
export default () => {
  const [openKeys, setOpenKeys] = React.useState(['sub1']);
  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ backgroundColor: "#f7f7fa", fontSize: 16 }}>
      <p className="title">主菜单</p>
      <Menu.Item key="14" icon={<AppstoreOutlined /> }><Link to="/DashBord">仪表盘</Link></Menu.Item>
      <SubMenu key="sub1" icon={<SolutionOutlined />} title="学生">
        <Menu.Item key="1">  学生名单</Menu.Item>
        <Menu.Item key="2"> 学生详细信息</Menu.Item>
        <Menu.Item key="3">  添加学生信息</Menu.Item>
        <Menu.Item key="4"> 修改学生信息 </Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<IdcardOutlined />} title="老师">
        <Menu.Item key="5">
        <Link to="/TeacherList">
          教师名单
          </Link>
          </Menu.Item>
        {/* <Menu.Item key="6"><Link to="/TeacherView">教师详细信息</Link></Menu.Item> */}
        <Menu.Item key="7"><Link to="/TeacherAdd">添加教师信息</Link></Menu.Item>
        {/* <Menu.Item key="8"><Link to="/TeacherEdit">修改教师信息</Link></Menu.Item> */}
      </SubMenu>
      <SubMenu key="sub3" icon={<InsertRowRightOutlined />} title="院系">
        <Menu.Item key="9">院系</Menu.Item>
        <Menu.Item key="10">添加院系</Menu.Item>
        <Menu.Item key="11">编辑院系</Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" icon={<ReadOutlined />} title="科目">
        <Menu.Item key="12">科目列表</Menu.Item>
        <Menu.Item key="13">科目添加</Menu.Item>
        <Menu.Item key="14">科目编辑</Menu.Item>
      </SubMenu>
      <p className="title">管理</p>
      <SubMenu key="sub5" icon={<MoneyCollectOutlined />} title="账目">
        <Menu.Item key="15"> <Link to="/FeesCollection">收费标准</Link> </Menu.Item>
        <Menu.Item key="16"> <Link to="/Expenses">花费</Link></Menu.Item>
        <Menu.Item key="17"> <Link to="/Salary">薪水</Link> </Menu.Item>
        <Menu.Item key="18"> <Link to="/AddFees">加费</Link> </Menu.Item>
        <Menu.Item key="19"> <Link to="/AddExpenses">增加费用 </Link></Menu.Item>
        <Menu.Item key="20"> <Link to="/AddSalary">加薪 </Link></Menu.Item>
      </SubMenu>
      <Menu.Item key="21" icon={<SendOutlined />}>假日</Menu.Item>
      <Menu.Item key="22" icon={<PoundOutlined />}>费用</Menu.Item>
      <Menu.Item key="23" icon={<ProfileOutlined />}>考试清单</Menu.Item>
      <Menu.Item key="24" icon={<ScheduleOutlined />}> <Link to="/BigEvent">大事记</Link></Menu.Item>
      <Menu.Item key="25" icon={<TableOutlined />}>时间表</Menu.Item>
      <Menu.Item key="26" icon={<SplitCellsOutlined />}>图书馆</Menu.Item>
      <p className="title">页数</p>
      <SubMenu key="sub6" icon={<SettingOutlined />} title="认证方式">
        <Menu.Item key="27"><Link to="/Login">登录</Link></Menu.Item>
        <Menu.Item key="28">忘记密码</Menu.Item>
      </SubMenu>
    </Menu>
  );
};
