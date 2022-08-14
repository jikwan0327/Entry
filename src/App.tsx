import { createGlobalStyle } from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools";
import Router from "./router";

function App() {
  const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,300&display=swap');
  body{
    margin: 0;
  }
  `;

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Router />
      <ReactQueryDevtools />
    </>
  );
}

export default App;
