import React, { Component , useState } from "react";
import ThemeToggle from "./Theme";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "../Styles/Page.css";

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = { placeholder: "dd/mm/yyyy" };
		this.handleClick = this.handleClick.bind(this);

		this.onChangeusername = this.onChangeusername.bind(this);
		this.onChangename = this.onChangename.bind(this);
		this.onChangeemail = this.onChangeemail.bind(this);
		this.onChangepassword = this.onChangepassword.bind(this);
		this.onChangecpassword = this.onChangecpassword.bind(this);
		this.onChangedob = this.onChangedob.bind(this);
	

		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			username: "",
			name: "",
			email: "",
			password: "",
			cpassword: "",
			dob: "",
			
		};

	}

	handleClick() {
		if (this.state.placeholder === "dd/mm/yyyy") {
			this.setState({ placeholder: "" });
		}
	}

	onChangeusername(e) {
		this.setState({
			username: e.target.value,
		});
	}
	onChangename(e) {
		this.setState({
			name: e.target.value,
		});
	}
	onChangeemail(e) {
		this.setState({
			email: e.target.value,
		});
	}
	onChangepassword(e) {
		this.setState({
			password: e.target.value,
		});
	}

	onChangecpassword(e) {
		this.setState({
			cpassword: e.target.value,
		});
	}

	onChangedob(e) {
		this.setState({
			dob: e.target.value,
		});
	}
	onSubmit(e) {
		e.preventDefault();
		const obj = {
			username: this.state.username,
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			cpassword: this.state.cpassword,
			dob: this.state.dob,
			
	
	};


	axios.post("http://localhost:8080/user", obj).then((res) => {
			alert("add Successfully");
			this.setState({
				username: "",
				name: "",
				email: "",
				password: "",
				cpassword: "",
				dob: "",
			});
			console.log(res.data);
		});
		this.props.history.push("/");

		window.location.replace("/");


	}

	render() {
		return (
			<div className='Page'>
				<ThemeToggle />
				<div class='inFormBackground'>
					<div class='circle'></div>
					<div class='circle'></div>
					<div class='Form'>
						<form onSubmit={this.onSubmit}>
							<div class='title'>
								<h3>Register Here</h3>
							</div>
							<div class='inputGroup'>
							<label htmlFor='email'>Email</label>
								<input type='email' placeholder='Enter Email' id='email' required
										value={this.state.email}
										onChange={this.onChangeemail}/>
							</div>
							<div class='inputGroup'>
							<label htmlFor='username'>User Name</label>
								<input
									type='text'
									placeholder='Enter User Name'
									id='username'
									required
										value={this.state.username}
										onChange={this.onChangeusername}
								/>
							</div>
							<div className='inputGroup'>
								<label htmlFor='dob'>Date of Birth</label>
								<input type='date' id='dob' required
										value={this.state.dob}
										onChange={this.onChangedob}/>
							</div>

							<div class='inputGroup'>
							<label htmlFor='password'>Password</label>
								<input
									type='password'
									placeholder='Enter Password'
									id='password'
									required
										value={this.state.password}
										onChange={this.onChangepassword}
								/>
							</div>
							<div class='inputGroup'>
							<label htmlFor='confirmpassword'>Confirm Password</label>
								<input
									type='password'
									placeholder='Confirm Password'
									id='password'
									required
										value={this.state.cpassword}
										onChange={this.onChangecpassword}
								/>
							</div>
							<button class='submit'>Register</button>
							<div class='social'>
								<div class='go'>
									<i class='fab fa-google'></i>
								</div>
								<div class='fb'>
									<i class='fab fa-facebook'></i>
								</div>
								<div class='tw'>
									<i class='fab fa-twitter'></i>
								</div>
							</div>
							<a href='/' className='link'>
								Already Have an Account?
							</a>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
