import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

interface MenuProps {
    title: string;
    href: string;
    icon: string;
    active?: boolean;
}

export default function Menu(props: Partial<MenuProps>) {
  const {
    title, active, icon, href = '/',
  } = props;

  const className = cx({
    'nav-link': true,
    active,
  });

  return (
    <li className="nav-item">
      {/* <a href={href} className={`nav-link ${active}`}> */}
      <Link to={href} className={className}>
        <i className={`nav-icon ${icon}`} />
        <p>
          {title}
        </p>
      </Link>
    </li>
  );
}
