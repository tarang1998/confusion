import React from 'react';
// import {Media} from 'reactstrap';
import { Card, CardImg, CardImgOverlay,
    CardTitle ,Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { Link } from 'react-router-dom';



    function RenderDish({dish}){
        return(
                <Card key={dish.id} 
                // onClick={() => onClick(dish.id)} 
                className = 'mt-3 mb-3'>
                <Link to={`/menu/${dish.id}`} >

                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                        </Link>

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
                <div key={dish.id} className = 'col-12 col-md-3 m-1'>
                    <RenderDish dish = {dish} 
                    // onClick = {props.onClick}
                    />
                </div>  
            ) 
        });

        return (

            <div className = 'container'>

                <div className="row mt-5">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>

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