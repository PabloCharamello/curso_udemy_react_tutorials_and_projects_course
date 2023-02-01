import Articles from "../articlesDB";
import { Article } from "./Article";

export const ArticlesListWhitMap = () => {
  return (
    <div>
      {Articles.map((article) => {
        return (
          <Article key={article.id} {...article} />
          //   <div key={article.id} className="titles">
          //     <h2>{article.title}</h2>
          //   </div>
        );
      })}
    </div>
  );
};
