import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container">
        <a className="navbar-brand text-white" href="#">
          <img src="/logo.png" alt="NelsonBot" width="30" height="30" className="d-inline-block align-top" />
          NelsonBot
        </a>
        <div className="ml-auto">
          <button className="btn btn-outline-light" id="theme-toggle">🌙</button>
        </div>
      </div>
    </nav>
  );
}
