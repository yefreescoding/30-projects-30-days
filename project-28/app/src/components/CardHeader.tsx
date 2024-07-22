interface CardHeaderProps {
  title: string;
  description: string;
  cover: string;
  serving: number;
  price: number;
}

export const CardHeader = ({
  title,
  description,
  cover,
  serving = 0,
  price = 0,
}: CardHeaderProps) => {
  return (
    <header className="recipe_card__header">
      <div className="rating_component">
        <div>
          <img src="/images/avatars/avatar-1.jpg" alt="imagen de avatar" />
          <img src="/images/avatars/avatar-2.jpg" alt="imagen de avatar" />
          <img src="/images/avatars/avatar-3.jpg" alt="imagen de avatar" />
        </div>
        <p>4.5 of 344 votes</p>
      </div>
      <div className="recipe_card__preview">
        <img src={`/images/${cover}.jpeg`} alt="recipe preview" />
      </div>
      <div className="recipe_card__presentation">
        <h1>{title}</h1>
        <p>{description}</p>
        <ul className="recipe_card__ul">
          <li>
            <h3>Servings</h3>
            <p>{serving} people</p>
          </li>
          <li>
            <h3>Total price</h3>
            <p>{price}$EUR</p>
          </li>
          <li>
            <h3>price per person</h3>
            <p>{Math.round(price / serving)}$EUR</p>
          </li>
        </ul>
      </div>
    </header>
  );
};
