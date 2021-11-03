
import {Card , CardImg  , CardBody ,CardTitle ,CardText} from 'reactstrap';



function DishDetail({dish}){
    return(
        <div className='col-12 col-md-5 m-2'>
            <Card>
                                    
                <CardImg width='100%' src={dish.image} alt={dish.name} />

                <CardBody >

                    <CardTitle >{dish.name}</CardTitle>

                    <CardText>{dish.description}</CardText>

                </CardBody>

            </Card>
        </div>
    );
}

function DishComments({dishComments}){

    const comments = dishComments.map((comment)=>{
        return (
            <div  key={comment.id} className = 'col-12'>
                <p>{comment.comment}</p>
                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US',{year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                <br/>
            </div>
        );
    });

    return(
        <div className='col-12 col-md-5 m-2'>

            <h1>Comments</h1>

            {comments}

        </div>
    );

}
const DishDetailComponent = (props)=>{

    const dish = props.dish;

    if(dish !== null && dish !== undefined){

        return(
            <div className='container'>
                <div className='row'>

                <DishDetail dish={dish}/>

                <DishComments dishComments={dish.comments} />


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



export default DishDetailComponent;