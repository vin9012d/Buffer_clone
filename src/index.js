import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from 'react-redux';
import { store } from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
=======

>>>>>>> 82391d76ec7df5af6a3e1645a4ba98f00d94c10e
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider>
<<<<<<< HEAD

        <App />


      </ChakraProvider>
    </Provider>

  </BrowserRouter>

=======
 
        <App />
      
       
        </ChakraProvider>
      </Provider>

    </BrowserRouter>
 
>>>>>>> 82391d76ec7df5af6a3e1645a4ba98f00d94c10e
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
