import Food from "./food";
import Snake from "./snake";
import ScorePanel from "./scorePanel";

class GameControl {

  food: Food
  snake: Snake
  scorePanel: ScorePanel

  constructor() {
    this.food = new Food()
    this.snake = new Snake()
    this.scorePanel = new ScorePanel()
  }

  init() {
    const fd = new Food('food-dot')
    const snake = new Snake('snipe-dot')
    console.log('=======snake', snake)
    console.log('========fd', fd.X, fd.changePosition())
  }
}
export default GameControl