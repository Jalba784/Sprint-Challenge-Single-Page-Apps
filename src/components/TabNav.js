import React from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
import { Tab } from "semantic-ui-react";
import { Link } from "react-router-dom";
// import styled from "styled-components";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/


const panes = [
    { menuItem: 'Home Page', render: (props) => <Tab.Pane>
    <h1 className="main-title">Welcome to the ultimate fan site!</h1>
    <br/>
    <img className="main-pic" src="https://rick-api.herokuapp.com/api/character/avatar/1.jpeg" alt="Home-pic" />
    </Tab.Pane> },
    { menuItem: 'Characters', render: () =>
    <Tab.Pane>
        <Link className="charac-title" to="/characters">Enter Characters</Link>
        <br/>
        <img className="main-pic" src="https://rick-api.herokuapp.com/api/character/avatar/2.jpeg" alt="location-pic"/>
    </Tab.Pane> },
    { menuItem: 'Locations', render: () =>
    <Tab.Pane>
        <Link className="charac-title" to="/location">Enter Locations</Link>
        <br/>
        <img className="main-pic" src="https://rick-api.herokuapp.com/api/character/avatar/3.jpeg" />
    </Tab.Pane> },
    { menuItem: 'Episodes', render: () => <Tab.Pane>Tab 4 Content</Tab.Pane> },
]

const TabExampleBasic = () => <Tab panes={panes}/>

export default TabExampleBasic

// export default function TabNav() {
//
// };
