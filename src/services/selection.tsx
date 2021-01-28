import { combineReducers } from 'redux';

// TODO: https://www.digitalocean.com/community/tutorials/react-react-native-redux
const INITIAL_STATE = {};

export default class Selection {
  column: Number;
  row: Number;
  player: String;

  constructor(column: Number, row: Number, player: String) {
    this.column = column;
    this.row = row;
    this.player = player;
  }
}
