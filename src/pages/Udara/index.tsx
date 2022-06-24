import React from 'react';
import Header from '../../components/organisms/Header';
import Sidebar from '../../components/organisms/Sidebar';
import Footer from '../../components/organisms/Footer';
// import Main from '../../components/organisms/Main';
import Konten from './Konten';

export default function Udara() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar activeMenu="Udara" />
      <Konten title="Udara" />
      <Footer />
    </div>
  );
}
