/* eslint-disable react/prop-types */
function Buttons({ linkOrButton = true, name, link, onClickFunction }) {
  return (
    <>
      {linkOrButton ? (
        <a href={link}>{name}</a>
      ) : (
        <button type="button" onClick={onClickFunction}>
          {name}
        </button>
      )}
    </>
  );
}

export default Buttons;
