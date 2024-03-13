import React from 'react';
import '@css/components/breadcrumbs.css';

type Size = 'is-small' | 'is-normal' | 'is-large';

interface BreadCrumbsProps {
  label?: string;

  size?: Size;

  count?: number;
}

export const BreadCrumbs = ({
  label = 'item',
  size,
  count,
}: BreadCrumbsProps) => {
  const styleAdditional = (size?: Size) => {
    const tmp = ['my-ds-breadcrumbs'];
    if (size) tmp.push(size);
    return tmp.join(' ');
  };

  const items = [];
  for (let i = 0; i < (count || 0); i++) {
    items.push(
      <li key={i}>
        <a href="/" onClick={(e) => e.preventDefault()}>
          {label} {i + 1}
        </a>
      </li>,
    );
  }

  return (
    <nav className={styleAdditional(size)}>
      <ul>{items}</ul>
    </nav>
  );
};
