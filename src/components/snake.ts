class Snake {

  element: HTMLElement;
  head: HTMLElement;
  body: HTMLElement;

  constructor(elId: string = '', headId: string = '', body) {
    this.element = document.getElementById(elId)!;
    this.head = document.getElementById(headId)!;
    this.body = body
  }

  get X(): number {
    return 1
  }


  get Y(): number {
    return 1
  }

  changePosition(): void {

  }

  move() {

  }

}

export default Snake 