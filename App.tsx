import React from "react";
import { MyStack } from "./src/navigations/app-navigator";

import Selection from "./src/services/selection";

export default class App extends React.Component {
  render() {
    // TODO: Generate random players with selections
    const players = ["Abe","Betty","Carl","Diana","Edward"];
    const selections = [];

    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 10; c++) {
        let randPlayer = players[(Math.random() * players.length) | 0];
        let s = new Selection(r, c, randPlayer);
        selections.push(s);
      }
    }

    console.log(selections);

    return <MyStack selections={selections}/>;
  }
}
