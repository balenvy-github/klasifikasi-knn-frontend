import React from 'react';

interface HasilUjiParameterProps {
  deleted: () => void;
}

export default function HasilUjiParameter(props : HasilUjiParameterProps) {
  const { deleted } = props;
  return (
    <div className="row">
      <div className="col-md-5">
        <div className="form-group">
          <label>Parameter</label>
          <select name="parameter" className="form-control">
            <option value="">pilih parameter</option>
          </select>
        </div>
      </div>
      <div className="col-md-5">
        <div className="form-group">
          <label>Hasil Uji</label>
          <div className="d-flex">
            <input type="text" className="form-control" placeholder="Contoh: 10" />
            <button type="button" className="btn btn-danger ml-2" onClick={deleted}>
              <i className="fas fa-times" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
