/**
 * 食物
 */

class Food {

  element: HTMLElement // HTMLElement 类型

  constructor(id: string = 'food-dot') {
    if (document.getElementById(id)) {
      this.element = document.getElementById(id)!;
    } else {
      this.catchErr()
    }
  }

  catchErr() {
    throw new Error("无法获取元素.");
  }

  get X(): number {
    return this.element.offsetLeft
  }

  get Y(): number {
    return this.element.offsetTop
  }

  changePosition(): void {
    const faTag = document.getElementsByClassName('stage')[0];
    const randomLeft = Math.round(Math.random() * faTag?.scrollWidth) - 20
    const randomHeight = Math.round(Math.random() * faTag?.scrollHeight) - 20

    this.element.style.left = (randomLeft > 22 ? randomLeft : 11) + 'px'
    this.element.style.top = (randomHeight > 22 ? randomHeight : 11) + 'px'
  }

}

export default Food