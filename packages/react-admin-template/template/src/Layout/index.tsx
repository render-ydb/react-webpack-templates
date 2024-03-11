import { Suspense, useState } from "react";
import { MenuProps, ConfigProvider } from "antd";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Layout from "@x.render/render-react-admin-layout";
import AppUser from "./AppUser";
import menuItems from "./AppMenu";
import LogoImg from "./logo.png";
import "@x.render/render-react-admin-layout/dist/index.css";

const AppLayout = () => {
  const [colorPrimary, setColorPrimary] = useState("");
  const navigatge = useNavigate();
  const location = useLocation();
  const handleMenuClick: MenuProps["onClick"] = (menuInfo) => {
    const { key } = menuInfo;
    const { pathname } = location;
    if (key !== pathname) {
      navigatge(key);
    }
  };

  return (
    <Layout
      logoUrl={LogoImg}
      title="render"
      renderMenu={AppUser}
      menuItems={menuItems}
      menuItemClick={handleMenuClick}
      themeColorChange={(color: string) => {
        setColorPrimary(color);
      }}
    >
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: colorPrimary,
          },
        }}
      >
        <Suspense>
          <Outlet />
        </Suspense>
      </ConfigProvider>
    </Layout>
  );
};
export default AppLayout;
