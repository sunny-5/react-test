
import React from 'react';  
import ReactDOM from 'react-dom';  
import Hello from './helloworld'; 
import Containers from './statelifecycle';
import Charts from './charts';
 
ReactDOM.render(<Hello/>, document.getElementById('root')); 
ReactDOM.render(<Containers></Containers>,document.getElementById('container'));