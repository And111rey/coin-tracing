import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


const ZCash = (props) => {
    return(
       
            <div>
                <h1>{props.data[9]}</h1>
            </div>

         
    );  
}

export { ZCash };