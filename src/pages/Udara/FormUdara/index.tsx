import React from 'react';
import Header from '../../../components/organisms/Header';
import Sidebar from '../../../components/organisms/Sidebar';
import Footer from '../../../components/organisms/Footer';
import Form from './Form';

export default function Udara() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar activeMenu="Udara" />
      <Form />
      <Footer />
    </div>
  );
}
