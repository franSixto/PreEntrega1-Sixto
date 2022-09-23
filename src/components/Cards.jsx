import React from 'react';
import Contador from './Contador';

const Cards = (titulo, desc, price) => {
    return (
        <div>
            <div className="card h-100">
                {/* <img src="www.google.com" class="card-img-top" alt="..."> */}
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
                <div className="card-footer">
                    <div className="d-flex flex-row justify-content-between">
                    <Contador/>
                    <button className="btn btn-primary">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
