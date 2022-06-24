import Footer from '../../components/organisms/Footer';
import Header from '../../components/organisms/Header';
import KlasifikasiContent from '../../components/organisms/KlasifikasiContent';
import Sidebar from '../../components/organisms/Sidebar';

export default function Klasifikasi({ menu }: {menu : string}) {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar activeMenu="Klasifikasi" />
      {menu === 'tambah' ? <KlasifikasiContent /> : 'error' }
      <Footer />
    </div>
  );
}
