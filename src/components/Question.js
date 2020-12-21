import React from "react";

export default class Question extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: this.props.name,
			question: this.props.question,
			likes: this.props.likes,
		};
	}

	handleLike = () => {
		this.setState({ likes: this.state.likes + 1 });
	};

	render() {
		return (
			<div className="Question">
				<div>
					{this.state.name}: {this.state.question}
				</div>
				<button
					className="LikeButton"
					onClick={() => {
						this.handleLike();
						this.props.handleLike(
							/*key*/ this.state.name + this.state.question
						);
					}}
				>
					Likes: {this.state.likes}
				</button>
				<button className="ReplyButton">Reply</button>
			</div>
		);
	}
}
