
import { createContext, useReducer } from "react";
// import { useContext } from "react";
// import {themeContexttt} from "./theme_context";

const ThemeContext = createContext();
const intialData = {
  name: "Mohamed",
  age: 43,
  count: 0,
  theme: "light"
}

const reducer = ()=>{

}
export function ThemeProvider ({childern})  {

  const [firstState, dispatch] = useReducer (reducer, intialData)
  return (
    <ThemeContext.provider value={{...firstState}}>
      {childern}
    </ThemeContext.provider>
  );
}

export default ThemeContext;
