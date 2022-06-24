import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { postParameterService } from '../../../services/parameter';
import { ParameterInputTypes } from '../../../services/data-types';

export default function Form() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ParameterInputTypes>();

  const submitParameter = async (data: ParameterInputTypes) => {
    const response = await postParameterService(data);
    if (response.error) {
      toast.error(response.message);
    }
    return response;
  };

  const mutation = useMutation(submitParameter, {
    onSettled: async (data, error : any) => {
      if (data) {
        toast.success('Berhasil menambah data parameter');
        navigate('/parameter');
      }

      if (error) {
        toast.error(error);
      }
    },
  });

  const onSubmit = async (data: ParameterInputTypes) => {
    await mutation.mutate(data);
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6 d-flex">
              <h1>Tambah Data Parameter</h1>
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
              <Link to="/parameter">
                <button type="button" className="btn btn-warning">
                  <i className="fas fa-arrow-alt-circle-left" />
                  <span className="ml-1">Kembali</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="card-body">

            <form>
              <div className="form-group">
                <label>Nama Parameter</label>
                <input
                  type="text"
                  className="form-control col-xl-6"
                  placeholder="Contoh : SO2 .."
                  {...register('parameter', { required: 'parameter harus diisi' })}
                />
                {errors.parameter && <small className="text-danger">{errors.parameter.message}</small> }
              </div>
              <div className="form-group">
                <label>Baku Mutu</label>
                <input
                  type="text"
                  className="form-control col-xl-6"
                  placeholder="Contoh : 99 .."
                  {...register('baku_mutu', { required: 'baku mutu harus diisi' })}
                />
                {errors.baku_mutu && <small className="text-danger">{errors.baku_mutu.message}</small> }
              </div>
              <div className="form-group">
                <label>Satuan</label>
                <input
                  type="text"
                  className="form-control col-xl-6"
                  placeholder="Contoh : μg/Nm3 .."
                  {...register('satuan', { required: 'satuan harus diisi' })}
                />
                {errors.satuan && <small className="text-danger">{errors.satuan.message}</small> }
              </div>
              <button
                type="submit"
                onClick={handleSubmit(onSubmit)}
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                Simpan

              </button>
            </form>

          </div>
        </div>
      </section>
    </div>
  );
}
