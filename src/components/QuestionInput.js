import React from "react";

export default class QuestionInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: "",
		};
	}

	//WIP
	handleChange = (event) => {
		this.setState({ value: event.target.value });
	};

	//WIP
	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ value: "" });
	};

	render() {
		return (
			<div className="QuestionInput">
				<form
					onSubmit={(event) => {
						this.props.handleSubmit(this.state.value);
						this.handleSubmit(event);
					}}
					className="InputBoxAndSubmit"
				>
					<label>
						<input
							className="InputBox"
							type="text"
							value={this.state.value}
							onChange={this.handleChange}
						/>
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}
