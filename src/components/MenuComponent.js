import React , {Component} from 'react';
// import {Media} from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishDetailComponent from './dishDetailComponent';


class Menu extends Component{

    constructor(props){
        super(props);

        this.state = {
            selectedDish: null
        }
        
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }



    render(){

        const menu = this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className = 'col-12 col-md-5 m-1'>
                    <Card key={dish.id} onClick={() => this.onDishSelect(dish)} className = 'mt-5'>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>

                    {/* <Media className= 'row' >
                        
                        <Media left  href = '#' className = 'col-md-2'>
                            <Media object src={dish.image} alt={dish.name} />
                        </Media>


                        <Media body className = 'col-md-9 '>
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>

                    </Media> */}
                </div>  
            ) 
        });

        return (

            <div className = 'container'>
                <div className = 'row'>

                    {/* <Media list>
                        {menu}
                    </Media> */}
                    {menu}

                </div>

                <DishDetailComponent dishDetails = {this.state.selectedDish}/>

                

            </div>

        );

    }
}

export default Menu;