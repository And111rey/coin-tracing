import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


const LiteCoin = (props) => {
    return(
       
            <div>
                <h1>{props.data[3]}</h1>
            </div>

         
    );  
}

export { LiteCoin };