import React from "react";

function Card({ name, email, pNumber, profile }) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={profile} />
      </div>
      <div className="card__copy">
        <h1 className="card__item">Name {name}</h1>
        <h2 className="card__item">Email {email}</h2>
        <h2 className="card__item">Number {pNumber}</h2>
        <button className="card__item">Delete</button>
      </div>
    </div>
  );
}

export default Card;
