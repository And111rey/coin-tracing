import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Status = (props) => {
    return(
       
            <div>
                <h1>{props.data[11]}</h1>
            </div>

         
    );  
}

export { Status };