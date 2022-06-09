import React from "react";
import Router from "./router/Router";
import { MoralisProvider } from "react-moralis";

const App = () => {
  return (
    <MoralisProvider
      serverUrl="https://qtc8dzoz0lk7.usemoralis.com:2053/server"
      appId="8G0KFcWblI8nLp1oHlAGW9tT53bBUdTWnnuJkgAQ"
    >
      <Router />
    </MoralisProvider>
  );
};

export default App;
