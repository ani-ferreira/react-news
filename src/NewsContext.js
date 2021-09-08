import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "81f8edbb675e40dc8735ccee0e159315";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=81f8edbb675e40dc8735ccee0e159315`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  /* Para realizar una solicitud GET llamamos al método get de Axios, 
pasando como parámetro la URL que deseamos solicitar. 
Luego de esto llamamos a los métodos then y catch , 
que se encargan de capturar la respuesta del servidor así como los errores,
 en caso de que llegue a ocurrir alguno.
 */

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
