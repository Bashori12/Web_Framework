import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import HelloComponent from './component/HelloComponent';
// import StateFullComponent from './container/StateFullComponent';
// import BlogPost from "./container/BlogPost/BlogPost";
import BlogPostMahasiswa from "./container/BlogPost/BlogPostMahasiswa";

// ReactDOM.render(<BlogPost />, document.getElementById('content'));
// ReactDOM.render(<BlogPost />, document.getElementById('content'));
ReactDOM.render(<BlogPostMahasiswa />, document.getElementById('content'));
// ReactDOM.render(<StateFullComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
