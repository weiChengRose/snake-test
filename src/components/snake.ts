class Snake {

  head: HTMLElement;
  bodys: HTMLCollection
  element: HTMLElement

  constructor(elId: string = '') {
    this.head = document.getElementById(elId)!;
    this.element = document.getElementById('stage')!;
    this.bodys = document.getElementsByClassName(elId)!;
  }

  get X() {
    return this.head.offsetLeft
  }

  get Y() {
    return this.head.offsetTop
  }

  set X(x: number) {
    this.head.style.left = x + 'px';
  }

  set Y(y: number) {
    this.head.style.left = y + 'px';
  }

  addBody() {
    const element = document.getElementById('snipe-dot')!;
    this.element.insertAdjacentElement('beforeend', element)
  }

  changePosition(): void {

  }

  move() {

  }

}

export default Snake 