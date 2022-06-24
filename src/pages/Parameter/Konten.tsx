import React from 'react';
import { Link } from 'react-router-dom';
import Table from './Table';

interface KontenProps {
  title: string;
}

export default function Konten(props: KontenProps) {
  const { title } = props;

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>
                {title}
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
        {/* /.container-fluid */}
      </section>
      {/* Main content */}
      <section className="content">
        {/* Default box */}
        <div className="card">
          <div className="card-header">
            <Link to="/parameter/tambah">
              <button type="button" className="btn btn-primary">Tambah Data</button>
            </Link>
          </div>
          <div className="card-body">
            <Table />
          </div>
        </div>
        {/* /.card */}
      </section>
      {/* /.content */}
    </div>
  );
}
