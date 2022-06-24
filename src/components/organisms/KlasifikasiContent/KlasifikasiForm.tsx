import React from 'react';
import { useForm } from 'react-hook-form';
import { DatasetTypes } from '../../../services/data-types';

// enable typings
function KlasifikasiForm({ defaultValues, onFormSubmit } : any) {
  const {
    register, handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DatasetTypes>();

  const onSubmit = handleSubmit((data) => {
    onFormSubmit(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>
          PM
          <sub>10</sub>
        </label>
        <input
          type="text"
          className="form-control col-xl-8"
          placeholder="Contoh : 123 .."
          {...register('pm10', { required: 'data harus diisi' })}
          defaultValue={defaultValues?.data?.pm10}
        />
        {errors.pm10 && <small className="text-danger">{errors.pm10.message}</small> }
      </div>
      <div className="form-group">
        <label>
          SO
          <sub>2</sub>
        </label>
        <input
          type="text"
          className="form-control col-xl-8"
          placeholder="Contoh : 99 .."
          {...register('so2', { required: 'data wajib diisi' })}
          defaultValue={defaultValues?.data?.so2}
        />
        {errors.so2 && <small className="text-danger">{errors.so2.message}</small> }
      </div>
      <div className="form-group">
        <label>CO</label>
        <input
          type="text"
          className="form-control col-xl-8"
          placeholder="Contoh : 99 .."
          {...register('co', { required: 'data harus diisi' })}
          defaultValue={defaultValues?.data?.co}
        />
        {errors.co && <small className="text-danger">{errors.co.message}</small> }
      </div>
      <div className="form-group">
        <label>
          O
          <sub>3</sub>
        </label>
        <input
          type="text"
          className="form-control col-xl-8"
          placeholder="Contoh : 99 .."
          {...register('o3', { required: 'data wajib diisi' })}
          defaultValue={defaultValues?.data?.o3}
        />
        {errors.o3 && <small className="text-danger">{errors.o3.message}</small> }
      </div>
      <div className="form-group">
        <label>
          NO
          <sub>2</sub>
        </label>
        <input
          type="text"
          className="form-control col-xl-8"
          placeholder="Contoh : 99 .."
          {...register('no2', { required: 'data wajib diisi' })}
          defaultValue={defaultValues?.data?.no2}
        />
        {errors.no2 && <small className="text-danger">{errors.no2.message}</small> }
      </div>
      <button
        type="submit"
        // onClick={handleSubmit(onSubmit)}
        className="btn btn-primary"
        disabled={isSubmitting}
      >
        Klasifikasi
      </button>
    </form>
  );
}

export default KlasifikasiForm;
