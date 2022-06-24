export interface ParameterTypes {
    id: number;
    parameter: string;
    baku_mutu:string;
    satuan:string;
    pengujian: boolean;
    kode_pengujian:string;
}

export interface LoginTypes {
    email: string;
    password: string;
}

export interface UserTypes {
    id: number;
    nama: string;
    email: string;
    level: string;
}

export interface JWTPayloadTypes {
    user: UserTypes;
    iat: number;
    exp: number;
}

export interface ParameterInputTypes {
    parameter: string;
    baku_mutu: string;
    satuan: string;
  }

export interface DatasetTypes {
    id?: number;
    kategori?: string;
    no2: number;
    o3: number;
    pm10: number;
    so2: number;
    co: number
  }

export interface DatasetUjiProps {
    akurasi: string;
    jumlah_data: number;
    jumlah_data_test: number;
    jumlah_data_test_benar: number;
    jumlah_data_test_salah: number;
    jumlah_data_train: number;
}

export interface DatasetUjiSalahTypes {
    id?: number;
    no2: number;
    o3: number;
    pm10: number;
    so2: number;
    co: number
    kategori?: string;
    knn: string;
}
