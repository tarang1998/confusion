
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

    console.log('Main Components constructor method invoked')

  }

  componentDidMount(){

      console.log('Main Components ComponentDidMount method invoked')

  }

  componentDidUpdate(){

    console.log('Main Components componentDidUpdate method invoked')

  }

  onDishSelect(dishId){

        this.setState({
            selectedDishId : dishId
        })

    }

  render(){

    console.log('Main Components render method invoked')

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
