import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Eos = (props) => {
    return(
       
            <div>
                <h1>{props.data[7]}</h1>
            </div>

         
    );  
}

export { Eos };