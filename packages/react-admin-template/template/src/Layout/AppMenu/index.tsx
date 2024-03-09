import { HomeOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];
interface MenuItems {
  label: React.ReactNode;
  key?: React.Key | null;
  icon?: React.ReactNode;
  children?: MenuItem[];
  type?: 'group';
}
const menuItems: MenuItems[] = [
  {
    label: '首页',
    key: '/home',
    icon: <HomeOutlined />,
  },
  {
    label: '测试',
    key: '/app/home',
    children: [
      {
        label: 'home/demo1',
        key: '/app/home/demo1',
      },
      {
        label: 'home/demo2',
        key: '/app/home/demo2',
      },
    ],
  },
];
export default menuItems;
