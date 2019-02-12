import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import { Header } from './components/header/header.jsx';
import { Field } from './components/field/field.jsx';
import axios from 'axios';
import { Body } from './components/body/body.jsx';
import { NavLink } from 'react-router-dom';

class App extends Component {

    state = {
      coinsArr: []
    }

    componentWillMount() {
      this.getCoin();
    }

    getCoin() {
      axios.get('http://km.softbistro.online:20080/coins/')
      .then(response => {
        this.setState({coinsArr: response.data.data}, () => {
          console.log(this.state.coinsArr);
        })
      })
    }    
        consApi = ()=> {
           let st = this.state.coinsArr;
           console.log(st[0].name);
        }
         
  render() {

   const items = this.state.coinsArr.map((el, i) => {
      return(
        <div> <a href={ i }  > {el.name} </a> <br/> <br/> </div> 
        
      )
   })

   const price = this.state.coinsArr.map((el, i) => {
    return(
       <div>  {el.price}   </div>
    )
 })

    const id = this.state.coinsArr.map((el, i) => {
      return(
          <div>{i}</div> 
      )
   }) 


    return (
    
        <div className="App">
           < Header />
           < Field listName={items}  />
           < Body  price={price} id={id} />
           
       
           {/* <div><input className="butt" type="button" value='api to console' onClick={this.consApi} /></div> */}
        </div>
       
      
    );
  }
}




export  { App };
