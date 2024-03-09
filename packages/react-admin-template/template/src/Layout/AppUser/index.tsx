import { Avatar, Dropdown, MenuProps } from 'antd';
import { getUserInfo } from '../../store/userSlice';
import { useAppDispatch, useAppSelector } from '../../store/typedHook';
import { UserOutlined, PoweroffOutlined } from '@ant-design/icons';
import { useEffect } from 'react';

const menuItems: MenuProps['items'] = [
  {
    key: 'personCenter',
    icon: <UserOutlined />,
    label: '个人中心',
  },
  {
    key: 'logout',
    icon: <PoweroffOutlined />,
    label: '退出登录',
  },
];

const AppUser = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.user);
  const { username, avatar } = userInfo;
  console.log(userInfo);

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  const handleMenuItemClick = (menuInfo: any) => {
    console.log(menuInfo.key);
  };

  return (
    <Dropdown
      className=""
      trigger={['hover']}
      menu={{ items: menuItems, onClick: handleMenuItemClick }}
    >
      <div style={{ cursor: 'pointer' }}>
        {avatar && <Avatar src={avatar} />}
        {username && <span>{userInfo.username}</span>}
      </div>
    </Dropdown>
  );
};

export default AppUser;
