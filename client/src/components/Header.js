import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/" class="nav-link active" aria-current="page">
              Főoldal
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/termekek" class="nav-link" aria-current="page">
              Termékek
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/arlista" class="nav-link" aria-current="page">
              Árlista
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/gyik" class="nav-link" aria-current="page">
              GYIK
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/rolam" class="nav-link" aria-current="page">
              Rólam
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
