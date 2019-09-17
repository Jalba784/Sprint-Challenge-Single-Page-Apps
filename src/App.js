import React, { useState, useEffect } from "react";
import TabExampleBasic from "./components/TabNav.js";
import CharacterList from './components/CharacterList.js';
import LocationsList from "./components/LocationsList.js";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import axios from "axios";


export default function App() {
  const [info, setInfo] = useState([]);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
        .then(res => {
          setInfo(res.data.results)
          setLocation(res.data.results)
        })
        .catch(err => console.log(err))
  }, [])

  console.log(location);
  // console.log(info.location);

  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      <Route exact path="/" component={ TabExampleBasic }  />
      <Route path="/characters" render={(props) => (
          <CharacterList {...props} character={info} />
      )} />
      {/*<Route path="/location" render={ LocationsList } />*/}
      <Route path="/location" render={(props) => (
          <LocationsList {...props} location={location}  />
      )}  />
    </main>
  );
}
