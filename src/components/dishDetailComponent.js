
import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


class DishDetailComponent extends Component{


    constructor(props){
        super(props);
        
        
    }

    render(){

        if (this.props.dishDetails != null) {

            const dishDetail = this.props.dishDetails;

            const comments = dishDetail.comments.map((comment)=>{
                return(
                    <div key={comment.id} className = 'm-1 mt-5'>
                        <p>{comment.comment}</p>
                        -- {comment.author}, {comment.date}
                       
                    </div>  
                ) 
            });

            return(
                <div className="row">
                  <div  className="col-12 col-md-5 m-1 mt-5">
                    <Card>
                        <CardImg top src={dishDetail.image} alt={dishDetail.name} />
                        <CardBody>
                        <CardTitle>{dishDetail.name}</CardTitle>
                        <CardText>{dishDetail.description}</CardText>
                        </CardBody>
                    </Card>
                  </div>

                  <div  className="col-12 col-md-5 m-1 mt-5">
                    <h1>Comments</h1>
                    <br/>
                    {comments}
                  </div>

                </div>
                
            );
        }

        else
            return(
                <div>

                </div>
            );
      
    }

}

export default DishDetailComponent;