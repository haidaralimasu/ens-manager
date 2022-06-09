import React from "react";
import Router from "./router/Router";
import { MoralisProvider } from "react-moralis";

const App = () => {
  return (
    <MoralisProvider
      serverUrl="https://wybbjccy07if.usemoralis.com:2053/server"
      appId="j0jsTExJ1XfRhIn1ujvv9JrQyJfsL2R95aFe70IA"
    >
      <Router />
    </MoralisProvider>
  );
};

export default App;
