import React from 'react';
import { Link } from 'react-router-dom';

export default function Table() {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>No Uji</th>
            <th>Tahun</th>
            <th>Bulan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/udara/titik-pantau/slug">
                NOUJI 1 2
              </Link>
            </td>
            <td>2022</td>
            <td>Januari</td>
            <td>
              <button type="button" className="btn btn-success">Detail</button>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/udara/titik-pantau/slug2">
                NOUJI 2
              </Link>
            </td>
            <td>2022</td>
            <td>Februari</td>
            <td>
              <button type="button" className="btn btn-success">Detail</button>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/udara/titik-pantau/slug3">
                NOUJI 3
              </Link>
            </td>
            <td>2022</td>
            <td>Maret</td>
            <td>
              <button type="button" className="btn btn-success">Detail</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
