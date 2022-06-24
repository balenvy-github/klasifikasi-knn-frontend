import React from 'react';
import { Link } from 'react-router-dom';

interface TableProps {
    slug : string;
}

export default function Table(props: TableProps) {
  const { slug } = props;
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Titik Lokasi</th>
            <th>Koordinat</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <Link to={`/udara/${slug}/simpang-2`}>
                {slug}
                {' '}
                Simpang 2
              </Link>
            </td>
            <td>
              72319 712389
            </td>
            <td>
              <Link to={`/udara/${slug}/simpang-2`}>
                <button type="button" className="btn btn-success mr-1">Data Uji</button>
              </Link>
              <button type="button" className="btn btn-primary mr-1">Ubah</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <Link to={`/udara/${slug}/simpang-3`}>
                {slug}
                {' '}
                Simpang 3
              </Link>
            </td>
            <td>
              72319 712389
            </td>
            <td>
              <Link to={`/udara/${slug}/simpang-3`}>
                <button type="button" className="btn btn-success mr-1">Data Uji</button>
              </Link>
              <button type="button" className="btn btn-primary mr-1">Ubah</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <Link to={`/udara/${slug}/simpang-4`}>
                {slug}
                {' '}
                Simpang 4
              </Link>
            </td>
            <td>
              72319 712389
            </td>
            <td>
              <Link to={`/udara/${slug}/simpang-4`}>
                <button type="button" className="btn btn-success mr-1">Data Uji</button>
              </Link>
              <button type="button" className="btn btn-primary mr-1">Ubah</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
