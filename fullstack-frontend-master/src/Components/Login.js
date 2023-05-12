import React, { Component } from "react";
import ThemeToggle from "./Theme";

import "../Styles/Page.css";

export default class Login extends Component {
	render() {
		return (
			<div className='Page'>
				<ThemeToggle />
				<div class='inFormBackground'>
					<div class='circle'></div>
					<div class='circle'></div>
					<div class='Form'>
						<form onsubmit='return false'>
							<div class='title'>
								<h3>Login Here</h3>
							</div>
							<div class='inputGroup'>
                            <label htmlFor='username'>Email</label>
								<input type='email' placeholder='Enter Email' id='email' />
							</div>
							<div class='inputGroup'>
                            <label htmlFor='username'>Password</label>
								<input
									type='password'
									placeholder='Enter Password'
									id='password'
								/>
							</div>
							<button class='submitForm'>Log In</button>
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
                            <a href="/register" className="link">Still Don't have an Account?</a>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
