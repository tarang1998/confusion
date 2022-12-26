
import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle  ,  Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { Link } from 'react-router-dom';
import CommentFormComponent from './commentFromComponent';


function RenderDish({dishDetail}){

    return(
        <div  className="col-12 col-md-5 m-1 mt-5 mb-5" >
    <Card>
        <CardImg top src={dishDetail.image} alt={dishDetail.name} />
        <CardBody>
        <CardTitle>{dishDetail.name}</CardTitle>
        <CardText>{dishDetail.description}</CardText>
        </CardBody>
    </Card>
</div>
    );
    
}


function RenderComments({comments}){

    const displayComments = comments.map((comment)=>{
        return(
            <div key={comment.id} className = 'm-1 mb-4 '>
                <p> -- {comment.comment}</p>
                @ {comment.author} | {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
            </div>  
        ) 

  
    });

    return(
        <div  className="col-12 col-md-5 m-1 mt-5 mb-3">
            <h1>Comments</h1>
            <br/>
            {displayComments}
            <CommentFormComponent />
        </div>
   );

}

const DishDetailComponent = (props) => {

    // if (props.dish != null) {


        

        return(
            <div className="container">

                <div className="row mt-5">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>

                <div className="row">
                   
                   <RenderDish dishDetail = {props.dish}/>

                   <RenderComments comments = {props.comments}/>

                   
                </div>

                

            </div>
            
            
        );
    // }

    // else
    //     return(
    //         <div>

    //         </div>
    //     );

}


export default DishDetailComponent;