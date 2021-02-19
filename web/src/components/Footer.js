import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p className="center">
        &copy; City of Hanahan {new Date().getFullYear()} -{' '}
        <a href="https://jonellwood.dev">Jon Ellwood</a>
      </p>
    </footer>
  )
}
