interface ArticlesCardProps {
  id: string;
  title: string;
  img: string;
  desc: string;
  author: string;
}

export const ArticlesCard = ({
  id,
  title,
  img,
  desc,
  author,
}: ArticlesCardProps) => {
  return (
    <article className="h-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-xl w-full h-[200px] object-cover object-center"
          src={img}
          alt={id}
        />
      </a>
      <div className="p-4 flex flex-col items-start justify-between">
        <p className="text-sm text-text-light mb-4">By {author}</p>
        <a href="#">
          <h3 className="leading-6 mb-2 text-lg font-semibold tracking-tight text-gray-700 dark:text-white">
            {title}
          </h3>
        </a>
        <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">{desc}</p>
      </div>
    </article>
  );
};
