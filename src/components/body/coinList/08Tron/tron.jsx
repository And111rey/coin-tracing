import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Tron = (props) => {
    return(
       
            <div>
                <h1>{props.data[8]}</h1>
            </div>

         
    );  
}

export { Tron };