import { Component } from "react/cjs/react.production.min";

import {Card , CardImg  , CardBody ,CardTitle ,CardText} from 'reactstrap';


class DishDetailComponent extends Component{

    constructor(props){
        super(props);
    }

    render(){

        const dish = this.props.dish;

        if(dish!==null){

            const dishComments = dish.comments.map((comment)=>{
                return (
                    <div className = 'col-12'>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}  {comment.date}</p>
                        <br/>
                    </div>
                );
            });

            return(
                <div className='row'>

                    <div className='col-12 col-md-5 m-2'>

                        <Card>
                            
                            <CardImg width='100%' src={dish.image} alt={dish.name} />

                            <CardBody >

                                <CardTitle >{dish.name}</CardTitle>

                                <CardText>{dish.description}</CardText>

                            </CardBody>

                        </Card>

                    </div>

                    <div className='col-12 col-md-5 m-2'>

                        <h1>Comments</h1>
                        {dishComments}

                    </div>

                </div>
            );
        }
        else{
            return (
                <div>
                </div>
            );
        }
       

    }
}

export default DishDetailComponent;