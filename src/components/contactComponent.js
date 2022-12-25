
import React ,  { Component } from 'react';

import { Breadcrumb, BreadcrumbItem ,Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';
import telephoneCheck from '../utils/telephoneValidator';
import validateEmail from '../utils/emailValidation';

class  Contact extends Component {

    constructor(props){
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);


    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        

        // Validate the fields
        const error = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email)


        if(error.firstname === '' && 
        error.lastname === '' && 
        error.email === '' && 
        error.telnum === '' && 
        this.state.touched.firstname &&
        this.state.touched.lastname &&
        this.state.touched.email &&
        this.state.touched.telnum){
            console.log('Current State is: ' + JSON.stringify(this.state));
            alert('Submitted Successfully. Current State is: ' + JSON.stringify(this.state));
            event.preventDefault();
        }
        else{
            this.setState({
                touched: {
                    firstname: true,
                    lastname: true,
                    telnum: true,
                    email: true
                 }
            });
            event.preventDefault();

        }

       
    }

    handleBlur = (field)  => (event) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            canProceed : false
        };

        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be greater than 3 characters';
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be less than 10 characters';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be greater than 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be lesser than 10 characters';

        if (this.state.touched.telnum && !telephoneCheck(telnum) )
            errors.telnum = 'Invalid Telephone No. Entered';

        if(this.state.touched.email && !validateEmail(email))
            errors.email = 'Invalid Email Id Entered';
        
        if(errors.firstname === '' && 
        errors.lastname === '' && 
        errors.email === '' && 
        errors.telnum === '' && 
        this.state.touched.firstname &&
        this.state.touched.lastname &&
        this.state.touched.email &&
        this.state.touched.telnum){
            errors.canProceed = true
        }

        return errors;
    }

    
    render(){

        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);


        const DisplayMediumOfContact=()=>{
            if(this.state.agree){
                return(
                    <Col md={{size: 3, offset: 1}}>
                                    <FormGroup >
                                        <Input type="select" name="contactType"
                                                value={this.state.contactType}
                                                onChange={this.handleInputChange}>
                                            <option>Tel.</option>
                                            <option>Email</option>
                                        </Input>
                                        </FormGroup>
                                    </Col>
                );
            }
            else{
                return <></>
            }
        }
    

        return(

            <div className="container">
    
                <div className="row mt-5">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>                
                </div>
    
                <div className="row row-content">
    
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
    
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>   
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
    
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
    
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
    
                </div>



                

                <div className="row row-content">

                   <div className="col-12">
                      <h3>Send us your Feedback</h3>
                   </div>

                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row className='mt-5'>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onBlur={this.handleBlur('firstname')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>

                                </Col>
                            </FormGroup>

                            <FormGroup row className='mt-5'>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        valid={errors.lastname === ''}
                                        invalid={errors.lastname !== ''}
                                        onBlur={this.handleBlur('lastname')}
                                        onChange={this.handleInputChange} />
                                 <FormFeedback>{errors.lastname}</FormFeedback>

                                </Col>                        
                            </FormGroup>

                            <FormGroup row className='mt-5'>
                            <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum"
                                        placeholder="Tel. number"
                                        value={this.state.telnum}
                                        valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}
                                        onBlur={this.handleBlur('telnum')}
                                        onChange={this.handleInputChange} />
                                         <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>

                            </FormGroup>

                            <FormGroup row className='mt-5'>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onBlur={this.handleBlur('email')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row className='mt-5'>
                                <Col md={{size: 6, offset: 2}}>

                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                
                                <DisplayMediumOfContact/>
                              
                                

                            </FormGroup>

                            <FormGroup row className='mt-5'>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                        value={this.state.message}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row className='mt-5'>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color={errors.canProceed ? "primary" : "secondary"}>
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
               </div>


    
            </div>
        );
    }

    
}

export default Contact;