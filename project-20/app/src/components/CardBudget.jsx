/* eslint-disable react/prop-types */

function Card({ name, value, color }) {
  let bgkColor = '';

  if (color === 'red') {
    bgkColor = 'bg-red-500';
  }
  if (color === 'blue') {
    bgkColor = 'bg-blue-400';
  }
  if (color === 'lime') {
    bgkColor = 'bg-lime-500';
  }

  return (
    <article className="flex-1 flex flex-col md:flex-row md:items-center justify-between">
      <h3 className="text-lg uppercase font-bold text-gray-600">{name}</h3>
      <p
        className={`text-md py-1 px-2 rounded font-medium text-white ${bgkColor}`}
      >
        ${value}
      </p>
    </article>
  );
}

export default Card;
