class Snake {
    snake: HTMLElement
    head: HTMLElement
    bodies: HTMLCollection

    constructor() {
        this.snake = document.querySelector('#snake')!
        this.head = document.querySelector('#snake > div') as HTMLElement
        this.bodies = this.snake.getElementsByTagName('div')
    }

    get X() {
        return this.head.offsetLeft
    }

    get Y() {
        return this.head.offsetTop
    }

    set X(value) {
        if (this.X === value) return
        if (value < 0 || value > 290) throw new Error('game over!')
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if (value > this.X) {
                value = this.X - 10
            } else {
                value = this.X + 10
            }
        }
        this.moveBody()
        this.head.style.left = value + 'px'
        this.checkHeadBwody()
    }

    set Y(value) {
        if (this.Y === value) return
        if (value < 0 || value > 290)  throw new Error('game over!')
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10
            } else {
                value = this.Y + 10
            }
        }
        this.moveBody()
        this.head.style.top = value + 'px'
        this.checkHeadBwody()
    }

    addBody() {
        this.snake.insertAdjacentHTML('beforeend', '<div></div>')
    }

    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    checkHeadBwody() {
        for(let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('game over!')
            }
        }
    }
}

export default Snake
