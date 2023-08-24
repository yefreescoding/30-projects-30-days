/* eslint-disable react/prop-types */
import styles from './buttons.module.css';

function Buttons({
  linkOrButton = true,
  name,
  link,
  onClickFunction,
  colorFilled,
}) {
  return (
    <>
      {linkOrButton ? (
        <a className={styles['btn']} href={link} data-filled={colorFilled}>
          {name}
        </a>
      ) : (
        <button
          className={styles['btn']}
          type="button"
          onClick={onClickFunction}
          data-filled={colorFilled}
        >
          {name}
        </button>
      )}
    </>
  );
}

export default Buttons;
