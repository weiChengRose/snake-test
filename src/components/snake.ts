class Snake {

  element: HTMLElement;
  head: HTMLElement;
  bodys: HTMLCollection

  constructor(elId: string = '') {
    this.element = document.getElementById(elId)!;
    this.bodys = document.getElementsByClassName(elId)!;
  }

  get X(): number {
    return this.element.offsetLeft
  }


  get Y(): number {
    return this.element.offsetTop
  }

  changePosition(): void {

  }

  move() {

  }

}

export default Snake 