import reportWebVitals from './reportWebVitals';
import {store} from './Redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export const rerenderEntireTree = () => {
    debugger// создаем функцию которая перерисовывает весь наш сайт
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
            dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(); //Вызываем эту функцию чтобы отрисовать наш сайт

store.subscribe(()=> {
    rerenderEntireTree()
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
