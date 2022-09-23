import React from 'react';

const Links = () => {
    return (
            <>
            <li className="nav-item">
                <a className="nav-link active" href="#">Productos
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
            </>
    );
}

export default Links;
