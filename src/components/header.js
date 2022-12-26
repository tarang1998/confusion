import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, FormFeedback,
    Form, FormGroup, Input, Label
 } from 'reactstrap';
import { NavLink } from 'react-router-dom';



class Header extends Component{

    constructor(props){
        super(props)

        this.state = {
            isNavOpen : false,
            isModalOpen: false,
            touched : {
                username : false,
                password : false
            },
            errors : {
                username : '',
                password : ''
            }

        }

        this.toggleNav = this.toggleNav.bind(this)
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);


    }

    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

      handleBlur = (field)  => (event) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;


        if(name === 'username'){
            if(value.length < 3 || value.length > 10){
                this.setState({
                    errors:{ ...this.state.errors, username : 'Invalid Username Entered'}
                })
            } 
            else{
                this.setState({
                    errors:{ ...this.state.errors, username : ''}

                })
            }
        }

        else if (name === 'password'){

            if(value.length < 3){
                this.setState({
                    errors:{ ...this.state.errors, password : 'Invalid Password'}

                })
            } 
            else{
                this.setState({
                    errors:{ ...this.state.errors, password : ''}

                  
                })
            }

        }
        
    }



      handleLogin(event) {

        if(
        this.state.touched.username &&
        this.state.touched.password &&
        this.state.errors.username === '' &&
        this.state.errors.password === ''){
            this.toggleModal();
            alert("Username: " + this.username.value + " Password: " + this.password.value
                + " Remember: " + this.remember.checked);
            event.preventDefault();
        }
        else{
            this.setState({
                touched: {
                    username: true,
                    password: true,
                   
                 },
                 errors :
                 {
                    username : 'Required Field',
                    password : 'Required Field'
                 }

            });
            event.preventDefault();

        }

       

    }


    render(){


        return(
            <>
                 <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            </Nav>

                            
                           

                        </Collapse>

                        <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav>

                    </div>
                </Navbar>
    
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>

                        <Form onSubmit={this.handleLogin}>
                            <FormGroup className="mt-3">
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    placeholder="Username"
                                    onBlur={this.handleBlur('username')}
                                    valid={this.state.errors.username === ''}
                                    invalid={this.state.errors.username !== ''}
                                    onChange={this.handleInputChange}
                                    innerRef={(input) => this.username = input} />
                                    <FormFeedback>{this.state.errors.username}</FormFeedback>

                            </FormGroup>
                            <FormGroup className="mt-3">
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                                                    placeholder="Password"
                                                                    onBlur={this.handleBlur('password')}
                                                                    valid={this.state.errors.password === ''}
                                                                    onChange={this.handleInputChange}
                                                                    invalid={this.state.errors.password !== ''}
                                
                                    innerRef={(input) => this.password = input}  />
                            <FormFeedback>{this.state.errors.password}</FormFeedback>

                            </FormGroup>
                            <FormGroup check className="mt-4">
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button className="mt-3" type="submit" value="submit" color="primary">Login</Button>
                        </Form>

                    </ModalBody>
                </Modal>
                
    
            </>
    
        );
    }
}


export default Header