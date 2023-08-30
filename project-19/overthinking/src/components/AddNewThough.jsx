/* eslint-disable react/prop-types */
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";

const AddNewThough = ({ onClick }) => {
  return (
    <div className="new_thought">
      <button className="new_thought__btn" onClick={onClick}>
        Add a new though
        <CloudArrowUpIcon className="icons large" />
      </button>
    </div>
  );
};

export default AddNewThough;
