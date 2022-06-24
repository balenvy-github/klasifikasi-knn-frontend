import DatasetUjiContent from '../../components/organisms/DatasetUjiContent';
import DatasetUjiPerbarui from '../../components/organisms/DatasetUjiContent/DatasetUjiPerbarui';
import Footer from '../../components/organisms/Footer';
import Header from '../../components/organisms/Header';
import Sidebar from '../../components/organisms/Sidebar';

export default function DatasetUji({ menu }: {menu : string}) {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar activeMenu="Uji Data" />
      {menu === 'main' ? <DatasetUjiContent /> : <DatasetUjiPerbarui /> }
      <Footer />
    </div>
  );
}
