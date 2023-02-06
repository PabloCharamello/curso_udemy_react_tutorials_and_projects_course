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
        );
      })}
    </div>
  );
};
