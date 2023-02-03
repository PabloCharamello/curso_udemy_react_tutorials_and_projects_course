//import { dataArticle1, dataArticle2, dataArticle3 } from "./articles.js";
//import { Article } from "./components/Article";
//import { GetInfoFromApi } from "./components/GetInfoFromApi.jsx";
//import { GetRandomIdComponent } from "./components/functionalities/GetRandomIdComponent.jsx";
//import { ToogleFunction } from "./components/functionalities/ToogleFunction.jsx";
import { ArticlesListWhitMap } from "./components/ArticlesListWhitMap.jsx";
import { HandleClickAndOnchange } from "./components/events/HandleClickAndOnchange";
export const App = () => {
  return (
    <>
      {/* <GetRandomIdComponent /> */}
      {/* <ToogleFunction /> */}
      {/* <GetInfoFromApi /> */}
      <HandleClickAndOnchange />
      <ArticlesListWhitMap />

      {/* <Article
        image={dataArticle1.image}
        title={dataArticle1.title}
        author={dataArticle1.author}
      >
        <div className="titles">
          <p>
            Por ello, en este artículo conoceremos una selección de treinta y
            siete cortos de poetas reconocidos, que pueden dar inspiración a
            cualquier...
          </p>
          <button>Click me</button>
        </div>
      </Article>
      <Article
        image={dataArticle2.image}
        title={dataArticle2.title}
        author={dataArticle2.author}
      />
      <Article
        image={dataArticle3.image}
        title={dataArticle3.title}
        author={dataArticle3.author}
      /> */}
    </>
  );
};

// const Greeting = () => {
//   return React.createElement("div", {}, "Hello World");
// };
