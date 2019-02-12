import React, { Component } from 'react';
import './field.css';

import { Route } from "react-router-dom";

const Field = (props) => {
    return (
        <div className="field"> 
      
            <h2>LIST:</h2>
            <div>
            {props.listName}
            </div>
            
             {/* <a href ='{props.listName[0]}'> <h3 className="coinElem">{ props.listName[0] }</h3> </a>

            <a href ='{props.listName[1]}'>  <h3 className="coinElem">{ props.listName[1] }</h3> </a>

            <a href ='{props.listName[2]}'>  <h3 className="coinElem">{ props.listName[2] }</h3> </a>

            <a href ='{props.listName[3]}'> <h3 className="coinElem">{ props.listName[3] }</h3> </a>

            <a href ='{props.listName[4]}'>  <h3 className="coinElem">{ props.listName[4] }</h3> </a>

            <a href ='{props.listName[5]}'>  <h3 className="coinElem">{ props.listName[5] }</h3> </a>

            <a href ='{props.listName[6]}'> <h3 className="coinElem">{ props.listName[6] }</h3> </a>

            <a href ='{props.listName[7]}'> <h3 className="coinElem">{ props.listName[7] }</h3> </a>

            <a href ='{props.listName[8]}'>  <h3 className="coinElem">{ props.listName[8] }</h3> </a>

            <a href ='{props.listName[9]}'>  <h3 className="coinElem">{ props.listName[9] }</h3> </a>

            <a href ='{props.listName[10]}'> <h3 className="coinElem">{ props.listName[10] }</h3> </a>

           <a href ='{props.listName[11]}'>  <h3 className="coinElem">{ props.listName[11] }</h3> </a>  */}
            <div>
               
            </div>
            
        </div>
        
    );
}

export { Field };