import React from 'react';
import Header from '../../components/organisms/Header';
import Sidebar from '../../components/organisms/Sidebar';
import Main from '../../components/organisms/Main';
import Footer from '../../components/organisms/Footer';

export default function Dashboard() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar activeMenu="Dashboard" />
      <Main title="Dashboard" />
      <Footer />
    </div>
  );
}
