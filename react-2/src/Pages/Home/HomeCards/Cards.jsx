import React from "react";
import { carddata } from "../../../data/carddata";

const Cards = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {carddata.map(({ img, title, description }, index) => {
            return (
              <div key={index} className="col-md-3 my-3">
                <div className="card">
                  <img src={img} alt="" />
                  <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
