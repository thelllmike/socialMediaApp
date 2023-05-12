import React, { Component , useState } from "react";
import ThemeToggle from "./Theme";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "../Styles/Page.css";

export default class post extends Component {
	constructor(props) {
		super(props);
		// this.state = { placeholder: "dd/mm/yyyy" };
		// this.handleClick = this.handleClick.bind(this);

		this.onChangelocation = this.onChangelocation.bind(this);
		this.onChangedescription = this.onChangedescription.bind(this);
		this.onChangehashtag = this.onChangehashtag.bind(this);
		
	

		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			location: "",
			description: "",
            hashtag: "",
			
			
		};

	}

	

	onChangelocation(e) {
		this.setState({
			location: e.target.value,
		});
	}
	onChangedescription(e) {
		this.setState({
			description: e.target.value,
		});
	}
	onChangehashtag(e) {
		this.setState({
			hashtag: e.target.value,
		});
	}

	onSubmit(e) {
		e.preventDefault();
		const obj = {
			location: this.state.location,
			description: this.state.description,
			hashtag: this.state.hashtag,
		
	
	};


	axios.post("http://localhost:8080/post", obj).then((res) => {
			alert("add Successfully");
			this.setState({
			location: "",
			description: "",
            hashtag: "",
			
				
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
							
							<div class='inputGroup'>
							<label htmlFor='username'>location</label>
								<input
									type='text'
									placeholder='Enter location'
									id='username'
									required
										value={this.state.location}
										onChange={this.onChangelocation}
								/>
							</div>
							<div class='inputGroup'>
							<label htmlFor='username'>Description</label>
								<input
									type='text'
									placeholder='Enter Post'
									id='username'
									required
										value={this.state.description}
										onChange={this.onChangedescription}
								/>
							</div>
                            <div class='inputGroup'>
							<label htmlFor='username'>Hashtag</label>
								<input
									type='text'
									placeholder='Enter Hashtag'
									id='username'
									required
										value={this.state.hashtag}
										onChange={this.onChangehashtag}
								/>
							</div>

							<button class='submit'>Post</button>
						
							
						</form>
					</div>
				</div>
			</div>
		);
	}
}
