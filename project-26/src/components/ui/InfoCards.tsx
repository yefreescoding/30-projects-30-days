interface InfoCardsProps {
  id: string;
  title: string;
  info: string;
  link: string;
  img: string;
}

export const InfoCards = ({ id, title, info, link, img }: InfoCardsProps) => {
  return (
    <article
      id={id}
      className="flex flex-col justify-between bg-white p-6 rounded-3xl shadow-lg"
    >
      <div className="flex items-center gap-4">
        <img className="aspect-square w-8" src={img} alt="" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="my-4 text-text-light">{info}</p>
      <a href={link} className="btn request-btn mt-4 w-fit">
        Learn more
      </a>
    </article>
  );
};
