import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';


ReactDOM.render(
  <div>
   <MyComponent backgroundColor="green" />
  </div>,
  document.querySelector('#root')
);
