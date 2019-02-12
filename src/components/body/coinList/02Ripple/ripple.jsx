import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Ripple = (props) => {
    return(
       
            <div>
                <h1>{props.data[2]}</h1>
                
            </div>

         
    );  
}

export { Ripple };