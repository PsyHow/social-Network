import reportWebVitals from './reportWebVitals';
import {store} from './Redux/State';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export const callSubscriber = () => {  // создаем функцию которая перерисовывает весь наш сайт
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

callSubscriber(); //Вызываем эту функцию чтобы отрисовать наш сайт

store.subscribe(callSubscriber)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
