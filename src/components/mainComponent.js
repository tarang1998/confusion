
import { Component } from 'react';

import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

import DishDetailComponent from './dishDetailComponent';
import Footer from './footer';
import Header from './header';
import Menu from './menuComponent';
import Home from './home'

import {Routes, Route, Navigate } from 'react-router-dom';
import Contact from './contactComponent';



class Main extends Component{

  constructor(props){
    super(props)

  
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };

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

              <Route path='/home' element={<Home  dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}/>} />

              <Route  path='/menu' element={<Menu dishes={this.state.dishes} />} />

              <Route  path='/contactus' element={<Contact/>} />


              <Route path="*" element={<Navigate to="/home" replace />} />

          </Routes>


        <Footer/>

      </div>
    );
  }
}


export default Main;
