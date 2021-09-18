import reportWebVitals from './reportWebVitals';
import {state, subscribe} from './Redux/State';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export const rerenderEntireTree = () => {  // создаем функцию которая перерисовывает весь наш сайт
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(); //Вызываем эту функцию чтобы отрисовать наш сайт

subscribe(rerenderEntireTree)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
