
import { Component } from 'react';

import { DISHES } from '../shared/dishes';
import DishDetailComponent from './dishDetailComponent';
import Footer from './footer';
import Header from './header';
import Menu from './menuComponent';
import Home from './home'

import {Routes, Route, Navigate } from 'react-router-dom';



class Main extends Component{

  constructor(props){
    super(props)

    this.state={
      dishes : DISHES,
      selectedDishId : null
    }

  }

  onDishSelect(dishId) {
    this.setState({ selectedDishId: dishId});
    
    }   


  render(){


    const HomePage = () => {
      return(
          <Home 
          />
      );
    }

    return (
      <div>

        <Header/>

        {/* <Menu dishes = {this.state.dishes} onClick = {(dishId)=> this.onDishSelect(dishId)}/>

        <DishDetailComponent dishDetails = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDishId)[0]}/> */}

          <Routes>

              <Route path='/home' element={<Home/>} />

              <Route  path='/menu' element={<Menu dishes={this.state.dishes} />} />

              <Route path="*" element={<Navigate to="/home" replace />} />

          </Routes>


        <Footer/>

      </div>
    );
  }
}


export default Main;
