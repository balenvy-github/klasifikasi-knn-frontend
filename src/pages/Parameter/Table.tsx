import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ParameterTypes } from '../../services/data-types';
import { getParameterService } from '../../services/parameter';

export default function Table() {
  const [parameterList, setParameterList] = useState([]);

  const getParameterList = useCallback(async () => {
    const data = await getParameterService();
    setParameterList(data);
  }, [getParameterService]);

  useEffect(() => {
    getParameterList();
  }, []);
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Parameter</th>
            <th>Baku Mutu</th>
            <th>Satuan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {parameterList.map((item: ParameterTypes, index: number) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                { item.parameter }
              </td>
              <td>
                { item.baku_mutu }
              </td>
              <td>
                { item.satuan }
              </td>
              <td>
                <Link to={`/parameter/${item.id}/ubah`}>
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
