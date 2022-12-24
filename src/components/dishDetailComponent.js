
import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';



function RenderDish({dishDetail}){

    return(
        <div  className="col-12 col-md-5 m-1 mt-5">
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
            <div key={comment.id} className = 'm-1 mt-5'>
                <p>{comment.comment}</p>
                -- {comment.author} | {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
            </div>  
        ) 

  
    });

    return(
        <div  className="col-12 col-md-5 m-1 mt-5">
            <h1>Comments</h1>
            <br/>
            {displayComments}
        </div>
   );

}

const DishDetailComponent = (props) => {

    if (props.dishDetails != null) {

        const dishDetail = props.dishDetails;

        

        return(
            <div className="container">
                <div className="row">
                   
                   <RenderDish dishDetail = {dishDetail}/>

                   <RenderComments comments = {dishDetail.comments}/>

                   
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


export default DishDetailComponent;