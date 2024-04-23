// import "./App.css";
import "./index.css";
import { GlobalStyles } from "./GlobalStyles";
// import { ThemeProvider } from "styled-components";
// import Card from "./components/card/Card";
// import Card2 from "./components/card/Card2";
import CardList from "./components/card/CardList";
import CardTailwind from "./components/card/CardTailwind";

// const theme = {
//   colors: {
//     blue: "#2979ff",
//   },
//   orange: "#ffa400",
// };

function App() {
  return (
    <div>
      {/* <ThemeProvider theme={theme}> */}
      <GlobalStyles></GlobalStyles>
      <CardList>
        <CardTailwind primary fontSize='text-2xl'></CardTailwind>
      </CardList>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
