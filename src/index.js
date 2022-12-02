import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// const array = [
//   { id: 'id-1', label: '.docx', percentage: 22 },
//   { id: 'id-2', label: '.pdf', percentage: 4 },
//   { id: 'id-3', label: '.mp3', percentage: 17 },
//   { id: 'id-4', label: '.psd', percentage: 47 },
//   { id: 'id-5', label: '.pdf', percentage: 10 },
// ];

// let a = array.map(item => {
//   return (
//     <li className="item">
//       <span className="label">{item.label}</span>
//       <span className="percentage">{item.percentage}</span>
//     </li>
//   );
// });
// console.log('🚀 ~ a', a);
