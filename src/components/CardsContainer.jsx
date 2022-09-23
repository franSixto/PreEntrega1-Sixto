import React from 'react';
import Cards from './Cards';

const CardsContainer = () => {
    return (
        <>
        <div className="container my-4">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <Cards/>
                </div>
                <div className="col">
                    <Cards/>
                </div>
                <div className="col">
                    <Cards/>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
                <div className="col">
                    <Cards/>
                </div>
                <div className="col">
                    <Cards/>
                </div>
                <div className="col">
                    <Cards/>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
                <div className="col">
                    <Cards/>
                </div>
                <div className="col">
                    <Cards/>
                </div>
                <div className="col">
                    <Cards/>
                </div>
            </div>
        </div>
        </>
    );
}

export default CardsContainer;
