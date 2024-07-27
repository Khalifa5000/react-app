
import { createContext, useReducer } from "react";


const ThemeContext = createContext();
const intialData = {
  name: "Mohamed",
  age: 43,
  count: 0,
  theme: "light"
}

const reducer = ()=>{

}
export const ThemeProvider = ({childern}) => {

  const [firstState, dispatch] = useReducer (reducer, intialData)
  return (
    <themeContexttt.provider value={{...firstState}}>
      {childern}
    </themeContexttt.provider>
  );
}

export default ThemeContext;
