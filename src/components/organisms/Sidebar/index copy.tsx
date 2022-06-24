import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import routes from '../../../routes';

interface SidebarProps {
    activeMenu?: string;
}

export default function Sidebar(props: Partial<SidebarProps>) {
  const { activeMenu } = props;

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="#/" className="brand-link bg-primary">
        <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>
      <div className="sidebar">
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

            {/* initiate routes */}
            <Routes>
              {routes.map((route) => (
                (
                  <Route key={`${route.id}${route.name}`} path={route.path} element={route.component} />
                )
              ))}
            </Routes>
            {/* initiate menu */}
            {routes.map((route) => (
              (
                <Menu
                  key={`${route.id}${route.name}`}
                  icon={route.icon}
                  active={activeMenu === route.name}
                  title={route.name}
                  href={route.path}
                />
              )
            ))}

            <li className="nav-item">
              <a href="/#" className={`nav-link ${activeMenu === 'search' ? 'active' : ''}`}>
                <i className="nav-icon fas fa-search" />
                <p>
                  Search
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../search/simple.html" className={`nav-link ${activeMenu === 'search' ? 'active' : ''}`}>
                    <i className="far fa-circle nav-icon" />
                    <p>Simple Search</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../search/enhanced.html" className={`nav-link ${activeMenu === 'search' ? 'active' : ''}`}>
                    <i className="far fa-circle nav-icon" />
                    <p>Enhanced</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
