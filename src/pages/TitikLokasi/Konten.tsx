import React from 'react';
import { Link } from 'react-router-dom';
import Table from './Table';

interface KontenProps {
  title: string;
  slug: string;
}

export default function Konten(props: KontenProps) {
  const { title, slug } = props;

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>
                {title}
                {' '}
                /
                {' '}
                {slug}
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
            <Link to="/udara">
              <button type="button" className="btn btn-warning mr-1">
                <i className="fas fa-arrow-alt-circle-left" />
                <span className="ml-1">Kembali</span>
              </button>
            </Link>
            |
            <Link to={`/udara/${slug}/tambah`}>
              <button type="button" className="btn btn-primary ml-1">Tambah Data</button>
            </Link>
          </div>
          <div className="card-body">
            <Table slug={slug} />
          </div>
        </div>
        {/* /.card */}
      </section>
      {/* /.content */}
    </div>
  );
}
