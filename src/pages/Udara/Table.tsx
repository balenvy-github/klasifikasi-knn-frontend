import React from 'react';
import { Link } from 'react-router-dom';

export default function Table() {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Lokasi</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <Link to="/udara/sungai-kunjang-1">
                Sungai Kunjang
              </Link>
            </td>
            <td>
              <Link to="/udara/sungai-kunjang-1">
                <button type="button" className="btn btn-success mr-1">Titik Pantau</button>
              </Link>
              <button type="button" className="btn btn-primary mr-1">Ubah</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <Link to="/udara/sungai-kunjang-2">
                Sungai Kunjang2
              </Link>
            </td>
            <td>
              <Link to="/udara/sungai-kunjang-2">
                <button type="button" className="btn btn-success mr-1">Titik Pantau</button>
              </Link>
              <button type="button" className="btn btn-primary mr-1">Ubah</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <Link to="/udara/sungai-kunjang-3">
                Sungai Kunjang3
              </Link>
            </td>
            <td>
              <Link to="/udara/sungai-kunjang-3">
                <button type="button" className="btn btn-success mr-1">Titik Pantau</button>
              </Link>
              <button type="button" className="btn btn-primary mr-1">Ubah</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
