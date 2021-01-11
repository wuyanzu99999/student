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
import { Link,Route } from "react-router-dom";
import "./index.css";
import SubjectsList from "../../pages/SubjectsList";



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
    <div>
      <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ backgroundColor: "#f7f7fa", fontSize: 16 }}>
        <p className="title">主菜单</p>
        <SubMenu key="sub1" icon={<MailOutlined />} title="学生">
          <Menu.Item key="1">  学生名单</Menu.Item>
          <Menu.Item key="2"> 学生详细信息</Menu.Item>
          <Menu.Item key="3">  添加学生信息</Menu.Item>
          <Menu.Item key="4"> 修改学生信息 </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="老师">
          <Menu.Item key="5">教师名单</Menu.Item>
          <Menu.Item key="6">教师详细信息</Menu.Item>
          <Menu.Item key="7">添加教师信息</Menu.Item>
          <Menu.Item key="8">修改教师信息</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<SettingOutlined />} title="院系">
          <Menu.Item key="9">院系</Menu.Item>
          <Menu.Item key="10">添加院系</Menu.Item>
          <Menu.Item key="11">编辑院系</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="科目">
          <Menu.Item key="12">
            <Link to="/SubjectsList">科目列表</Link>
            </Menu.Item>
          <Menu.Item key="13">
          <Link to="/SubjectsAdd"> 科目添加</Link>
            </Menu.Item>
          <Menu.Item key="14">
          <Link to="/SubjectsEdit">  科目编辑</Link>
          </Menu.Item>
        </SubMenu>
        <p className="title">管理</p>
        <SubMenu key="sub5" icon={<MailOutlined />} title="账目">
          <Menu.Item key="13">  收费标准</Menu.Item>
          <Menu.Item key="14"> 花费</Menu.Item>
          <Menu.Item key="15">  薪水</Menu.Item>
          <Menu.Item key="16"> 加费 </Menu.Item>
          <Menu.Item key="16"> 增加费用 </Menu.Item>
          <Menu.Item key="16"> 加薪 </Menu.Item>
        </SubMenu>
        <SubMenu key="sub6" icon={<AppstoreOutlined />} title="假日"><Link to="/Holiday"></Link>
       
        </SubMenu>
        <SubMenu key="sub7" icon={<SettingOutlined />} title="费用"></SubMenu>
        <SubMenu key="sub8" icon={<SettingOutlined />} title="考试清单"></SubMenu>
        <SubMenu key="sub9" icon={<SettingOutlined />} title="大事记"></SubMenu>
        <SubMenu key="sub10" icon={<SettingOutlined />} title="时间表"></SubMenu>
        <SubMenu key="sub11" icon={<SettingOutlined />} title="图书馆"></SubMenu>
        <p className="title">页数</p>
        <SubMenu key="sub12" icon={<SettingOutlined />} title="认证方式">
          <Menu.Item key="142">登录</Menu.Item>
          <Menu.Item key="15">忘记密码</Menu.Item>
        </SubMenu>
      </Menu>
     
    </div>
  );

};
