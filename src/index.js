import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DigitalClock from './DigitalClock';
import LoginApp from './LoginApp';
import WeatherApp from './WeatherApp';
import EcomApp from './EcomApp';
import ReactContextApp from './ReactContextApp';
import SimpleInterestCalculator from './SimpleInterestCalculator';
import CrudComponent from './CrudComponent';
import TodoApp from './TodoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <DigitalClock/>
    <LoginApp/>
    <WeatherApp/>
    <div style={{marginTop:"100px"}}></div>
    <EcomApp/>
    <ReactContextApp/>
    <div style={{marginTop:"100px"}}></div>
    <hr />
    <SimpleInterestCalculator/>
    <div style={{marginTop:"100px"}}></div>
    <hr />
    <CrudComponent/>
    <div style={{marginTop:"100px"}}></div>
    <hr></hr>
    <TodoApp/>
  </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
