import React, { useState, useEffect } from "react";
import TabExampleBasic from "./components/TabNav.js";
import CharacterList from './components/CharacterList.js';
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import axios from "axios";


export default function App() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
        .then(res => {
          setInfo(res.data.results)
        })
        .catch(err => console.log(err))
  }, [])
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      <Route exact path="/" component={ TabExampleBasic }  />
      <Route path="/characters" render={(props) => (
          <CharacterList {...props} character={info} />
      )} />
      {/*<Route path="/location" component={ LocationsList } />*/}
    </main>
  );
}
