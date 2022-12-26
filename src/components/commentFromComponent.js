import React , {Component} from "react";

import { 
    Button, Modal, ModalHeader, ModalBody, FormFeedback,
    Form, FormGroup, Input, Row, Col, Label 
 } from 'reactstrap';

 import { Control, LocalForm, Errors } from 'react-redux-form';



class CommentFormComponent extends Component{


    constructor(props){
        super(props)

        this.state = {

            isModalOpen : false

        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit =  this.handleSubmit.bind(this);

    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }

   

    render(){

        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);

        return(
            <>
            <Button outline onClick={this.toggleModal}><span className="fa fa-comment fa-lg"></span> Submit Comment</Button>

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm 
                   onSubmit={(values) => this.handleSubmit(values)}
                    >


                    <Row className="form-group mt-3">
                        <Label htmlFor="rating" >Rating</Label>

                        <Col className="mt-2">
                            <Control.select model=".rating" name="rating"
                                className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>

                            </Control.select>
                        </Col>
                    </Row>

                     <Row className="form-group mt-3">
                        <Label htmlFor="name" >Your Name</Label>
                        <Col className="mt-2">
                            <Control.text model=".name" id="name" name="name"
                                placeholder="Name"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                                />
                            <Errors
                                className="text-danger"
                                model=".name"
                                show="touched"
                                messages={{
                                    required: ' *Required* ',
                                    minLength: ' *Value must be greater than 2 characters* ',
                                    maxLength: ' *Value must be 15 characters or less* '
                                }}
                            />
                        </Col>
                    </Row>

                     <Row className="form-group mt-3">  
                        <Label htmlFor="comment" >Comment</Label>
                        <Col className="mt-2">
                            <Control.textarea model=".message" id="message" name="message"
                                rows="12"
                                className="form-control" 
                                validators={{
                                    required, 
                                }}/>
                            <Errors
                                className="text-danger"
                                model=".name"
                                show="touched"
                                messages={{
                                    required: ' *Required* ',
                                   
                                }}
                            />
                        </Col>
                    </Row>

                    <Row className="form-group mt-3">
                        <Col >
                            <Button type="submit" color="primary">
                            Submit
                            </Button>
                        </Col>
                    </Row>  
</LocalForm>
                        

                    </ModalBody>
                </Modal>
    
            </>
        );
    }

  

}


export default CommentFormComponent