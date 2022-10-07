import Snake from './Snake'
import Food from './Food'
import Scores from './Scores'

class GameControl {
    snake: Snake
    food: Food
    scores: Scores

    direction: string = 'ArrowRight'

    isGaming: boolean = true

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scores = new Scores(20, 1)

        this.init()
    }

    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }

    keydownHandler(event: KeyboardEvent) {
       if (['ArrowUp', 'ArrowLeft', 'ArrowRight','ArrowDown'].includes(event.key)) {
           this.direction = event.key
       }
    }

    run() {
        let X = this.snake.X
        let Y = this.snake.Y

        switch (this.direction) {
            case 'ArrowUp':
                Y -= 10
                break
            case 'ArrowLeft':
                X -= 10
                break
            case 'ArrowRight':
                X += 10
                break
            case 'ArrowDown':
                Y += 10
                break
        }

        this.checkEat(X, Y)

        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (err: any) {
            confirm(err.message)
            this.isGaming = false
        }

        this.isGaming && setTimeout(this.run.bind(this), 300 - (this.scores.level - 1) * 30)
    }

    checkEat(X: number, Y:number) {
        if (X === this.food.X && Y === this.food.Y) {
            console.log('i get the food!')
            this.food.initLocation()
            this.scores.addScore()
            this.snake.addBody()
        }
    }
}

export default GameControl
