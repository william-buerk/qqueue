import React from "react";

export default class RoomHeader extends React.Component {
	render() {
		return (
			<div className="RoomHeader">
				<div className="CodeAndName">
					<div className="RoomCode">RoomCode: XC6K71Y</div>
					<button className="SortButton" onClick={this.props.handleSort}>
						<b>Sort</b>
					</button>
					<div className="Username">Username: Billy Buerk</div>
				</div>
			</div>
		);
	}
}
