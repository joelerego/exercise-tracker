import React, {Component} from 'react';
import axios from 'axios';

export default class ExercisesList extends Component {
	constructor(props) {
		super(props);

		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			username: "",
		}
	}

	onChangeUsername(e) {
		this.setState({
			username: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const user = {
			username: this.state.username
		}

		axios.post('http://localhost:5000/users/add', user)
		.then(res => console.log(res.data));

		this.setState({
			username: ""
		})
	}

	render() {
		return (
			<div>
				<h3>Create new user </h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
					<label> Username: </label>
					<input type="text"
					required={true}
					className="form-control"
					value={this.state.username}
					onChange={this.onChangeUsername}
					/>
					</div>
					<div className="form-group">
					<input type="submit"
					value="Create User"
					className="btn btn-primary" 
					/>
					</div>
				</form>
			</div>
		)
	}
}