/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

const Thoughts = ({ thoughts }) => {
  return (
    <ul className="thoughts__ul">
      {thoughts.map((thought, index) => (
        <li key={index} className="thoughts__li">
          <p className="tho">{thought}</p>
        </li>
      ))}
    </ul>
  );
};

export default Thoughts;
