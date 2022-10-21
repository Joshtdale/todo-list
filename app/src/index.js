import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container-fluid vh-100 vw-100 d-flex justify-content-center align-items-center bg-secondary'>
      <div className="row vw-100 justify-content-center">
        <div className="col-sm-12 col-md-8 col-lg-8">
          <div className="card vh-75 shadow">
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
      </div>

    </div>
  </React.StrictMode>
);
