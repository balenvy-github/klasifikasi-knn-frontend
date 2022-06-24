import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../components/organisms/Header';
import Sidebar from '../../../components/organisms/Sidebar';
import Footer from '../../../components/organisms/Footer';
import Form from './Form';

export default function FormTitikLokasi() {
  const { slugLokasi, slugTitik } = useParams();

  return (
    <div className="wrapper">
      <Header />
      <Sidebar activeMenu="Udara" />
      <Form slugLokasi={slugLokasi!} slugTitik={slugTitik!} />
      <Footer />
    </div>
  );
}
