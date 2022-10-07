class Scores {
    score = 0
    level = 1

    scoreEl: HTMLElement
    levelEl: HTMLElement

    maxLevel: number
    upScore: number

    constructor(maxLevel: number = 10, upScore: number = 2) {
        this.scoreEl = document.querySelector('#score > span')!
        this.levelEl = document.querySelector('#level > span')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }
    addScore() {
        this.scoreEl.innerHTML = ++this.score + ''
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEl.innerHTML = ++this.level + ''
        }
    }
}

export default Scores
