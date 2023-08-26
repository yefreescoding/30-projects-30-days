/* eslint-disable react/prop-types */

function Card({ name, value }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>${value}</p>
    </div>
  );
}

export default Card;
