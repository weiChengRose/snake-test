import Food from "./food";
import Snake from "./snake";
import ScorePanel from "./scorePanel";

class GameControl {

  food: Food
  snake: Snake
  scorePanel: ScorePane
  direction: string = 'ArrowRight'
  timer

  constructor() {
    this.food = new Food()
    this.snake = new Snake()
    this.scorePanel = new ScorePanel()
  }

  init() {
    document.addEventListener('keydown', this.keyDownHandler.bind(this)) // 修改 this 指向
    console.log('======this.direction', this.direction)
    this.run()
  }

  keyDownHandler(callback) {
    const key = callback.key
    this.direction = key
  }

  run() {
    this.timer = setInterval(() => {
      this.setPosition()
    }, (1000 * 1))
  }

  setPosition() {
    // 向上 top  减少
    // 向右 letft  减少
    let nowX = this.snake.X;
    let nowY = this.snake.Y;
    switch (this.direction) {
      case 'ArrowRight':
        nowY += 10
        break;
      case 'ArrowUp':
        nowX -= 10
        break;
      case 'ArrowLeft':
        nowY -= 10
        break;
      case 'ArrowDown':
        nowX += 10
        break;
    }
    this.snake.X = nowX
    this.snake.Y = nowY
    console.log('===== this.snake.X', this.snake.X)
  }

}
export default GameControl