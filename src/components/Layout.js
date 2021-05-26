import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="app">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;