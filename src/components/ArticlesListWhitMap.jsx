import Articles from "../articlesDB";
import { Article } from "./Article";

export const ArticlesListWhitMap = ({ children }) => {
  return (
    <div>
      {Articles.map((article) => {
        return (
          <Article key={article.id} {...article}>
            {children}
          </Article>
          //   <div key={article.id} className="titles">
          //     <h2>{article.title}</h2>
          //   </div>
        );
      })}
    </div>
  );
};
