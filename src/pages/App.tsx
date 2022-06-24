import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Dashboard';
import Udara from './Udara';
import NotFound from './NotFound';
import TitikLokasi from './TitikLokasi';
import DataUji from './DataUji';
import FormUdara from './Udara/FormUdara';
import FormTitikLokasi from './TitikLokasi/FormTitikLokasi';
import FormDataUji from './DataUji/FormDataUji';
import Parameter from './Parameter';
import FormParameter from './Parameter/FormParameter';
import Login from './Login';
import RequireAuth from '../components/organisms/LoginForm/RequireAuth';
import Dataset from './Dataset';
import DatasetUji from './DatasetUji';
import Klasifikasi from './Klasifikasi';

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />}>Not Found</Route>
        <Route path="/unauthorized" element={<NotFound />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/udara" element={<Udara />}>
          {/* <Route path=":titikLokasiSlug" element={<TitikLokasi />} /> */}
        </Route>
        <Route path="/udara/:slugLokasi" element={<TitikLokasi />} />
        <Route path="/udara/:slugLokasi/:slugTitik" element={<DataUji />} />
        <Route path="/udara/tambah" element={<FormUdara />} />
        <Route path="/udara/:slugLokasi/tambah" element={<FormTitikLokasi />} />
        <Route path="/udara/:slugLokasi/:slugTitik/tambah" element={<FormDataUji />} />

        <Route element={<RequireAuth allowedRoles="superadmin" />}>
          {/* Parameter */}
          <Route path="/parameter" element={<Parameter />} />
          <Route path="/parameter/tambah" element={<FormParameter form="tambah" />} />
          <Route path="/parameter/:id/ubah" element={<FormParameter form="ubah" />} />
          {/* Parameter  */}

          {/* Dataset */}
          <Route path="/dataset" element={<Dataset menu="main" />} />
          <Route path="/dataset/:id/ubah" element={<Dataset menu="ubah" />} />
          <Route path="/dataset/tambah" element={<Dataset menu="tambah" />} />
          {/* Dataset */}

          {/* Dataset Uji */}
          <Route path="/uji-data" element={<DatasetUji menu="main" />} />
          <Route path="/uji-data/perbarui" element={<DatasetUji menu="perbarui" />} />
          {/* Dataset Uji */}

          {/* Klasifikasi */}
          <Route path="/klasifikasi" element={<Klasifikasi menu="tambah" />} />
          {/* Klasifikasi */}
        </Route>

        {/* login */}
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
