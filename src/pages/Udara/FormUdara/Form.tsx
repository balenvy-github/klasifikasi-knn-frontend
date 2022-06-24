import React from 'react';
import { Link } from 'react-router-dom';

export default function Form() {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6 d-flex">
              <h1>Tambah Data Lokasi Udara</h1>
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
              <Link to="/udara">
                <button type="button" className="btn btn-warning">
                  <i className="fas fa-arrow-alt-circle-left" />
                  <span className="ml-1">Kembali</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="card-body">

            <form>
              <div className="form-group">
                <label>Lokasi</label>
                <input type="text" className="form-control col-xl-6" placeholder="Contoh : Sungai Kunjang .." />
              </div>
              <button type="button" className="btn btn-primary">Simpan</button>
            </form>

          </div>
        </div>
      </section>
    </div>
  );
}
