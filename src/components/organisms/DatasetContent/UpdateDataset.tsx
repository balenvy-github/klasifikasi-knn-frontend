import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DatasetTypes } from '../../../services/data-types';
import { getDatasetByIdService, updateDatasetService } from '../../../services/dataset';
import DatasetForm from './DatasetForm';

function UpdateDataset() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data, error, isError, isLoading,
  } = useQuery(['dataset', { id }], getDatasetByIdService);

  const { mutateAsync } = useMutation(updateDatasetService, {
    onSettled: async (formData, err : any) => {
      if (formData) {
        queryClient.invalidateQueries('dataset');
      }

      if (err) {
        toast.error(err);
      }
    },
  });

  //   enable typings
  const onFormSubmit = async (formData: DatasetTypes) => {
    await mutateAsync({ id, formData });
    toast.success('Berhasil mengubah dataset');
    navigate('/dataset');
  };

  if (isLoading) {
    return <p>loading ...</p>;
  }
  if (isError) {
    return <p>{`error : ${error}`}</p>;
  }

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6 d-flex">
              <h1>
                Ubah Dataset
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
            <DatasetForm defaultValues={data} onFormSubmit={onFormSubmit} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default UpdateDataset;
