import React from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
import { Tab } from "semantic-ui-react";
// import { NavLink } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

const panes = [
    { menuItem: 'Home Page', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Characters', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Locations', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    { menuItem: 'Episodes', render: () => <Tab.Pane>Tab 4 Content</Tab.Pane> },
]

const TabExampleBasic = () => <Tab panes={panes}/>

export default TabExampleBasic;

// export default function TabNav() {
//
// };
