export const Article = ({ image, title, author, children }) => {
  return (
    <article>
      <div className="container">
        <img
          src={image}
          className="image1"
          alt={`image about title: ${title}`}
        />
      </div>
      <h2 className="titles">{title}</h2>
      <h3 className="titles">{author}</h3>
      {children}
    </article>
  );
};
