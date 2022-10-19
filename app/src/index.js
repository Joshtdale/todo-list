import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container-fluid vh-100 vw-100 d-flex justify-content-center align-items-center bg-secondary'>
      <div className="card h-75 w-50 shadow">
        <div className="row">
          <div className="col">
            <h1 className='text-center m-3'>To-do List</h1>
          </div>
        </div>

        <div className="row mx-3 h-75">
          <div className="col">
            <App />

          </div>
        </div>
      </div>
    </div>
  </React.StrictMode>
);
