import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Home,
  Exchanges,
  Currencies,
  Details,
  News,
} from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exchange" element={<Exchanges />} />
              <Route path="/currencies" element={<Currencies />} />
              <Route path="/crypto/:coinId" element={<Details />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <footer className="footer" level={5}>
          <Typography.Title style={{ color: "#fff", textAlign: "center" }}>
            <p>Crypto-Nyte</p>
            <p>All rights reserved</p>
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </footer>
      </div>
    </div>
  );
};

export default App;
