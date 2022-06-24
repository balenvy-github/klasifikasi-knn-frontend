import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/organisms/Header';
import Sidebar from '../../components/organisms/Sidebar';
import Footer from '../../components/organisms/Footer';
import Konten from './Konten';

export default function DataUji() {
  const { slugLokasi, slugTitik } = useParams();

  return (
    <div className="wrapper">
      <Header />
      <Sidebar activeMenu="Udara" />
      <Konten title="Data Uji" slugLokasi={slugLokasi!} slugTitik={slugTitik!} />
      <Footer />
    </div>
  );
}
