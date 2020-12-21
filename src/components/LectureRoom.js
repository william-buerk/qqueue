import React from "react";
import RoomHeader from "./RoomHeader";
import Question from "./Question";
import QuestionInput from "./QuestionInput";

export default class LectureRoom extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			questions: [
				{
					name: "Jenny",
					question: "What do cells do with glucose after the Calvin cycle?",
					likes: 25,
				},
				{ name: "Anonymous", question: "How do trees grow?", likes: 15 },
				{
					name: "Bobby Davis",
					question:
						"How does Type O blood have antibodies against A and B blood types if a type O person has never had A or B type blood in their body? My logic is, in order to make antibodies against anything, you have to be exposed to that something first, and your immune system has to recognize it as a threat and use T cells and B cells to help with the antibody making. My question is... how is it that everyone with type O blood has antibodies when they’ve never been exposed to type A and type B blood???",
					likes: 11,
				},
				{
					name: "Grant",
					question: "How can you find water potential?",
					likes: 10,
				},
				{
					name: "Johnathan",
					question: "How do you do a punnet square with more than one gene?",
					likes: 10,
				},
				{
					name: "Madeline A.",
					question: "How does water move up the xylem?",
					likes: 1,
				},
				{
					name: "Heather",
					question: "Can you define 'Non dominant genes' again?",
					likes: 0,
				},
			],
		};
	}

	handleSubmit = (question) => {
		this.handleNewQuestion(question);
	};

	//makes visual changes but i'm not sure if adds question to array
	handleNewQuestion = (question) => {
		const questions = this.state.questions.concat({
			name: "Billy Buerk",
			question: question,
			likes: 0,
		});
		this.setState({ questions });
	};

	sortQuestions = () => {
		const questions = this.state.questions;

		for (var i = 1; i < questions.length; i++) {
			let key = questions[i];
			let j = i - 1;
			while (j >= 0 && questions[j].likes < key.likes) {
				questions[j + 1] = questions[j];
				j = j - 1;
			}
			questions[j + 1] = key;
		}
		this.setState({ questions });
	};

	//WIP
	handleLike = (key) => {
		const questions = this.state.questions;
		for (var i = 0; i < questions.length; i++) {
			if (questions[i].name + questions[i].question === key) {
				questions[i].likes++;
			}
		}
		this.setState({ questions });
	};

	handleSort = () => {
		this.sortQuestions();
	};

	render() {
		return (
			<div className="LectureRoom">
				<RoomHeader handleSort={this.handleSort} />
				<div className="QuestionList">
					<ul>
						{this.state.questions.map((item) => {
							return (
								<Question
									key={item.name + item.question}
									question={item.question}
									name={item.name}
									likes={item.likes}
									handleLike={this.handleLike}
								/>
							);
						})}
					</ul>{" "}
				</div>

				<QuestionInput handleSubmit={this.handleSubmit} />
			</div>
		);
	}
}
