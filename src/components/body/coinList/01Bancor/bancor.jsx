import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Bancor = (props) => {
    return(
       
            <div>
                <h1>{props.data[1]}</h1>
            </div>

         
    );  
}

export { Bancor };