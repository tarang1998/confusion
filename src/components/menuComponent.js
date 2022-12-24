import React from 'react';
// import {Media} from 'reactstrap';
import { Card, CardImg, CardImgOverlay,
    CardTitle } from 'reactstrap';



    function RenderDish({dish, onClick}){
        return(
                <Card key={dish.id} onClick={() => onClick(dish.id)} className = 'mt-3 mb-3'>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>

                    /* <Media className= 'row' >
                        
                        <Media left  href = '#' className = 'col-md-2'>
                            <Media object src={dish.image} alt={dish.naUthappizzame} />
                        </Media>


                        <Media body className = 'col-md-9 '>
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>

                    </Media> */
        );

    }



   const Menu = (props) => {

        const menu = props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className = 'col-12 col-md-5 m-1'>
                    <RenderDish dish = {dish} onClick = {props.onClick}/>
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

            </div>

        );

    }


export default Menu;