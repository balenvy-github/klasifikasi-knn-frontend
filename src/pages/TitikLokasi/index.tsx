import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/organisms/Header';
import Sidebar from '../../components/organisms/Sidebar';
import Footer from '../../components/organisms/Footer';
import Konten from './Konten';

export default function TitikLokasi() {
  const params = useParams();
  const slug = params.slugLokasi!;

  return (
    <div className="wrapper">
      <Header />
      <Sidebar activeMenu="Udara" />
      <Konten title="Titik Lokasi Koordinat" slug={slug} />
      <Footer />
    </div>
  );
}
