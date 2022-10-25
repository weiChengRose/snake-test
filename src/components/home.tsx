
/**
 * 
*/
import React from 'react';
import "../styles/sides.less"
import Food from './food'
import Snake from './snake'

class Home extends React.Component {
   constructor(props) {
      super(props)
   }
   food() {
      const fd = new Food('food-dot')

      const snake = new Snake('snipe-dot', 'snipe-dot', '')

      console.log('=======snake', snake)
      console.log('========fd', fd.X, fd.changePosition())
   }
   componentDidMount(): void {
      this.food()
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
               <div className="snipe-dot"></div>
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