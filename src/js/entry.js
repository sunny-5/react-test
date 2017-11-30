
import React from 'react';  
import ReactDOM from 'react-dom';  
import Hello from './helloworld'; 
import Containers from './statelifecycle';
 
ReactDOM.render(<Hello/>, document.getElementById('root')); 
ReactDOM.render(<Containers></Containers>,document.getElementById('container'));