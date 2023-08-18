/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

function Menu({ eraseFunction }) {
  return (
    <div>
      <button onClick={eraseFunction}>Erase my thoughts</button>
    </div>
  );
}

export default Menu;
