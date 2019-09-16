import React from "react";
// import TabNav from "./components/TabNav.js";
import TabExampleBasic from "./components/TabNav.js";
import CharacterList from './components/CharacterList.js'
import Header from "./components/Header.js";
import { Route } from "react-router-dom"

export default function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      <Route path="/" component={ TabExampleBasic }  />
      <Route path="/characters" component={ CharacterList }  />
    </main>
  );
}
