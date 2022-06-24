import DatasetContent from '../../components/organisms/DatasetContent';
import CreateDataset from '../../components/organisms/DatasetContent/CreateDataset';
import UpdateDataset from '../../components/organisms/DatasetContent/UpdateDataset';
import Footer from '../../components/organisms/Footer';
import Header from '../../components/organisms/Header';
import Sidebar from '../../components/organisms/Sidebar';

export default function Dataset({ menu }: {menu : string}) {
  let component;
  if (menu === 'main') {
    component = <DatasetContent />;
  } else if (menu === 'ubah') {
    component = <UpdateDataset />;
  } else if (menu === 'tambah') {
    component = <CreateDataset />;
  } else {
    component = 'error';
  }
  return (
    <div className="wrapper">
      <Header />
      <Sidebar activeMenu="Dataset" />
      {component}
      {/* {
         menu === 'main' ? <DatasetContent /> : '<FormUbah />'
       } */}
      <Footer />
    </div>
  );
}
