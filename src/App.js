import React from "react";
import Router from "./router/Router";
import { MoralisProvider } from "react-moralis";

const App = () => {
  return (
    <MoralisProvider
      serverUrl="https://1k9wu6uoelqz.usemoralis.com:2053/server"
      appId="THWOGlPxREbcdxNKWniuFfGQbnsWQN4FieQ1VrQI"
    >
      <Router />
    </MoralisProvider>
  );
};

export default App;
