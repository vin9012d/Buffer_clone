
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ChakraProvider } from "@chakra-ui/react";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <BrowserRouter>

    <Provider  store={store}>
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
 

>>>>>>> f44de389575fdb45b7a911e6ddfe181dc85736a1
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
