import React from "react";
import Router from "./router/Router";
import { MoralisProvider } from "react-moralis";

const App = () => {
  return (
    <MoralisProvider
      serverUrl="https://rnlieopvitzn.usemoralis.com:2053/server"
      appId="mAGVWfsszaaXJRvj37nhBN4QNl6QhL4BQEJcEkJk"
    >
      <Router />
    </MoralisProvider>
  );
};

export default App;
