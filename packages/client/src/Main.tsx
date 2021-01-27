import React from 'react';
import { Layout } from 'antd';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function Main() {
  return (
    <Layout className="layout">
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
}

export default Main;
