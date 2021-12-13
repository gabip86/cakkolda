import React from "react";

const Header = () => {
  return (
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span class="fs-4">Cakkolda</span>
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page">
              Főoldal
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Termékek
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Árlista
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              GYIK
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Rólam
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
