import React from 'react';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

function RenderCard({item}) {

    return(

        <div className="col-12 col-md m-1">
            <Card>
                <CardImg height = {600} width = {800} src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        </div>
       
    );

}


function Home(props) {
    return(
        <div className="container">
        <div className="row align-items-start mt-5 mb-5">
           
                <RenderCard item={props.dish} />
                <RenderCard item={props.promotion} />
                <RenderCard item={props.leader} />
        </div>
    </div>
    );
}

export default Home;   