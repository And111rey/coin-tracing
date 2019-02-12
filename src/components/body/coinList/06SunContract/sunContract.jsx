import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


const SunConrtact = (props) => {
    return(
       
            <div>
                <h1>{props.data[6]}</h1>
            </div>

         
    );  
}

export { SunConrtact };