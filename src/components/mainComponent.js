
import { Component } from 'react';

import { DISHES } from '../shared/dishes';
import DishDetailComponent from './dishDetailComponent';
import Footer from './footer';
import Header from './header';
import Menu from './menuComponent';


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
    return (
      <div>

        <Header/>

        <Menu dishes = {this.state.dishes} onClick = {(dishId)=> this.onDishSelect(dishId)}/>

        <DishDetailComponent dishDetails = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDishId)[0]}/>

        <Footer/>

      </div>
    );
  }
}


export default Main;
