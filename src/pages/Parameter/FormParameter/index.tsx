import React from 'react';
import Header from '../../../components/organisms/Header';
import Sidebar from '../../../components/organisms/Sidebar';
import Footer from '../../../components/organisms/Footer';
import Form from './Form';
import FormUbah from './FormUbah';

export default function FormParameter({ form }: {form : string}) {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar activeMenu="Parameter" />
      {
        form === 'tambah' ? <Form /> : <FormUbah />
      }
      <Footer />
    </div>
  );
}
