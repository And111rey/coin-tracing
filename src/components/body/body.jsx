import React, { Component } from 'react';
import './body.css';
import { Bitcoin } from './coinList/00Bitcoin/bitcoin.jsx';
import { Bancor } from './coinList/01Bancor/bancor.jsx';
import { Ripple } from './coinList/02Ripple/ripple.jsx';
import { LiteCoin } from './coinList/03LiteCoin/liteCoin.jsx';
import { Ethereum } from './coinList/04Ethereum/ethereum.jsx';
import { Bitcoin_Cash } from './coinList/05Bitcoin_Cash/bitcoin_cash.jsx';
import { SunConrtact } from './coinList/06SunContract/sunContract.jsx';
import { Eos } from './coinList/07EOS/Eos.jsx';
import { Tron } from './coinList/08Tron/tron.jsx';
import { ZCash } from './coinList/09ZCash/zCash.jsx';
import { Venge } from './coinList/10Verge/Venge.jsx';
import { Status } from './coinList/11Status/status.jsx';
import { Siacoin } from './coinList/12Siacoin/siacoin.jsx'; 

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {NavLink} from 'react-router-dom';


const Body = (props) => {
    return(
        <BrowserRouter>
        <div className="body">

                <div className="routes">
                
                    {/* < Route exact path='/0' component= { < Bitcoin data={props.price} /> }  /> */}
                    < Route exact path='/0' component= { () => < Bitcoin data= {props.price} /> } />
                    < Route exact path='/1' component= { () => < Bancor data={props.price} />} />
                    < Route exact path='/2' component= { () => < Ripple data={props.price} /> } />
                    < Route exact path='/3' component= { () => < LiteCoin data={props.price} /> } />
                    < Route exact path='/4' component= { () => < Ethereum data={props.price} /> } />
                    < Route exact path='/5' component= { () => < Bitcoin_Cash data = {props.price} /> } />
                    < Route exact path='/6' component= { () => < SunConrtact data={props.price} /> } />
                    < Route exact path='/7' component= { () => < Eos data={props.price} />} />
                    < Route exact path='/8' component= { () => < Tron data={props.price} /> } />
                    < Route exact path='/9' component= { () => < ZCash data={props.price} />} />
                    < Route exact path='/10' component= { () => < Venge data={props.price} /> } />
                    < Route exact path='/11' component= { () => <Status data={props.price} />} />
                    < Route exact path='/12' component= { () => < Siacoin data={props.price} /> } />
             
                </div>    

        </div>  
        </BrowserRouter>   
    );  
}

export { Body };