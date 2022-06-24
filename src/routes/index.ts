// ROUTE DISINI SEBAGAI MENU PADA SIDEBAR
// error
// component props doesnt matter

// import Dashboard from '../pages/Dashboard';
import Udara from '../pages/Udara';

interface RouteItemProps {
  id: string;
  name: string;
  icon: string;
  path: string;
  component: () => void;
}

const randNumber = Math.floor(Math.random() * 1000);

const routes: Array<RouteItemProps> = [
  // {
  //   id: `1${randNumber}`,
  //   name: 'Dashboard',
  //   icon: 'fas fa-tachometer-alt',
  //   path: '/',
  //   component: Dashboard,
  // },
  // {
  //   id: `2${randNumber}`,
  //   name: 'Udara',
  //   icon: 'fas fa-database',
  //   path: '/udara',
  //   component: Udara,
  // },
  {
    id: `3${randNumber}`,
    name: 'Dataset',
    icon: 'fas fa-stroopwafel',
    path: '/dataset',
    component: Udara,
  },
  {
    id: `3${randNumber}`,
    name: 'Uji Data',
    icon: 'fas fa-stroopwafel',
    path: '/uji-data',
    component: Udara,
  },
  {
    id: `3${randNumber}`,
    name: 'Klasifikasi',
    icon: 'fas fa-stroopwafel',
    path: '/klasifikasi',
    component: Udara,
  },
  // {
  //   id: `3${randNumber}`,
  //   name: 'Parameter',
  //   icon: 'fas fa-stroopwafel',
  //   path: '/parameter',
  //   component: Udara,
  // },
  // {
  //   id: `4${randNumber}`,
  //   name: 'Perusahaan',
  //   icon: 'fas fa-university',
  //   path: '/perusahaan',
  //   component: Udara,
  // },
];

export default routes;
