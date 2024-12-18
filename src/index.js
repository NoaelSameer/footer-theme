import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/css/index.css';
import App from './pages/App';
// import reportWebVitals from './reportWebVitals';
import Test from './pages/test';
import Footer from './pages/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {path:"/", element: <App />},
  {path:"/test", element: <Test />},
  {path:"/footer", element: <Footer/>},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
