import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Siacoin = (props) => {
    return(
       
            <div>
                <h1><h1>{props.data[12]}</h1></h1>
            </div>

         
    );  
}

export { Siacoin };