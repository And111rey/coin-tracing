import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Ethereum = (props) => {
    return(
       
            <div>
                <h1>{props.data[4]}</h1>
            </div>

         
    );  
}

export { Ethereum };