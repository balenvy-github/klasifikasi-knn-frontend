import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
// import HasilUjiParameter from './HasilUjiParameter';
import HasilUjiParameter from '../../../components/molecules/HasilUjiParameter';

interface FormTitikLokasiProps {
    slugLokasi: string;
    slugTitik: string;
}

export default function Form(props: FormTitikLokasiProps) {
  const { slugLokasi, slugTitik } = props;

  const [selectMonth, setSelectMonth] = useState(null);
  const [ujiComponents, setUjiComponents] = useState<any>([]);

  const monthOption = [
    {
      value: 'januari', label: 'januari',
    },
    {
      value: 'februari', label: 'februari',
    },
    {
      value: 'maret', label: 'maret',
    },
    {
      value: 'april', label: 'april',
    },
    {
      value: 'mei', label: 'mei',
    },
    {
      value: 'juni', label: 'juni',
    },
    {
      value: 'juli', label: 'juli',
    },
    {
      value: 'agustus', label: 'agustus',
    },
    {
      value: 'september', label: 'september',
    },
    {
      value: 'oktober', label: 'oktober',
    },
    {
      value: 'november', label: 'november',
    },
    {
      value: 'desember', label: 'desember',
    },
  ];

  const handleChange = (option: any) => {
    setSelectMonth(option);
  };

  const deleteHandeler = (removeId: any) => {
    setUjiComponents((ids: any) => ids.filter((id: any) => id !== removeId));
  };

  const addUjiComponents = () => {
    const randNumber = Math.floor(Math.random() * 100000);
    setUjiComponents((ids: any) => [...ids, randNumber]);
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6 d-flex">
              <h1>
                {slugLokasi}
                {' '}
                /
                {' '}
                {slugTitik}
                {' '}
                / Tambah Data Uji
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
          <div className="card-header">
            <div className="">
              <Link to={`/udara/${slugLokasi}/${slugTitik}`}>
                <button type="button" className="btn btn-warning">
                  <i className="fas fa-arrow-alt-circle-left" />
                  <span className="ml-1">Kembali</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="card-body">

            <form className="row justify-content-between">
              <div className="col-md-4">
                <div className="form-group">
                  <label>Tahun</label>
                  <input type="text" className="form-control" placeholder="Contoh : 2020 .." />
                </div>
                <div className="form-group">
                  <label>Bulan</label>
                  <Select
                    defaultValue={selectMonth}
                    onChange={handleChange}
                    options={monthOption}
                  />
                </div>
                <button type="button" className="btn btn-primary">Simpan</button>
              </div>
              <div id="hasiluji" className="col-md-7">
                <div className="row">
                  <div className="col-md-5">
                    <div className="form-group">
                      <label>Parameter</label>
                      <select name="parameter" className="form-control">
                        <option value="">pilih parameter</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <label>Hasil Uji</label>
                      <input type="text" className="form-control" placeholder="Contoh: 10" />
                    </div>
                  </div>
                </div>
                {ujiComponents.map((id: any) => (
                  <HasilUjiParameter key={id} deleted={() => deleteHandeler(id)} />
                ))}
                <button onClick={() => addUjiComponents()} type="button" className="btn btn-secondary">Tambah Parameter</button>
              </div>
            </form>

          </div>
        </div>
      </section>
    </div>
  );
}
