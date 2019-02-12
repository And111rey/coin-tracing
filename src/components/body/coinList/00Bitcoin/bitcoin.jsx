import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Bitcoin = (props) => {
    return(
       
            <div>
                <h1>{props.data[0]}</h1> 
            </div>

         
    );  
}

export { Bitcoin };