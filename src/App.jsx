import React from "react";
import { dataArticle1, dataArticle2, dataArticle3 } from "./articles.js";
import { Article } from "./components/Article";
//import { GetInfoFromApi } from "./components/GetInfoFromApi.jsx";
//import { GetRandomIdComponent } from "./components/functionalities/GetRandomIdComponent.jsx";
//import { ToogleFunction } from "./components/functionalities/ToogleFunction.jsx";
import { ArticlesListWhitMap } from "./components/ArticlesListWhitMap.jsx";
import Button from "./components/Button.jsx";
//import { HandleClickAndOnchange } from "./components/events/HandleClickAndOnchange";
export const App = () => {
  return (
    <>
      {/* <GetRandomIdComponent /> */}
      {/* <ToogleFunction /> */}
      {/* <GetInfoFromApi /> */}
      {/* <HandleClickAndOnchange /> */}
      <Button text={"boton"} />
      <ArticlesListWhitMap>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
          voluptatem inventore. Cum explicabo quibusdam voluptates alias
          exercitationem doloremque consequuntur beatae dolore minus
          reprehenderit, eveniet accusamus saepe temporibus quae enim nemo?
        </p>
      </ArticlesListWhitMap>

      <Article
        image={dataArticle1.image}
        title={dataArticle1.title}
        author={dataArticle1.author}
      >
        <div className="titles">
          <p>
            Por ello, en este artículo conoceremos una selección de treinta y
            siete cortos que pueden dar inspiración a cualquier...
          </p>
          <button>Click me by Alina Gabriels</button>
        </div>
      </Article>
      <Article
        image={dataArticle2.image}
        title={dataArticle2.title}
        author={dataArticle2.author}
      >
        <div className="titles">
          <p>Algunos dicen que bailar lambada es sano para el cuerpo</p>
          <button>Otro Click me pero danzando lambada</button>
        </div>
      </Article>
      <Article
        image={dataArticle3.image}
        title={dataArticle3.title}
        author={dataArticle3.author}
      >
        <div className="titles">
          <p>Las Mayúsculas son importantes en la vida...</p>
          <button>Click me con Mayúsculas</button>
        </div>
      </Article>
    </>
  );
};

/* <Greeting />;
const Greeting = () => {
  return React.createElement("h1", {}, "Hello World");
}; */
