interface Props {
  timePrep: number;
}

export const CardPrepTime = ({ timePrep }: Props) => {
  return (
    <div className="recipe_card__div">
      <h2>Preparation Time</h2>
      <ul className="recipe_card__ul recipe_card__ul-prep">
        <li>
          <h3>Total</h3>
          <p>Approx. {timePrep} min</p>
        </li>
        <li>
          <h3>Preparation</h3>
          <p>{Math.round(timePrep / 2)} minutes</p>
        </li>
        <li>
          <h3>Cooking</h3>
          <p>{Math.round(timePrep / 2)} minutes</p>
        </li>
      </ul>
    </div>
  );
};
