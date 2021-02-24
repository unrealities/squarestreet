import React from "react";

import { Selection } from "./selection";

type PlayerProps = {
  name: String;
  selections: Selection[];
};

type PlayersProps = {
  players: Players[];
};

export class Players extends React.Component<PlayersProps> {}

export class Player extends React.Component<PlayerProps> {}
