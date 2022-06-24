import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getHasilUjiDataService, updateHasilUjiService } from '../../../services/knn';
import DatasetUjiSalahTable from './DatasetUjiSalahTable';
import DatasetUjiTable from './DatasetUjiTable';

export default function DatasetUjiContent() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(updateHasilUjiService, {
    onSettled: async (data : any, err : any) => {
      if (data) {
        queryClient.invalidateQueries('ujidata');
        if (data.error === 1) {
          toast.error(data.message);
        } else {
          navigate('/uji-data');
          toast.success('Berhasil memperbarui uji data');
        }
      }

      if (err) {
        toast.error(err);
      }
    },
  });

  const {
    data: dataTable, isLoading, isError, error,
  } = useQuery('ujidata', getHasilUjiDataService);

  if (isLoading) {
    return <p>loading ...</p>;
  }

  if (isError) {
    return <p>{`error : ${error}`}</p>;
  }

  const onFormSubmit = async (data : any) => {
    await mutateAsync(data);
  };

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>
                Uji Data
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
        {/* /.container-fluid */}
      </section>
      {/* Main content */}
      <section className="content">
        {/* Default box */}
        <div className="card">
          <div className="card-header">
            <button type="button" onClick={onFormSubmit} className="btn btn-primary">
              Perbarui Uji Data
            </button>
            {/* <Link to="/uji-data/perbarui" /> */}
          </div>
          <div className="card-body">
            <div className="row">
              <div className="uji-data-old col-md-6">
                <h3>Hasil Uji Terakhir</h3>
                <DatasetUjiTable data={dataTable.data} />
              </div>
            </div>
            <hr />
            <div className="uji-data-old col-md-12">
              <h3>Klasifikasi Salah</h3>
              <DatasetUjiSalahTable data={dataTable.data.hasilujisalahs} />
            </div>
          </div>
        </div>
        {/* /.card */}
      </section>
      {/* /.content */}
    </div>
  );
}
