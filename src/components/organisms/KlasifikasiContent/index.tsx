import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { DatasetTypes } from '../../../services/data-types';
import { klasifikasiService } from '../../../services/knn';
import KlasifikasiForm from './KlasifikasiForm';

function KlasifikasiContent() {
  const [kategori, setKategori] = useState('');
  const { mutateAsync } = useMutation(klasifikasiService, {
    onSettled: async (data : any, err : any) => {
      if (data) {
        if (data.error === 1) {
          toast.error(data.message);
        } else {
          setKategori(data.data.data.kategori);
          toast.success('Berhasil melakukan klasifikasi');
        }
      }

      if (err) {
        toast.error(err);
      }
    },
  });

  const onFormSubmit = async (data : DatasetTypes) => {
    await mutateAsync(data);
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6 d-flex">
              <h1>
                Klasifikasi Data
              </h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="/#">Home</a></li>
                <li className="breadcrumb-item active">Blank Page</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="card">
          <div className="card-header" />
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <KlasifikasiForm onFormSubmit={onFormSubmit} />
              </div>
              <div className="col-md-6">
                <div className="form-submit">
                  <label>Hasil Klasifikasi</label>
                  <h1 className="display-4">{kategori}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default KlasifikasiContent;
