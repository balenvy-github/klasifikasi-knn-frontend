import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DatasetTypes } from '../../../services/data-types';
import { createDatasetService } from '../../../services/dataset';
import DatasetForm from './DatasetForm';

function CreateDataset() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(createDatasetService, {
    onSettled: async (data, err : any) => {
      if (data) {
        queryClient.invalidateQueries('dataset');
        if (data.error === 1) {
          toast.error(data.message);
        } else {
          navigate('/dataset');
          toast.success('Berhasil menambah dataset');
        }
      }

      if (err) {
        toast.error(err);
      }
    },
  });

  const onFormSubmit = async (data : DatasetTypes) => {
    await mutateAsync([data]);
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6 d-flex">
              <h1>
                Tambah Dataset
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
      </section>
      <section className="content">
        <div className="card">
          <div className="card-header">
            <div className="">
              <Link to="/dataset">
                <button type="button" className="btn btn-warning">
                  <i className="fas fa-arrow-alt-circle-left" />
                  <span className="ml-1">Kembali</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="card-body">
            <DatasetForm onFormSubmit={onFormSubmit} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CreateDataset;
