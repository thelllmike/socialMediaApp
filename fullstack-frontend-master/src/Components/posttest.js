import  React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import InventoryTableRow from './inventoryOderTableRow';

import logo from "../logo.png";
import './css/LandingPage.css';
import Footer from './footer';


export default  class postview extends  Component{


    
    constructor(props) {
        super(props);
        this.state = {post : [], search:''};
        this.state.Station = this.props.match.params.id;

        this.onChangeSearch = this.onChangeSearch.bind(this);
    }

    onChangeSearch(e){
        this.setState( {
           search: e.target.value
        });

    }

    componentDidMount() {
        // alert('email is ' +this.props.match.params.id);
        axios.get('http://localhost:8080/posts/')
            .then(response => {
                // alert('Pass una')
                // alert('Data Tika :'+response.data)
                this.setState({post : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    // tabRow(){
    //     return this.state.post.map(function (object, i){
    //         return <InventoryTableRow obj = {object} key = {i}/>;
    //     });
    //     // return <OrderTableRow obj={this.state.orders}/>
    // }

 
    
    render() {
        return(
            <div class = "wrap">
                    <Navbar>
                      </Navbar>
                    
                      <nav className="navbar navbar-expand-lg navbar-light bg-info ">
                        <div className="collapse navbar-collapse" id = "navbarSupportedContent">
                            <ul className="navbar-nav mr-auto font-weight-bold form-control-lg text-dark ">

                                <li className="nav-item">
                                    <Link to={'/'} className = "nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/create'} className = "nav-link ">Add Inventory</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={'/inventoryView'} className = "nav-link">View Inventory</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/aboutUs'} className = "nav-link">Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/aboutUs'} className = "nav-link"></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/'} className = "nav-link">logout</Link>
                                </li>

                            </ul>
                        </div>
                        <Form inline >
                        <div class="form-group">
                            <input class="form-control input-sm mr-1"  type="text" placeholder='search here....'/>
                            <Button type="submit" className='btn btn-info btn-sm'>search</Button>
                        </div>
                            
                        </Form>
                    </nav>
                    <br/> <h3 align="center">Inventory</h3>
                    <div className='row-frm'>
                      
                   
                       

                       <table className="table table-striped" style = {{marginTop :20}}>
                           <thead>
                               {/* <tr>
                                  
                                   <th>location</th>
                                   <th>post</th>
                                   <th>hashtag</th>
                                   
                                  
                                   <th colSpan="3">Action</th>
                               </tr> */}
                           </thead>
                           <tbody>
                                 {/* {this.tabRow()} */}
                                 <tbody>
						{posts.map((post, index) => (
							<tr>
								<th scope='row' key={index}>
									{index + 1}
								</th>
								<tr>
									<td>{post.location}</td>
								</tr>
								<tr>
									<td>{post.description}</td>
								</tr>
								<tr>
									<td>{post.hashtag}</td>
								</tr>
								<tr>
									<td>
										{/* <Link
											className='btn btn-primary mx-2'
											// eslint-disable-next-line no-undef
											to={`/viewPost/${post.id}`}>
											View
										</Link> */}
										<Link
											className='btn btn-outline-primary mx-2'
											to={`/editPost/${post.id}`}>
											Edit
										</Link>
										{/* <button
											className='btn btn-danger mx-2'
											onClick={() => deletepost(post.id)}>
											Delete
										</button> */}
									</td>
								</tr>
							</tr>
						))}
					</tbody>
                           </tbody>
                       </table>
                     
                    </div>

                    <br/><br/>
                    <br/>  <br/>  <br/>  <br/><br/>  <br/>  <br/>  <br/>
                    <div>
                         <hr className="shadow-lg card-footer"/>
                    </div>
                    <br/>  <br/>  <br/>  <br/>
                    <Footer/> 
            </div>
            
        )
    }
}

