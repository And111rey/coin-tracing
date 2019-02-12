import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Venge = (props) => {
    return(
       
            <div>
                <h1>{props.data[10]}</h1>
            </div>

         
    );  
}

export { Venge };