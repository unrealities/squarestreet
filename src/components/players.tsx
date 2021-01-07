import React from "react";

import { Selection } from "./selection";

type PlayerProps = {
  name: String;
  selections: Selection[];
};

type PlayersProps = {
  players: Players[];
};

// TODO:
// The next step is to randomly generate a set of players and assign them a random amount of cells
export class Players extends React.Component<PlayersProps> {}

export class Player extends React.Component<PlayerProps> {}
