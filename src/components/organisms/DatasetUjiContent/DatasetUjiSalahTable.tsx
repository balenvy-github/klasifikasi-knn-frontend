import React from 'react';
import { DatasetUjiSalahTypes } from '../../../services/data-types';

function DatasetUjiSalahTable({ data } : {data: Array<DatasetUjiSalahTypes>}) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>
              PM
              <sub>10</sub>
            </th>
            <th>
              SO
              <sub>2</sub>
            </th>
            <th>CO</th>
            <th>
              O
              <sub>3</sub>
            </th>
            <th>
              NO
              <sub>2</sub>
            </th>
            <th>Kategori</th>
            <th>KNN</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index: number) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                { item.pm10 }
              </td>
              <td>
                { item.so2 }
              </td>
              <td>
                { item.co }
              </td>
              <td>
                { item.o3 }
              </td>
              <td>
                { item.no2 }
              </td>
              <td>
                { item.kategori }
              </td>
              <td className="text-danger">
                { item.knn }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DatasetUjiSalahTable;
