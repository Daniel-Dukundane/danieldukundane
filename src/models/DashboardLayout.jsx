/**
 * @author: Daniel Dukundane
 */
import { Layout, Menu, Breadcrumb, Space } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import "../styles/dashboard-layout.css"
import { PurchaseBillsForm } from './Form';
import { LoadingAnalytics } from './LoadingAnalytics';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const DashboardLayout = () => {

    const [collapse, setcollapsed] = useState(false)

    const onCollapse = () => setcollapsed( !collapse)

    const templatedata = [
        {
          key: '1',
          firstName: 'Daniel',
          lastName: 'Dukundane',
          age: 22,
          address: 'Toronto',
          tags: ['perfect', 'entrepreneur'],
        },
        {
          key: '2',
          firstName: 'Dorcas',
          lastName: 'Mugisha',
          age: 43,
          address: 'New york',
          tags: ['cool','athlete'],
        },
        {
          key: '3',
          firstName: 'Doanl',
          lastName: 'Trump',
          age: 52,
          address: 'London',
          tags: ['perfect', 'baller'],
        },
      ];

    return (
      <Layout style={{ minHeight: '100vh' }}>
        
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>BILLS</Breadcrumb.Item>
              <Breadcrumb.Item>BILLING SERVICE</Breadcrumb.Item>
            </Breadcrumb>
           
                {/* <CustomizedTable data={templatedata} /> */}

                <Space direction="horizontal">
                    <PurchaseBillsForm />

                    <LoadingAnalytics />
                </Space>

          </Content>
         
        </Layout>
      </Layout>
    );
}