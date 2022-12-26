
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

import {Routes, Route, Navigate ,useParams} from 'react-router-dom';
import Contact from './contactComponent';
import About from './aboutUsComponent';

import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}





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

  // onDishSelect(dishId) {
  //   this.setState({ selectedDishId: dishId});
    
  //   }   


  render(){


    // const HomePage = () => {
    //   return(
    //       <Home 
    //       />
    //   );
    // }

    const DishWithId = () => {

      let {dishId}=useParams()


      return(
          <DishDetailComponent dish={this.props.dishes.filter((dish) => dish.id === parseInt(dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(dishId,10))} />
      );
    };
    

    return (
      <div>

        <Header/>

        {/* <Menu dishes = {this.state.dishes} onClick = {(dishId)=> this.onDishSelect(dishId)}/>

        <DishDetailComponent dishDetails = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDishId)[0]}/> */}

          <Routes>

              <Route path='/home' element={<Home  dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}/>} />

              <Route  exact path='/menu' element={<Menu dishes={this.props.dishes} />} />

              <Route  path='/menu/:dishId'   
              element = {<DishWithId/>}
              />

              <Route  path='/contactus' element={<Contact/>} />

              <Route  path='/aboutus' element={<About leaders = {this.props.leaders}
              />} />


              <Route path="*" element={<Navigate to="/home" replace />} />

          </Routes>


        <Footer/>

      </div>
    );
  }
}


export default (connect(mapStateToProps)(Main));
