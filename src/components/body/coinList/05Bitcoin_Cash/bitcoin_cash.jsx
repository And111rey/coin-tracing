import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Bitcoin_Cash = (props) => {
    return(
       
            <div>
                <h1>{props.data[5]} </h1>
            </div>

         
    );  
}

export { Bitcoin_Cash };