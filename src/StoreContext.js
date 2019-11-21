// самописный аналог react-redux. Использует context API
// Позволяет прокидывать данные( вместо пропс). Реализация react-redux похожа на это

import React from "react";
import {createContext} from "react";

const StoreContext = createContext(null);

export const Provider = props => {
  return (
      <StoreContext.Provider value={props.store}>
          {props.children}
      </StoreContext.Provider>
  )
};

export default StoreContext;
