import { useEffect, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AppstoreAddOutlined,
  UserOutlined,
  LineChartOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Dropdown } from 'antd';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;



const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate()
  const location = useLocation()

  const token = localStorage.getItem("token")
  const userData = JSON.parse(localStorage.getItem("auth"))
  useEffect(() => {
    if(!token) {
      navigate("/login")
    }
  },[])

  const handleLogout = () => {
    navigate("/login")
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
  }

  const items = [
    {
      key: '1',
      label: "Đăng xuẩt",
      onClick: handleLogout
    },
  ];
  return (
    <Layout className='h-screen'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          items={[
            {
              key: '/admin',
              icon: <LineChartOutlined />,
              label:<Link to="/admin">Thống kê</Link>
              ,
            },
            {
              key: '/admin/customer',
              icon: <UserOutlined />,
              label: <Link to="/admin/customer?page=1&limit=10">Khách hàng</Link>,
            },
            {
              key: '/admin/service',
              icon: <AppstoreAddOutlined />,
              label: <Link to="/admin/service">Dịch Vụ</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div className='flex justify-between items-center pr-5'>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <div className='flex items-center gap-2.5'>
              <p className='font-medium'>{userData?.name}</p>
              <Dropdown menu={{ items }} placement="bottom" arrow>
                  <Button className='w-12 h-12 bg-slate-400 rounded-full'></Button>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;