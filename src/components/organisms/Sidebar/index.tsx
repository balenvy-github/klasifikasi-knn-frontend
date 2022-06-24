import React from 'react';
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
        <span className="brand-text font-weight-light">K-Nearest Neighbor ISPU</span>
      </a>
      <div className="sidebar">
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

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

          </ul>
        </nav>
      </div>
    </aside>
  );
}
