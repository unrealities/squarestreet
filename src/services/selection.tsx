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
