class Food {
    element: HTMLElement
    constructor() {
        this.element = document.querySelector('#food')!
        this.initLocation()
    }
    initLocation() {
        this.element.style.left = Math.round(Math.random() * 29) * 10 + 'px'
        this.element.style.top = Math.round(Math.random() * 29) * 10 + 'px'
    }
    get X() {
        return this.element.offsetLeft
    }
    get Y () {
        return this.element.offsetTop
    }
}

export default Food
