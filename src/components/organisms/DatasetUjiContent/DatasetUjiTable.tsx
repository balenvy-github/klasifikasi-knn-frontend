import React from 'react';
import { DatasetUjiProps } from '../../../services/data-types';

function DatasetUjiTable({ data } : {data: DatasetUjiProps}) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Keterangan</th>
            <th>Hasil</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jumlah Data</td>
            <td>{data.jumlah_data}</td>
          </tr>
          <tr>
            <td>Data Latih</td>
            <td>{data.jumlah_data_train}</td>
          </tr>
          <tr>
            <td>Data Uji</td>
            <td>{data.jumlah_data_test}</td>
          </tr>
          <tr>
            <td>Data Uji Benar</td>
            <td>{data.jumlah_data_test_benar}</td>
          </tr>
          <tr>
            <td>Data Uji Salah</td>
            <td>{data.jumlah_data_test_salah}</td>
          </tr>
          <tr>
            <td>Akurasi Data</td>
            <td>{data.akurasi}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DatasetUjiTable;
