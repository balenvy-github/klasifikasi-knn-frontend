import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { updateHasilUjiService } from '../../../services/knn';

export default function DatasetUjiPerbarui() {
  const navigate = useNavigate();

  const {
  /* eslint-disable no-unused-vars */
    data, isLoading, isError, error, isSuccess,
  } = useQuery('ujidataset', updateHasilUjiService);

  if (isLoading) {
    return <p>loading ...</p>;
  }
  if (isError) {
    return <p>{`error : ${error}`}</p>;
  }
  if (isSuccess) {
    navigate('/uji-data');
  }

  return (
    <div>
      loading
      ...
    </div>
  //   <div className="content-wrapper">
  //     {/* Content Header (Page header) */}
  //     <section className="content-header">
  //       <div className="container-fluid">
  //         <div className="row mb-2">
  //           <div className="col-sm-6">
  //             <h1>
  //               Uji Data
  //             </h1>
  //           </div>
  //           <div className="col-sm-6">
  //             <ol className="breadcrumb float-sm-right">
  //               <li className="breadcrumb-item"><a href="/#">Home</a></li>
  //               <li className="breadcrumb-item active">Blank Page</li>
  //             </ol>
  //           </div>
  //         </div>
  //       </div>
  //       {/* /.container-fluid */}
  //     </section>
  //     {/* Main content */}
  //     <section className="content">
  //       {/* Default box */}
  //       <div className="card">
  //         <div className="card-header">
  //           <Link to="/uji-data/perbarui">
  //             <button type="button" className="btn btn-primary">Perbarui Uji Data</button>
  //           </Link>
  //         </div>
  //         <div className="card-body">
  //           <div className="row">
  //             <div className="uji-data-old col-md-6">
  //               <h3>Hasil Uji Sebelumnya</h3>
  //             </div>
  //             <div className="uji-data-old col-md-6">
  //               <h3>Hasil Uji Terbaru</h3>
  //               <DatasetUjiTable data={data} />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       {/* /.card */}
  //     </section>
  //     {/* /.content */}
  //   </div>
  );
}
