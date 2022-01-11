import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const icon =
    "https://github.com/adrianhajdin/project_cryptoverse/blob/main/src/images/cryptocurrency.png?raw=true";

  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <Avatar src={icon} size="large" />
          <Typography.Title level={2} className="theLogo">
            <Link to="/">Crypto-Nite</Link>
          </Typography.Title>
          {/* <Button className="menuControl">

              </Button> */}
        </div>
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/currencies">Currencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchange">Exchange</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      </nav>
    </div>
  );
};

export default Navbar;
