
/**
 * 
*/
import React from 'react';
import "../styles/sides.less"
import GameControl from "./gameControl";

class Home extends React.Component {
   constructor(props) {
      super(props)
   }
   startGame() {
      const gameControl = new GameControl()
      gameControl.init()
   }
   componentDidMount(): void {
      this.startGame()
   }
   componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
   }
   componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {

   }
   componentWillUnmount(): void {

   }
   shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
      return true
   }
   render() {
      return (
         // 主面板
         <div className="spack">
            <div className="stage">
               <div className="snipe-dot" id="snipe-dot">

               </div>
               <div className="food-dot" id="food-dot">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
               </div>
            </div>

            <div className="score">
               <ul className="score-spanl">
                  <li>SCORE：<span>0</span></li>
                  <li>LEVEl：<span>1</span></li>
               </ul>
            </div>
         </div>
      )
   }
}

export default Home