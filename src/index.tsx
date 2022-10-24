// import ReactDOM from "react-dom"
import { Home } from "./components/home"

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Home />);


// 被注释的是之前ReactDOM.render的代码
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
