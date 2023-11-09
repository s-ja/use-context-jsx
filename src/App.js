import React from "react";
import "./App.css";
import Page from "./components/Page";
import useStore from "./store.js";

function App() {
  const { isDark, toggleTheme } = useStore();
  return <Page isDark={isDark} toggleTheme={toggleTheme} />;
}

export default App;
