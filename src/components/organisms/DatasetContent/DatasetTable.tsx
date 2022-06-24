import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { DatasetTypes } from '../../../services/data-types';
import { getDatasetService } from '../../../services/dataset';

function DatasetTable() {
  const {
    data, isLoading, isError, error,
  } = useQuery('dataset', getDatasetService);

  if (isLoading) {
    return <p>loading ...</p>;
  }
  if (isError) {
    return <p>{`error : ${error}`}</p>;
  }

  return (
    <div className="table-responsive">
      <table className="table">
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
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data?.result.map((item : DatasetTypes, index: number) => (
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
              <td>
                <Link to={`/dataset/${item.id}/ubah`}>
                  <button type="button" className="btn btn-primary mr-1">Ubah</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DatasetTable;
