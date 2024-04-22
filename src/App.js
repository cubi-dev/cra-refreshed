// import "./App.css";
// import "./input.css";
import "./output.css"
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
// import Card from "./components/card/Card";
import Card2 from "./components/card/Card2";
import CardList from "./components/card/CardList";

const theme = {
  colors: {
    blue: "#2979ff",
  },
  orange: "#ffa400",
};

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles></GlobalStyles>
        {/* <CardList>
          <Card2 secondary={true}></Card2>
          <Card2></Card2>
          <Card2></Card2>
          <Card2></Card2>
          <Card2></Card2>
          <Card2></Card2>
        </CardList> */}
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
      </ThemeProvider>
    </div>
  );
}

export default App;
