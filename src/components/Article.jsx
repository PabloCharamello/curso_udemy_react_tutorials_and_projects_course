export const Article = (props) => {
  const { image, title, author, children } = props;
  return (
    <article>
      <div className="container">
        <img src={image} className="image1" alt={`about title: ${title}`} />
      </div>
      <h2 className="titles">{title}</h2>
      <h3 className="titles">{author}</h3>
      {children}
    </article>
  );
};
