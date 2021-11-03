
import { Component } from 'react/cjs/react.production.min';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes'
import DishDetailComponent from './DishDetailComponent';


class MainComponent extends Component{


  constructor(props){

    super(props);

    this.state={
      dishes : DISHES,
      selectedDishId : null
    }
  }

  onDishSelect(dishId){

        this.setState({
            selectedDishId : dishId
        })

    }

  render(){
    return (
      <div>

        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>

        <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)}/>

        <DishDetailComponent dish={this.state.dishes.filter((dish) => this.state.selectedDishId === dish.id)[0]}/>

      </div>
    );
  }
}

export default MainComponent;
