import React from 'react';
import Header from '../../components/organisms/Header';
import Sidebar from '../../components/organisms/Sidebar';
import Footer from '../../components/organisms/Footer';
// import Main from '../../components/organisms/Main';
import Konten from './Konten';

export default function Parameter() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar activeMenu="Parameter" />
      <Konten title="Parameter Data Uji" />
      <Footer />
    </div>
  );
}
